import { createApp } from 'vue';
import Vue from 'vue';
import './style.css'
import './components/model/style/StyleDisplay.css'
import './components/model/style/StylePosition.css'
import './components/model/style/StyleText.css'
import './components/model/style/StyleModel.css'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { Button, message } from 'ant-design-vue';
import router from './components/Router/index'

const app = createApp(App);
app.use(router);
app.use(DatePicker);
// app.use(router);
app.use(Antd).use(Button).mount('#app');
app.config.globalProperties.$message = message;