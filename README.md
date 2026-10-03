Legacy redirect for the former Mimic website. Current website: https://mimic.boo. Source: https://github.com/mimic-browser/website

This repository remains separate from `mimic-browser/website`. GitHub Pages
serves https://moreveal.github.io/mimic-overview/ without a custom domain.
Known page paths redirect to their current equivalents. JavaScript preserves
the query string and fragment; a canonical link, timed meta refresh, and a
visible link provide a fallback when JavaScript is unavailable.
The custom 404 applies the same path mapping to older deep links.

The full former website and its history remain available at commit
`4f367e2ef548f2e297b096a6774518f2cc04f903` and in the current website repository.
Reverting the redirect commit restores the old source tree. Availability of
these legacy URLs depends on this account and GitHub Pages remaining active.

Build with `node scripts/build-redirect.mjs`. Deploy through the Pages workflow.
Retained license and contributor notices apply to the historical website.
