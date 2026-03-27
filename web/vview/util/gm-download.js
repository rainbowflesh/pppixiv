let _downloadPort = null;

// Return a promise which resolves to the download MessagePort.
function _getDownloadServer() {
	if (_downloadPort != null) return _downloadPort;

	_downloadPort = new Promise((accept, reject) => {
		const e = new Event("request-download-channel", { cancelable: true });
		if (window.dispatchEvent(e)) {
			reject("GM.xmlHttpRequest isn't available");
			return;
		}

		// The MessagePort will be returned as a message posted to the window.
		const receiveMessagePort = (e) => {
			if (e.data.cmd !== "download-setup") return;

			window.removeEventListener("message", receiveMessagePort);
			_downloadPort = e.ports[0];
			accept(e.ports[0]);
		};

		window.addEventListener("message", receiveMessagePort);
	});
	return _downloadPort;
}

function _downloadUsingServer(serverPort, { url, ...args }) {
	return new Promise((accept, reject) => {
		if (url == null) {
			reject(null);
			return;
		}

		url = new URL(url);

		const { port1: serverResponsePort, port2: clientResponsePort } =
			new MessageChannel();

		clientResponsePort.onmessage = (e) => {
			clientResponsePort.close();

			if (e.data.success) {
				accept(e.data.response);
				console.log(e.data.response);
				console.log(e.data);
				console.log(e);
			} else reject(new Error(e.data.error));
		};

		serverPort.realPostMessage(
			{
				url: url.toString(),
				...args,
			},
			[serverResponsePort],
		);
	});
}

export async function downloadPixivImage(url) {
	const server = await _getDownloadServer();
	if (server == null) throw new Error("Downloading not available");

	return await _downloadUsingServer(server, {
		url,
		headers: {
			"Cache-Control": "max-age=360000",
			Referer: "https://www.pixiv.net/",
			Origin: "https://www.pixiv.net/",
		},
	});
}

// Make a direct request to the download server.
export async function sendRequest(args) {
	const server = await _getDownloadServer();
	if (server == null) throw new Error("Downloading not available");

	return await _downloadUsingServer(server, args);
}
