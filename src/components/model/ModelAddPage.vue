<template>
  <section class="model-page">
    <a-button @click="showModal" class="btn-add-news">
      <file-add-outlined />
    </a-button>
    <a-modal v-model:visible="visible" width="800px" title="Add News">
      <template #footer>
        <a-button key="back" class="btn-cancel" @click="handleCancel">
          Cancel
        </a-button>
        <a-button :loading="loading" @click="handleSubmitAdd">
          Submit
        </a-button>
      </template>
      <form>
        <div class="d-flex">
          <div class="form-input">
            <input
              type="text"
              placeholder="Enter post title"
              v-model="addTitle"
            /><br />
            <a-upload v-model:file-list="fileList" list-type="picture">
              <a-button class="btn-upload-image">
                <upload-outlined></upload-outlined>
                Upload Image
              </a-button>
            </a-upload>
          </div>
          <textarea placeholder="Enter content" v-model="addBody"></textarea>
        </div>
      </form>
    </a-modal>
  </section>
</template>

<script setup lang="ts">
import { UploadOutlined, FileAddOutlined } from "@ant-design/icons-vue";
import { ref, reactive } from "vue";
import {
  DataListNewsUserId,
  DataListNewsPerson,
} from "../model/InterFace/InterFace";

const addTitle = ref("");
const addBody = ref("");
const fileList = ref();
const visible = ref<boolean>(false);
const loading = ref<boolean>(false);

const emit = defineEmits(["eventAddModal"]);

//handle fetch list news where userId1
const listNewsUserId: Array<DataListNewsUserId> = reactive([]);
const errorMessage = ref(null);
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((dataNews) => {
    Object.assign(listNewsUserId, dataNews);
  })
  .catch((err) => (errorMessage.value = err));
//handle click show model add
const showModal = () => {
  visible.value = true;
};

//handle click cancel model add
const handleCancel = () => {
  visible.value = false;
};

//handle click add information this news
const handleSubmitAdd = () => {
  //effect loading button submit
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 500);

  //handle add news in localStorage
  var idNewsLocal: number;
  if (localStorage.getItem("listNewsPerson")) {
    var listNewsPerson: Array<DataListNewsPerson> =
      JSON.parse(localStorage.getItem("listNewsPerson") ?? "") || [];
    idNewsLocal = listNewsPerson.length;
  } else {
    idNewsLocal = 0;
  }
  let addNewsInLocal: DataListNewsPerson = {
    title: addTitle.value,
    body: addBody.value,
    image: fileList.value[0].name,
    id: 101 + idNewsLocal,
    userId: 1,
  };
  var listNewsPerson: Array<DataListNewsPerson>;
  if (localStorage.getItem("listNewsPerson") == null) {
    listNewsPerson = [addNewsInLocal];
  } else {
    listNewsPerson =
      JSON.parse(localStorage.getItem("listNewsPerson") ?? "") || [];
    listNewsPerson.push(addNewsInLocal);
  }
  addTitle.value = "";
  addBody.value = "";
  fileList.value = [];
  emit("eventAddModal", addNewsInLocal);
  localStorage.setItem("listNewsPerson", JSON.stringify(listNewsPerson));
};
</script>

<style scoped>
.btn-add-news {
  position: fixed;
  bottom: 70px;
  right: 20px;
  background-color: #0fd3a0;
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 100px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
}
.btn-upload-image {
  height: 50px;
  width: 300px;
  border-radius: 10px;
  margin-top: 15px;
}
input {
  padding: 10px 20px;
  width: 300px;
  height: 50px;
}
textarea {
  padding: 10px 20px;
  width: 450px;
  height: 190px;
  margin-left: 20px;
}
</style>
