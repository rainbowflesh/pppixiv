# PPixiv Plus

A PPixiv overhaul.

![preview](assets/preview.png "preview")

## What's news

- New ui style;
- Morden UX;
- Optimization, performance boots;
- More biased invasive changing;
- Compatible with ppixiv;
- And more ...

## Install

Get on [Greasyfork](https://greasyfork.org/en/scripts/537094-pppixiv-for-pixiv "https://greasyfork.org/en/scripts/537094-pppixiv-for-pixiv")

Or [click me](https://github.com/rainbowflesh/pppixiv/releases/latest/download/pppixiv.user.js "https://github.com/rainbowflesh/pppixiv/releases/latest/download/pppixiv.user.js")

### Note

ADblock may cause compatibility issue, disable it.

## Build

`python -m vview.build.build_ppixiv`

## Live Debug

```python
pip install pathspec watchdog
python -m vview.build.build_ppixiv_watch -p 8000
```

Then install fellow script: `output/ppixiv-debug.user.js;`

## TODO

This project contain spaghetti code, god object, lacks modularity, unmaintainable, legacy hacks everywhere, hardcoded everything, no abstraction, no encapsulation, tightly coupled and brittle, cryptic variable names, JapaneseEnglish, inconsistent style, walls of code with walls of comments, ug-prone by design, fails silently, reinvents the wheel poorly, violates basic best practices, etc etc...

Pixiv is a site I use daily, yet the platform itself—being a mess built with PHP is fundamentally flawed. I’ve long lost confidence in maintaining this repository, as every change feels like it chipping out my poorly soul. I've entertained the thought of rewriting it more than once, but the pressures of reality have left me with little chance to create something truly satisfying. To all users: please make do with what’s here. Life’s focus should be on the pursuit of beauty, not on the frustration of bad code best left unseen. I love you, I love me.

https://github.com/Droogans/unmaintainable-code
