import { defineConfig } from "astro/config"
import partytown from "@astrojs/partytown"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import vercel from "@astrojs/vercel/serverless"

import sitemap from "@astrojs/sitemap"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.weblifesupport.com/",
  integrations: [tailwind(), icon(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
})