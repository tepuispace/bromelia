import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";



// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      'remark-gfm', 'remark-smartypants',
      'remark-math' 
    ],
    rehypePlugins: [
        ['rehype-katex', {
        // Katex plugin options
        }]
    ]
},
  integrations: [
  // Enable Preact to support Preact JSX components.
  vue(), tailwind()]
});