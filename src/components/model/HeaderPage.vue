<template>
  <section class="header-page">
    <div class="header-left">
      <img src="../../assets/HomePage/sun.png" alt="" />
      <span>Good Morning </span>
      <span class="name-user">, Tuan</span>
    </div>
    <div class="header-right">
      <div class="search">
        <input type="text" placeholder="Search for News" />
        <button class="align-items-center"><search-outlined /></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
</script>

<style scoped>
.header-page {
  display: flex;
  justify-content: space-between;
  background-color: #ffff;
  position: fixed;
  top: 0;
  left: 24%;
  width: 76%;
  z-index: 2;
  padding: 30px 30px 10px 30px;
  align-items: center;
}
.header-left img {
  margin-top: -10px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  opacity: 0.8;
}
.header-left span {
  font-size: 25px;
}
.header-left .name-user {
  color: #7e929f;
}
.header-right input {
  border: none;
  background: #f2f4f8;
  color: #7e929f;
  padding: 13px 20px;
  border-radius: 100px;
  margin-right: -5px;
  outline: none;
  width: 250px;
  font-size: 13px;
}
.header-right button {
  border: none;
  background: #93b7c1;
  color: #fff;
  padding: 8px 12px;
  border-radius: 100px;
  cursor: pointer;
  margin-left: -38px;
}
@media (max-width: 1199px) {
  .header-page {
    left: 10%;
    width: 90%;
  }
}
@media (max-width: 991px) {
  .header-page {
    left: 12%;
    width: 88%;
  }
}
@media (max-width: 875px) {
  .header-page {
    left: 14%;
    width: 86%;
  }
}
@media (max-width: 767px) {
  .header-page {
    left: 16%;
    width: 84%;
  }
  .header-left span:nth-child(3) {
    display: none;
  }
  .search input {
    display: none;
  }
}
@media (max-width: 658px) {
  .header-page {
    left: 19%;
    width: 81%;
  }
}
@media (max-width: 548px) {
  .header-page {
    left: 23%;
    width: 77%;
  }
}
</style>
