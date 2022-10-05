<template>
  <section class="news-page">
    <div class="news-image">
      <img
        v-if="props.item.id <= 100"
        :src="`src/assets/News/new${(props.item.id % 100) % 10}.png`"
      />
      <img
        v-if="props.item.id > 100"
        :src="`src/assets/News/${props.item.image}`"
      />
    </div>
    <div class="news-about">
      <div class="new-title">{{ props.item.title }}</div>
      <div class="new-about">
        {{ props.item.body }}
      </div>
      <div class="news-bottom d-flex">
        <div class="news-author">
          <div class="author-avatar">
            <img src="../../assets/HomePage/avatar2.jpg" alt="" />
          </div>
          <div class="author-title">
            <div class="author-name">Mrs. Tony Stark</div>
            <div class="author-date">Sep 25, 2022</div>
          </div>
        </div>
        <div class="news-info">
          <div>
            <span class="info"><like-outlined /> 324</span>
            <span class="info"><dislike-outlined /> 126</span>
          </div>
          <div>
            <span class="info"><eye-outlined /> 888</span>
            <span class="info"><comment-outlined /> 105</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  LikeOutlined,
  DislikeOutlined,
  EyeOutlined,
  CommentOutlined,
} from "@ant-design/icons-vue";

const props = defineProps(["item"]);
</script>

<style scoped>
.news-image {
  overflow: hidden;
  border-radius: 15px;
}
.news-image img {
  width: 100%;
  transition: all 1s ease;
  border-radius: 15px;
}
.news-card:hover .news-image img {
  transform: scale(1.2);
  transition: all 2s ease;
}
.news-author {
  display: flex;
  align-items: center;
}
.news-author img {
  width: 50px;
  border-radius: 10px;
}
.new-title {
  font-size: 18px;
  margin-top: 10px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.new-about {
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.news-bottom {
  justify-content: space-between;
  margin-top: 10px;
}
.author-title {
  margin-left: 10px;
}
.author-name {
  font-size: 14px;
  font-weight: 500;
}
.author-date {
  font-size: 11px;
  font-weight: 500;
  color: #7e929f;
}
.news-info .info {
  font-size: 12px;
  background-color: #7e929f;
  padding: 5px;
  margin: 10px 5px;
  border-radius: 10px;
  color: #fff;
}
.news-info div:first-child {
  margin: 0px 0px 10px 0;
}
@media (max-width: 875px) {
  .news-info .info {
    font-size: 8px;
  }
  .author-name {
    font-size: 12px;
    font-weight: 500;
  }
}
@media (max-width: 767px) {
  .news-info .info {
    font-size: 13px;
  }
  .author-name {
    font-size: 15px;
    font-weight: 500;
  }
}
@media (max-width: 658px) {
  .news-info .info {
    font-size: 9px;
  }
}
</style>
