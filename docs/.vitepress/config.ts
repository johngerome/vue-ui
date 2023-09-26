import { resolve } from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue UI',
  description: 'Exquisite UI built using Tailwind and Zag',
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
          { text: 'Button', link: '/components/button' },
          { text: 'Runtime API Examples', link: '/api-examples' },
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