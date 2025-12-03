// @ts-check

import netlify from '@astrojs/netlify';



// https://astro.build/config

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fourtowers.netlify.app/",
  output: 'server',
  adapter: netlify()
});