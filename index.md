---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "GSS Modding Wiki"
  tagline: "Grocery Store Simulator Modding Documentation"
  actions:
    - theme: brand
      text: Beginner's Guide
      link: /beginners-guide/installing-mods
    - theme: alt
      text: GSS Modding Discord
      link: https://discord.gg/5ENg4XGpPZ
    - theme: alt
      text: Edit on Github
      link: https://github.com/nieboczek/gss-modding-wiki
---

<script setup lang="ts">
  import Home from './.vitepress/components/Home.vue';
  import HomeGroup from './.vitepress/components/HomeGroup.vue';
  import HomeItem from './.vitepress/components/HomeItem.vue';
</script>

<Home>
  <!-- Please keep the amount of HomeItems in every group the same -->
  <HomeGroup title="Beginner's Guide">
    <HomeItem name="Installing mods" link="/gss-modding-wiki/beginners-guide/installing-mods" />
    <HomeItem name="Configuring mods" link="/gss-modding-wiki/beginners-guide/configuring-mods" />
    <HomeItem />
  </HomeGroup>
  <HomeGroup title="Modding">
    <HomeItem name="Lua modding" link="/gss-modding-wiki/modding/lua/coding-lua-mod" />
    <HomeItem name="Blueprint modding" link="/gss-modding-wiki/modding/blueprint/blueprint-setup" />
    <HomeItem name="Miscellaneous modding" link="/gss-modding-wiki/modding/misc/searching-game-files" />
  </HomeGroup>
  <HomeGroup title="Miscellaneous">
    <HomeItem name="Hot reloading" link="/gss-modding-wiki/misc/hot-reloading" />
    <HomeItem name="Config types" link="/gss-modding-wiki/misc/config-types" />
    <HomeItem />
  </HomeGroup>
</Home>

## External links
- [GSS Modding Discord](https://discord.gg/5ENg4XGpPZ)
- [Contribute on GitHub](https://github.com/nieboczek/gss-modding-wiki)
