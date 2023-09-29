import { resolve } from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue UI',
  description: 'Exquisite UI built using Tailwind and Zag',
  base: '/vue-ui',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Button', link: '/components/button' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/johngerome/vue-ui' },
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
      },
    },
  },
})
