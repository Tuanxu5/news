<template>
  <section class="list-new-page">
    <div class="news-card br-15 rounded-2" v-for="item in listNewsUserId">
      <router-link
        :to="{
          name: 'detail',
          params: {
            id: item.id,
          },
        }"
        style="color: #333"
      >
        <NewPage :item="item"></NewPage>
      </router-link>
    </div>
  </section>
  <LoadPage></LoadPage>
</template>

<script setup lang="ts">
import NewPage from "../HomePage/NewPage.vue";
import LoadPage from "../HomePage/LoadPage.vue";
import { ref, reactive } from "vue";
import { DataListNewsUserId } from "../model/InterFace/InterFace";

//handle fetch data news
const listNewsUserId: Array<DataListNewsUserId> = reactive([]);
const errorMessage = ref(null);

var listNewsLocal: Array<DataListNewsUserId>;
if (localStorage.getItem("listNewsPerson")) {
  listNewsLocal =
    JSON.parse(localStorage.getItem("listNewsPerson") ?? "") || [];
} else {
  listNewsLocal = [];
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((dataNews) => {
    Object.assign(listNewsUserId, dataNews.concat(listNewsLocal));
  })
  .catch((err) => (errorMessage.value = err));
console.log(listNewsUserId);
</script>

<style scoped>
.list-new-page {
  display: grid;
  grid-template-columns: 48% 48%;
  grid-column-gap: 4%;
  margin-top: 20px;
}
.news-card:hover .news-image img {
  transform: scale(1.2);
  transition: all 2s ease;
}
.news-card {
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  background: #fff;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.275) 0px 5px 15px;
}
@media (max-width: 767px) {
  .list-new-page {
    grid-template-columns: 100%;
  }
}
</style>
