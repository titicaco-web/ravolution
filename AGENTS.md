# Project notes

- The landing invitation uses a dedicated shared Zod schema and server function, with existing owner email routing; sender-copy success is reported separately so restricted email delivery never produces a false inbox promise.

- Dark surfaces built outside `.editorial` (standalone hero bars, landing pages) must carry the `edit-tokens` class: the brand colour tokens (`--accent-edit`, `--text-primary`, …) are declared on `.editorial` only, so without it `edit-eyebrow` colour and `edit-outline` stroke resolve to nothing and render invisible.
