<template>
  <section>
    <a-menu-item @click="showModalUpdate" key="1">
      <UserOutlined />
      <form-outlined />&nbsp; Update News
      <a-modal v-model:visible="visible" width="800px" title="Update News">
        <template #footer>
          <a-button key="back" class="btn-cancel" @click="handleCancel">
            Cancel
          </a-button>
          <a-button :loading="loading" @click="handleSubmitUpdate"
            >Submit</a-button
          >
        </template>
        <section class="add-new-page">
          <form class="form">
            <div class="form-model-update d-flex text-center">
              <div class="form-input">
                <a-input
                  v-model:value="updateTitle"
                  placeholder="Enter post title"
                  class="rounded-1 px-2 py-4"
                /><br />
                <a-upload v-model:file-list="fileList" list-type="picture">
                  <a-button class="btn-upload-image rounded-1 mt-3">
                    <upload-outlined></upload-outlined>
                    Upload Image
                  </a-button>
                </a-upload>
              </div>
              <a-textarea
                v-model:value="updateBody"
                placeholder="Enter the content"
                class="rounded-1 ms-4 fs-13 px-2 py-4"
              />
            </div>
          </form>
        </section>
      </a-modal>
    </a-menu-item>
  </section>
</template>
<script setup lang="ts">
import { UploadOutlined } from "@ant-design/icons-vue";
import { FormOutlined } from "@ant-design/icons-vue";
import { ref, defineEmits, reactive } from "vue";
import {
  DataListNewsUserId,
  DataListNewsPerson,
} from "../model/InterFace/InterFace";

const props = defineProps(["item"]);
const updateTitle = ref(props.item.title);
const updateBody = ref(props.item.body);
const visible = ref<boolean>(false);
const loading = ref<boolean>(false);

const emit = defineEmits(["eventUpdateModal"]);

const fileList = ref([
  {
    uid: "-1",
    name: "new" + ((props.item.id % 100) % 10) + ".png",
    status: "done",
    url:
      "http://127.0.0.1:5173/src/assets/News/new" +
      ((props.item.id % 100) % 10) +
      ".png",
    thumbUrl:
      "http://127.0.0.1:5173/src/assets/News/new" +
      ((props.item.id % 100) % 10) +
      ".png",
  },
]);

//handle fetch list news where userId1
const listNewsUserId: Array<DataListNewsUserId> = reactive([]);
const errorMessage = ref(null);
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((dataNews) => {
    Object.assign(listNewsUserId, dataNews);
  })
  .catch((err) => (errorMessage.value = err));

//handle show model update information this news
const showModalUpdate = () => {
  visible.value = true;
};

//handle click cancel model update
const handleCancel = () => {
  visible.value = false;
};

//handle click update information this news
const handleSubmitUpdate = () => {
  //effect loading button submit
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 500);

  //handle update news in localStorage
  if (props.item.id > 100) {
    let updateNewsInLocal: DataListNewsPerson = {
      title: updateTitle.value,
      body: updateBody.value,
      image: fileList.value[0].name,
      id: props.item.id,
      userId: 1,
    };
    var listNewsPerson: Array<DataListNewsPerson> =
      JSON.parse(localStorage.getItem("listNewsPerson") ?? "") || [];
    for (var x of listNewsPerson) {
      if (x.id == updateNewsInLocal.id) {
        x.body = updateNewsInLocal.body;
        x.title = updateNewsInLocal.title;
        x.image = updateNewsInLocal.image;
        break;
      }
    }
    localStorage.setItem("listNewsPerson", JSON.stringify(listNewsPerson));
    var dataEmitModalUpdate: DataListNewsPerson = {
      id: props.item.id,
      body: updateBody.value,
      title: updateTitle.value,
      image: fileList.value[0].name,
    };
    emit("eventUpdateModal", dataEmitModalUpdate);
  } else {
    var dataEmitModalUpdate: DataListNewsPerson = {
      id: props.item.id,
      body: updateBody.value,
      title: updateTitle.value,
      image: fileList.value[0].name,
    };
    emit("eventUpdateModal", dataEmitModalUpdate);
  }
};
</script>

<style scoped>
.btn-upload-image {
  height: 50px;
  width: 300px;
}
.form-input input {
  width: 300px;
  height: 50px;
}
textarea {
  width: 450px;
  height: 190px;
}
</style>
