# Mimic v0.1.4

Changes since v0.1.3:

Mimic now uses Blitz as its production style and geometry engine. Computed
styles, boxes, hit testing, and CDP geometry come from one native,
document-owned model, improving consistency for real pages while keeping Mimic
renderer-free. The release also broadens Chrome 152 behavior across CSS, DOM,
navigation, storage, networking, performance, media, and cross-realm object
lifecycles; strengthens Playwright and Puppeteer automation; and ships a clearer
standalone command with no Go, Rust, Cargo, Chromium, display server, or GPU
required at runtime.

As before, Mimic is a lightweight public beta for Windows and Linux amd64. It
does not render pages and is intended for workloads that need browser logic,
state, and CDP automation without embedding Chromium.
