import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GSS Modding Wiki",
  description: "Grocery Store Simulator Modding Documentation",
  base: "/gss-modding-wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginner\'s Guide', link: '/beginners-guide/installing-mods' }
    ],

    sidebar: [
      {
        text: 'Beginner\'s Guide',
        items: [
          { text: 'Installing mods', link: '/beginners-guide/installing-mods' },
          { text: 'Configuring mods', link: '/beginners-guide/configuring-mods' },
          { text: 'Getting Started', link: '/beginners-guide/getting-started' }
        ]
      },
      {
        text: 'Lua Modding',
        items: [
          { text: 'Coding a Lua mod', link: '/lua-modding/coding-lua-mod' },
        ]
      },
      {
        text: 'Blueprint Modding',
        items: [
          { text: 'Blueprint Setup', link: '/blueprint-modding/bp-setup' },
          { text: 'Building Mods', link: '/blueprint-modding/building-mods' }
        ]
      },
      {
        text: "Miscellaneous",
        items: [
          { text: 'Searching Gamefiles', link: '/misc/searching-gamefiles' },
          { text: 'Hot reloading', link: '/misc/hot-reloading' },
          { text: 'Config types', link: '/misc/config-types' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nieboczek/gss-modding-wiki' },
      { icon: 'discord', link: 'https://discord.gg/5ENg4XGpPZ' }
    ]
  }
})
