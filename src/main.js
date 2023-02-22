import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import request from './utils/request'
import storage from './utils/storage'
// import ElementPlus from 'element-plus'

console.log(
  import.meta.env)
const app = createApp(App)

// 挂载axios二次封装
app.config.globalProperties.$request = request;
// 挂载本地存储的封装
app.config.globalProperties.$storage = storage;

app.use(router).mount('#app')
