# Mimic v0.1.7

Changes since v0.1.6:

- Added an opt-in BrowserContext resource policy for controlling cache reads and network acquisition by resource kind, URL, and request context. The default behavior is unchanged. See the [resource policy guide](https://github.com/moreveal/mimic/blob/2c4c010ed66ecb5121efa1ba02d4729cf68764d5/docs/resource-policy.md).
- Corrected CSS box geometry and hit testing, including stacking and isolated-world style ownership.
- Reduced bootstrap snapshot work and fixed disposal of idle bootstrap V8 isolates.

The Windows and Linux archives correspond to source commit `2c4c010ed66ecb5121efa1ba02d4729cf68764d5`. Their executables passed CDP runtime checks for V8, QuickJS, and goja, plus the bundled Playwright, Puppeteer, and concurrency examples.

Mimic remains a renderer-free public beta for Windows and Linux amd64. It models browser-observable state for supported workflows; it does not provide complete Chrome, rendering, media, or Web API compatibility. See the [compatibility notes](https://github.com/moreveal/mimic/blob/2c4c010ed66ecb5121efa1ba02d4729cf68764d5/docs/compatibility.md) for current boundaries.
