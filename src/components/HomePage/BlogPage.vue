<template>
  <section class="block-page">
    <div class="card-all-block">
      <div class="blog-card">
        <div class="blog-image">
          <div class="blog-video">
            <play-circle-outlined />
          </div>
          <img src="../../assets/HomePage/tree.jpg" alt="" />
        </div>
        <div class="blog-about">
          <span class="blog-view"><eye-filled />&nbsp;12,090</span><br />
          <span class="blog-name">The benefits of Cauliflower</span>
        </div>
      </div>
      <div class="blog-card blog-card-last">
        <div class="blog-image">
          <div class="blog-video">
            <play-circle-outlined />
          </div>
          <img src="../../assets/HomePage/flower.jpg" alt="" />
        </div>
        <div class="blog-about">
          <span class="blog-view"><eye-filled />&nbsp;44,680</span><br />
          <span class="blog-name">Let us plant more trees this year</span>
        </div>
      </div>
    </div>
    <div class="subscribe-card">
      <div class="subscribe-title">
        <span>Subscribe to Newsletter</span>
      </div>
      <div class="subscribe-input">
        <input type="text" placeholder="Enter Email" />
        <button><mail-outlined /></button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {
  MailOutlined,
  EyeFilled,
  PlayCircleOutlined,
} from "@ant-design/icons-vue";
</script>
<style scoped>
.block-page {
  margin-top: 20px;
  display: flex;
  grid-gap: 3%;
}
.subscribe-card {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  width: 32%;
  padding: 20px 0px;
  background-color: #fff;
  text-align: center;
  border-radius: 15px;
}
.subscribe-title {
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
}
.subscribe-input {
  position: relative;
}
.subscribe-input input {
  border: none;
  outline: none;
  padding: 12px 20px;
  background: #f1f4f8;
  border-radius: 50px;
  font-size: 12px;
  margin-right: -45px;
  z-index: 1;
  width: 240px;
}
.subscribe-input button {
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 10px 15px;
  background: #93b7c1;
  z-index: 2;
  color: #fff;
}
.card-all-block {
  display: contents;
}
.blog-card {
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  width: 31%;
  height: 100%;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.blog-image {
  position: relative;
}
.blog-image img {
  border-radius: 15px;
  width: 95px;
  height: 95px;
  margin-right: 20px;
  position: relative;
}
.blog-about .blog-view {
  font-size: 12px;
  color: #7e929f;
}
.blog-about .blog-name {
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-video {
  position: absolute;
  top: 5px;
  left: 5px;
  color: #fff;
  z-index: 1000;
  font-size: 18px;
}
@media (max-width: 991px) {
  .blog-card {
    width: 28.575%;
    display: grid;
    padding: 20px;
  }
  .blog-image img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  .subscribe-card {
    width: 37%;
    padding: 80px 0;
  }
  .subscribe-title {
    margin-bottom: 20px;
  }
  .subscribe-input input {
    width: 205px;
  }
}
@media (max-width: 767px) {
  .block-page {
    margin: 55px 0 40px 0;
    display: grid;
  }
  .card-all-block {
    display: flex;
    grid-gap: 3%;
  }
  .blog-card {
    width: 100%;
  }
  .subscribe-card {
    width: 100%;
    padding: 30px;
  }
  .subscribe-input input {
    width: 100%;
  }
}
@media (max-width: 658px) {
  .block-page {
    grid-gap: 7%;
  }
  .card-all-block {
    display: grid;
    grid-gap: 5%;
  }
  .blog-card {
    display: flex;
  }
  .blog-image img {
    width: 100px;
    height: 100px;
    margin: 0 20px 0 0;
  }
}
</style>
