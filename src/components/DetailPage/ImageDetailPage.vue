<template>
  <section class="image-detail-page">
    <a-image :src="`/src/assets/News/new${(Number(item.id) % 100) % 10}.png`" />
  </section>
</template>

<script setup lang="ts">
const props = defineProps(["item"]);
</script>

<style>
.image-detail-page .ant-image-mask {
  border-radius: 15px !important;
}
.image-detail-page img {
  border-radius: 15px;
}
</style>
