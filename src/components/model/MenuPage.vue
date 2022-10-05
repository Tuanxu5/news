<template>
  <section class="menu-page">
    <div class="menu-top">
      <div class="menu-logo">
        <div class="menu-avatar">
          <img src="../../assets/HomePage/avatar1.jpg" />
        </div>
      </div>
      <div class="menu-datetime">
        <span>Sep 14, 2022</span><br />
        <span>11:45 am</span>
      </div>
    </div>
    <ul class="menu-list">
      <router-link to="/news/" active-class="active" exact>
        <li>
          <home-outlined class="icon" />
          <span class="menu-text">Home</span>
        </li>
      </router-link>
      <router-link to="/news/person" active-class="active" exact>
        <li>
          <user-outlined class="icon" /> <span class="menu-text">Person</span>
        </li>
      </router-link>
      <li>
        <setting-outlined class="icon" />
        <span class="menu-text">Settings</span>
      </li>
      <li>
        <lock-outlined class="icon" />
        <span class="menu-text">Privacy</span>
      </li>
      <li>
        <usergroup-delete-outlined class="icon" />
        <span class="menu-text">Help & Support</span>
      </li>
      <li>
        <apartment-outlined class="icon" />
        <span class="menu-text">Accessibility</span>
      </li>
      <li>
        <comment-outlined class="icon" />
        <span class="menu-text">Comments</span>
      </li>
      <li>
        <logout-outlined class="icon" />
        <span class="menu-text">Log Out</span>
      </li>
    </ul>
    <div class="menu-bottom">
      <div class="menu-bottom--right">
        <span>News in a box</span><br />
        <span>Box is all you need</span><br />
        <button>Upgrade</button>
      </div>
      <div class="menu-bottom-left">
        <dropbox-outlined />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  HomeOutlined,
  SettingOutlined,
  LockOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
  ApartmentOutlined,
  CommentOutlined,
  LogoutOutlined,
  DropboxOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
.menu-page {
  background: #fff;
  padding: 20px 20px 40px 40px;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  perspective: 1px;
  transform-style: preserve-3d;
  perspective-origin: right top;
  top: 0px;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  z-index: 10;
  transition: all 1s ease;
}
.menu-page::-webkit-scrollbar-thumb {
  background-color: rgb(232, 232, 232);
  border-radius: 50px;
  transition: all 1s ease;
}
.menu-page::-webkit-scrollbar {
  display: none;
  transition: all 1s ease;
}
.menu-page:hover::-webkit-scrollbar {
  display: block;
  background-color: #fff;
  width: 7px;
  transition: all 1s ease;
}
.menu-logo {
  display: flex;
  align-items: center;
}
.menu-avatar img {
  width: 60px;
  border-radius: 100px;
}
.menu-datetime {
  margin-top: 10px;
}
.menu-datetime span:first-child {
  font-size: 16px;
  font-weight: 600;
}
.menu-datetime span:last-child {
  font-size: 12px;
  color: #788d9b;
}
.menu-list {
  margin-top: 25px;
}
.menu-list li {
  list-style-type: none;
  margin: 10px 0;
  padding: 5px 7px;
  color: #788d9b;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  width: 250px;
}
.menu-list li .icon {
  margin-right: 10px;
  background: #ecf0f3;
  padding: 12px;
  border-radius: 100px;
}
ol,
ul {
  padding: 0;
}
.menu-list .active li {
  background: #f4f7f9;
  border-radius: 100px;
  color: #7e929f;
  font-weight: 600;
}
.menu-list .active .icon {
  margin-right: 15px;
  background: #93b7c1;
  color: #fff;
  padding: 12px;
  border-radius: 100px;
}
.menu-list li:hover {
  background: #f4f7f9;
  border-radius: 100px;
  color: #7e929f;
  font-weight: 600;
}
.menu-list li:hover .icon {
  background: #93b7c1;
  color: #fff;
}
.menu-bottom {
  display: flex;
  background: #93b7c1;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 50px;
  width: 250px;
}
.menu-bottom--right span:nth-child(1) {
  font-size: 19px;
}
.menu-bottom--right span:nth-child(3) {
  font-size: 13px;
}
.menu-bottom--right button {
  background: #93b7c1;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}
.menu-bottom-left span {
  font-size: 60px;
  margin-left: 20px;
  margin-top: 10px;
  color: #fff;
}
@media (max-width: 1299px) {
  .menu-page {
    padding-left: 20px;
  }
}
@media (max-width: 1199px) {
  .menu-page {
    padding-left: 20px;
  }
  .menu-text {
    display: none;
  }
  .menu-list li {
    width: 50px;
  }
  .menu-bottom,
  .menu-datetime {
    display: none;
  }
  .menu-list .active .icon {
    padding: 10px;
  }
  .menu-list li:hover .icon {
    padding: 10px;
  }
}
</style>
