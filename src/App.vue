<template>
  <div class="page">
    <MenuPage></MenuPage>
    <HeaderPage></HeaderPage>
    <router-view />
    <ButtonToTop></ButtonToTop>
  </div>
</template>

<script setup lang="ts">
import MenuPage from "./components/model/MenuPage.vue";
import HeaderPage from "./components/model/HeaderPage.vue";
import ButtonToTop from "./components/Composables/ButtonToTop.vue";
</script>

<style scoped>
.page {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
