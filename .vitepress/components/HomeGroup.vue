<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="item">
    <div class="VPFeature" :no-icon="true">
      <article class="box">
        <h2 class="title" v-html="title"></h2>
        <ul class="details">
          <slot />
        </ul>
      </article>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  padding: 8px;
}

@media (min-width: 960px) {
  .item {
    width: calc(100% / 3);
  }
}

.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.25s,
    background-color 0.25s;
  height: fit-content;
}

.VPFeature.link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft-down);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  padding-top: 0;
  border-top: 0;
}

.details {
  padding: 0;
	margin: 0;
  list-style-type: none;
  flex-grow: 1;
  line-height: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
