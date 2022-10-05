<template>
  <section class="write-comment-page">
    <div class="d-flex mb-3">
      <a-avatar :src="`/src/assets/HomePage/avatar1.jpg`" />
      <div class="ms-2 w-100">
        <a-typography-text class="fs-12 text-muted">
          lehoangtuan012@gmail.com
        </a-typography-text>
        <br />
        <div class="d-flex w-75">
          <a-textarea
            v-model:value="valueComment"
            placeholder="Please enter a comment"
            :rows="3"
            class="mt-2 rounded"
          >
          </a-textarea>
          <div class="d-grid fs-17 ms-2 mt-2">
            <meh-outlined />
            <paper-clip-outlined />
            <br />
            <send-outlined @click="handleAddComment" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  MehOutlined,
  PaperClipOutlined,
  SendOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

//handle click add comment
const emit = defineEmits(["eventAddComment"]);
const valueComment = ref("");
function handleAddComment() {
  var dataAddComment = {
    body: valueComment.value,
  };
  valueComment.value = "";
  emit("eventAddComment", dataAddComment);
}
</script>

<style scoped></style>
