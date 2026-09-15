/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CLOUDFLARE_WEB_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
