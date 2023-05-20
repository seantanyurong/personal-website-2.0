// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Sean Tan";
export const SITE_DESCRIPTION =
  "Hello, my name is Sean - this is my life documentation.";
export const TWITTER_HANDLE = "@seantanyurong";
export const MY_NAME = "Sean Tan";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
