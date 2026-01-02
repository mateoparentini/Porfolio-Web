import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

export default defineConfig({
  output: "static",   
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
})
