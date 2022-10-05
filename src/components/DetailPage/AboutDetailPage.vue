<template>
  <section class="about-detail-page">
    <div class="d-flex justify-content-between align-content-center">
      <div class="d-flex">
        <div>
          <img class="rounded-100" src="../../assets/HomePage/avatar2.jpg" />
        </div>
        <div class="ms-3 fw-500">
          <span class="fs-16">Mr Tony Stark</span><br />
          <span class="fs-12"><hourglass-outlined /> Sep 25, 2022</span>
        </div>
      </div>
      <div class="fs-30 cs-pointer">
        <ellipsis-outlined />
      </div>
    </div>
    <div class="text-transform-capitalize mt-2">
      <span class="fw-500 fs-18">{{ item.title }}</span>
      <p class="text-justify fs-13 mt-2">{{ item.body }}</p>
    </div>
    <div class="d-flex justify-content-between border-bottom pb-3">
      <div class="d-flex vote">
        <div><like-outlined /> 2048</div>
        <div><dislike-outlined /> 126</div>
        <div><eye-outlined /> 888</div>
        <div><comment-outlined /> 105</div>
      </div>
      <span class="share"><share-alt-outlined />Share</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  HourglassOutlined,
  LikeOutlined,
  DislikeOutlined,
  EyeOutlined,
  CommentOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
} from "@ant-design/icons-vue";
const props = defineProps(["item"]);
</script>

<style scoped>
img {
  width: 50px;
}
.vote div {
  margin-right: 20px;
  cursor: pointer;
}
</style>
