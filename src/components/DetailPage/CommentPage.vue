<template>
  <section class="comment-page">
    <div class="mt-5">Comment</div>
    <div class="comment rounded-4 box-shadow">
      <div>
        <WriteComment @eventAddComment="eventAddComment"></WriteComment>
        <ListCommentPage
          v-for="comment in listComments"
          :comment="comment"
        ></ListCommentPage>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { message } from "ant-design-vue";
import { DataComment } from "../model/InterFace/InterFace";
import ListCommentPage from "./ListCommentPage.vue";
import WriteComment from "./WriteComment.vue";

// Handle fetch detail product
const route = useRoute();
const listComments: Array<DataComment> = reactive([]);
const errorMessage = ref(null);

var listCommentsLocal: Array<DataComment>;
if (localStorage.getItem("listCommentsLocal")) {
  listCommentsLocal =
    JSON.parse(localStorage.getItem("listCommentsLocal") ?? "") || [];
} else {
  listCommentsLocal = [];
}

const idNews = route.params.id;
fetch("https://jsonplaceholder.typicode.com/comments?postId=" + idNews)
  .then((response) => response.json())
  .then((dataComment: DataComment) => {
    Object.assign(
      listComments,
      listCommentsLocal.filter((x) => x.postId == idNews).concat(dataComment)
    );
  })
  .catch((err) => (errorMessage.value = err));

//handle click add comment
function eventAddComment(dataAddComment: any) {
  if (dataAddComment.body !== "") {
    var dataComment: DataComment = {
      postId: idNews,
      name: "ALexSanDer",
      id: listComments.length,
      email: "lehoangtuan012@gmail.com",
      body: dataAddComment.body,
    };
    listComments.unshift(dataComment);
    var listCommentsLocal: Array<DataComment>;
    if (localStorage.getItem("listCommentsLocal") == null) {
      listCommentsLocal = [dataComment];
    } else {
      listCommentsLocal =
        JSON.parse(localStorage.getItem("listCommentsLocal") ?? "") || [];
      listCommentsLocal.push(dataComment);
    }
    localStorage.setItem(
      "listCommentsLocal",
      JSON.stringify(listCommentsLocal)
    );
  } else {
    message.warning("You are not enter a comment");
  }
}
</script>

<style scoped>
.comment {
  overflow-y: scroll;
  height: 320px;
  border: 40px solid #fff;
}
.comment::-webkit-scrollbar {
  display: none;
}
@media (max-width: 767px) {
  .comment {
    border: 15px solid #fff;
  }
}
</style>
