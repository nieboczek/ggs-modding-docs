import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GSS Modding Wiki",
  description: "Grocery Store Simulator Modding Documentation",
  base: "/gss-modding-wiki/",
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    head.push(['link', { rel: 'icon', href: "/favicon.ico" }]);
    head.push(['meta', { property: 'og:title', content: pageData.title }]);
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }]);
    head.push(['meta', { property: 'og:site_name', content: "GSS Modding Wiki" }]);
    head.push(['meta', { property: 'og:image', content: 'https://nieboczek.github.io/gss-modding-wiki/media/icon.png' }]);
    head.push(['meta', { name: 'theme-color', content: "#ff3600" }]);

    return head;
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

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
          { text: 'Blueprint Setup', link: '/blueprint-modding/blueprint-setup' },
          { text: 'Building Mods', link: '/blueprint-modding/building-mods' }
        ]
      },
      {
        text: 'Miscellaneous Modding',
        items: [
          { text: 'Searching Gamefiles', link: '/misc-modding/searching-gamefiles' }
        ]
      },
      {
        text: 'Miscellaneous',
        items: [
          { text: 'Hot reloading', link: '/misc/hot-reloading' },
          { text: 'Config types', link: '/misc/config-types' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nieboczek/gss-modding-wiki' },
      { icon: 'discord', link: 'https://discord.gg/5ENg4XGpPZ' }
    ],
    docFooter: {
      prev: false,
      next: false
    }
  }
})
