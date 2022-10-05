<template>
  <HeaderPage></HeaderPage>
  <section class="home-page">
    <AdvertisementPage></AdvertisementPage>
    <BlogPage></BlogPage>
    <ListNewPage></ListNewPage>
  </section>
</template>
<script setup lang="ts">
import HeaderPage from "../model/HeaderPage.vue";
import AdvertisementPage from "../../components/HomePage/AdvertisementPage.vue";
import BlogPage from "../../components/HomePage/BlogPage.vue";
import ListNewPage from "../../components/HomePage/ListNewPage.vue";
</script>

<style scoped>
.home-page {
  width: 75%;
  background-color: #eef9f0;
  position: relative;
  height: 100%;
  margin-left: 25%;
  margin-top: 150px;
  padding: 0px 30px 0px 30px;
  border-radius: 25px 0 0 0px;
}
@media (max-width: 1199px) {
  .home-page {
    margin-left: 11%;
    width: 89%;
  }
}
@media (max-width: 1099px) {
  .home-page {
    margin-left: 11.5%;
    width: 88.5%;
  }
}
@media (max-width: 991px) {
  .home-page {
    margin-left: 13%;
    width: 87%;
  }
}
@media (max-width: 875px) {
  .home-page {
    margin-left: 15%;
    width: 85%;
  }
}
@media (max-width: 767px) {
  .home-page {
    margin-left: 17%;
    width: 83%;
  }
}
@media (max-width: 658px) {
  .home-page {
    margin-left: 20%;
    width: 80%;
  }
}
@media (max-width: 548px) {
  .home-page {
    margin-left: 24%;
    width: 78%;
  }
}
</style>
