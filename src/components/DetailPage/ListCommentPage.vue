<template>
  <section class="list-comment-page">
    <a-comment>
      <template #actions>
        <a-tooltip title="Like">
          <LikeOutlined />
        </a-tooltip>
        <a-tooltip title="Dislike">
          <DislikeOutlined />
        </a-tooltip>
        <span key="comment-basic-reply-to">Reply to</span>
      </template>
      <template #author>
        <a>{{ comment.email }}</a>
      </template>
      <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
      <template #content>
        <p>{{ comment.body }}</p>
      </template>
      <template #datetime>
        <span>{{ dayjs() }}</span>
      </template>
    </a-comment>
  </section>
</template>
<script setup lang="ts">
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons-vue";
import dayjs from "dayjs";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { DataComment } from "../model/InterFace/InterFace";

//handle declare data props from CommentPage
const props = defineProps(["comment"]);

// handle fetch detail product
const route = useRoute();
const listComments: Array<DataComment> = reactive([]);
const idNews = route.params.id;
const errorMessage = ref(null);

//handle get data from local
var listCommentsLocal: Array<DataComment>;
if (localStorage.getItem("listCommentsLocal")) {
  listCommentsLocal =
    JSON.parse(localStorage.getItem("listCommentsLocal") ?? "") || [];
} else {
  listCommentsLocal = [];
}

//handle fetch data form JsonPlaceHolder
fetch("https://jsonplaceholder.typicode.com/comments?postId=" + idNews)
  .then((response) => response.json())
  .then((dataComment: DataComment) => {
    Object.assign(
      listComments,
      listCommentsLocal.filter((x) => x.postId == idNews).concat(dataComment)
    );
  })
  .catch((err) => (errorMessage.value = err));
</script>

<style scoped></style>
