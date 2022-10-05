<template>
  <section class="person-page">
    <div class="title-page">News Management</div>
    <div style="overflow-x: auto">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Body</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listNewsUserId" :item="item">
            <td>{{ item.id }}</td>
            <td v-if="item.id <= 100" class="td-image">
              <img :src="`src/assets/News/new${(item.id % 100) % 10}.png`" />
            </td>
            <td v-if="item.id > 100" class="td-image">
              <img :src="`src/assets/News/${item.image}`" />
            </td>
            <td class="td-title">
              <span>{{ item.title }}</span>
            </td>
            <td class="td-body">
              <p>{{ item.body }}</p>
            </td>
            <td class="td-option">
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <ModelUpdatePage
                      :item="item"
                      @eventUpdateModal="eventUpdateModal"
                    ></ModelUpdatePage>
                    <a-menu-item key="2" @click="handleClickDelete(item)">
                      <UserOutlined />
                      <delete-outlined />&nbsp; Delete News
                    </a-menu-item>
                  </a-menu>
                </template>
                <a-button>
                  Option
                  <DownOutlined />
                </a-button>
              </a-dropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- start button show model add -->
    <ModelAddPage @eventAddModal="eventAddModal"></ModelAddPage>
    <!-- end button show model add -->
  </section>
</template>
<script setup lang="ts">
import ModelUpdatePage from "../model/ModelUpdatePage.vue";
import ModelAddPage from "../model/ModelAddPage.vue";
import { DeleteOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import {
  DataListNewsUserId,
  DataListNewsPerson,
} from "../model/InterFace/InterFace";

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
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((dataNews) => {
    Object.assign(listNewsUserId, dataNews.concat(listNewsLocal));
  })
  .catch((err) => (errorMessage.value = err));

//handle event add information this news
function eventAddModal(addNewsInLocal: DataListNewsUserId) {
  listNewsUserId.push(addNewsInLocal);
}

//handle event update information this news
function eventUpdateModal(dataEmitModalUpdate: DataListNewsUserId) {
  function findIdData(findId: DataListNewsUserId) {
    return findId.id === dataEmitModalUpdate.id;
  }
  const findId = listNewsUserId.indexOf(
    Object(listNewsUserId.find(findIdData))
  );
  listNewsUserId[findId] = dataEmitModalUpdate;
}

//handle click delete news in list
function handleClickDelete(itemDelete: DataListNewsUserId) {
  var question = confirm("Do you have delete this news?");
  if (question) {
    if (itemDelete.id > 100) {
      listNewsLocal = listNewsLocal.filter(
        (x: DataListNewsUserId) => x.id != itemDelete.id
      );
      localStorage.setItem("listNewsPerson", JSON.stringify(listNewsLocal));
      for (let i = 0; i < listNewsUserId.length; i++) {
        if (itemDelete.id === listNewsUserId[i].id) {
          listNewsUserId.splice(i, 1);
        }
      }
    } else {
      for (let i = 0; i < listNewsUserId.length; i++) {
        if (itemDelete.id === listNewsUserId[i].id) {
          listNewsUserId.splice(i, 1);
        }
      }
    }
  }
}
</script>

<style scoped>
.title-page {
  text-align: center;
  background-color: #ddede0;
  padding: 13px 0;
  color: #7e929f;
  font-weight: 500;
  font-size: 18px;
  border-radius: 10px 10px 0 0;
  margin-top: -84px;
}

.ant-pagination {
  margin-top: 20px;
}
.title-page {
  text-align: center;
  background-color: #ddede0;
  padding: 13px 0;
  color: #7e929f;
  font-weight: 500;
  font-size: 18px;
  border-radius: 10px 10px 0 0;
  margin-top: -84px;
}
table {
  /* margin-top: -100px; */
  width: 100%;
  border-radius: 0 0 15px 15px;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}
table,
td,
th {
  font-weight: 500;
  text-align: center;
  background-color: #fff;
  padding: 10px 15px;
}
tr img {
  width: 100px;
  height: 65px;
  border-radius: 10px;
}
tr td {
  font-weight: 400;
}
tr td {
  border-top: 1px solid #cccccc;
  font-weight: 400;
  height: 85px;
}
.td-title span {
  text-align: left;
  font-weight: 500;
  text-transform: capitalize;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: capitalize;
}
.td-body p {
  color: #333;
  text-align: left;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: capitalize;
}
.td-option button {
  background-color: #93b7c1;
  border-radius: 15px;
  width: 80px;
  color: #fff;
  font-size: 12px;
  border: none;
  cursor: pointer;
}
.person-page {
  width: 75%;
  background-color: #eef9f0;
  position: relative;
  margin-left: 25%;
  margin-top: 150px;
  padding: 30px 30px 30px 30px;
  border-radius: 25px 0 0 0px;
}
.ant-table table {
  margin-top: -100px;
}
.ant-modal-wrap {
  z-index: 3000;
}

.btn-cancel,
.btn-submit {
  border-radius: 10px;
}
.btn-submit {
  background-color: #0fd3a0;
  color: #fff;
  border: none;
}
.btn-cancel:hover {
  border-color: #d9d9d9;
  color: #333;
}

.form-button button:first-child {
  padding: 10px 20px;
  border: none;
  background-color: #7e929f;
  border-radius: 10px;
  color: #fff;
  font-size: 13px;
  margin-right: 10px;
  cursor: pointer;
}
.form-button button:last-child {
  padding: 10px 20px;
  border: none;
  background-color: #0fd3a0;
  border-radius: 10px;
  color: #fff;
  font-size: 13px;
  margin-left: 10px;
  cursor: pointer;
}
.btn-upload-image {
  height: 50px;
  width: 300px;
  border-radius: 10px;
  margin-top: 15px;
}
.form-input input {
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #ccc;
  width: 300px;
  height: 50px;
}
textarea {
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #ccc;
  width: 450px;
  height: 190px;
  margin-left: 20px;
}
.form-input {
  justify-content: center;
  font-size: 13px;
}
.form-add {
  align-items: flex-start;
  display: flex;
  justify-content: center;
}
.form {
  text-align: center;
  padding: 0px 0;
  background-color: #fff;
  width: 100%;
}
.title-page {
  text-align: center;
  background-color: #ddede0;
  padding: 13px 0;
  color: #7e929f;
  font-weight: 500;
  font-size: 18px;
  border-radius: 10px 10px 0 0;
  margin-top: -84px;
}
@media (max-width: 1199px) {
  .person-page {
    margin-left: 11%;
    width: 89%;
  }
}
@media (max-width: 1099px) {
  .person-page {
    margin-left: 11.5%;
    width: 88.5%;
  }
}
@media (max-width: 991px) {
  .person-page {
    margin-left: 13%;
    width: 87%;
  }
}
@media (max-width: 875px) {
  .person-page {
    margin-left: 15%;
    width: 85%;
  }
}
@media (max-width: 767px) {
  .person-page {
    margin-left: 17%;
    width: 83%;
  }
}
@media (max-width: 658px) {
  .person-page {
    margin-left: 20%;
    width: 80%;
  }
}
@media (max-width: 548px) {
  .person-page {
    margin-left: 24%;
    width: 78%;
  }
}
</style>
