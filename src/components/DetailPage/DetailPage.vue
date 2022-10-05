<template>
  <section class="detail-page h-100 ps-relative w-75">
    <div class="detail-card box-shadow rounded-4 bg-white">
      <div class="card border-0 d-grid">
        <ImageDetailPage :item="listDetailNews"></ImageDetailPage>
        <AboutDetailPage :item="listDetailNews"></AboutDetailPage>
      </div>
      <CommentPage></CommentPage>
    </div>
  </section>
</template>

<script setup lang="ts">
import CommentPage from "../DetailPage/CommentPage.vue";
import ImageDetailPage from "./ImageDetailPage.vue";
import AboutDetailPage from "./AboutDetailPage.vue";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { DataListNewsUserId } from "../model/InterFace/InterFace";

// Handle fetch detail product
const route = useRoute();
const idNews = Number(route.params.id);
var listDetailNews: any = reactive({});
const errorMessage = ref(null);

if (idNews > 100) {
  var listNewsPerson: Array<DataListNewsUserId>;
  if (localStorage.getItem("listNewsPerson")) {
    listNewsPerson =
      JSON.parse(localStorage.getItem("listNewsPerson") ?? "") || [];
  } else {
    listNewsPerson = [];
  }
  listDetailNews = Object.assign(
    listNewsPerson.filter((x: DataListNewsUserId) => x.id == idNews)[0]
  );
} else {
  fetch("https://jsonplaceholder.typicode.com/posts/" + idNews)
    .then((response) => response.json())
    .then((dataCommentPost: any) => {
      Object.assign(listDetailNews, dataCommentPost);
    })
    .catch((err) => (errorMessage.value = err));
}
</script>

<style scoped>
.card {
  grid-template-columns: 50% 47%;
  grid-gap: 3%;
}
.detail-page {
  background-color: #f4f7f9;
  margin-left: 25%;
  margin-top: 150px;
  padding: 0px 30px 10px 30px;
  border-radius: 25px 0 0 0px;
}
.detail-card {
  margin-top: -50px;
  padding: 30px;
}
@media (max-width: 1199px) {
  .detail-page {
    margin-left: 11%;
    width: 89%;
  }
}
@media (max-width: 1099px) {
  .detail-page {
    margin-left: 11.5%;
    width: 88.5%;
  }
}
@media (max-width: 991px) {
  .detail-page {
    margin-left: 13%;
    width: 87%;
  }
  .card {
    grid-template-columns: 100%;
  }
}
@media (max-width: 875px) {
  .detail-page {
    margin-left: 15%;
    width: 85%;
  }
}
@media (max-width: 767px) {
  .detail-page {
    margin-left: 17%;
    width: 83%;
  }
}
@media (max-width: 658px) {
  .detail-page {
    margin-left: 20%;
    width: 80%;
  }
}
@media (max-width: 548px) {
  .detail-page {
    margin-left: 24%;
    width: 78%;
  }
}
</style>
