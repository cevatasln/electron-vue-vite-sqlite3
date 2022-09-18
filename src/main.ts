import { createApp } from 'vue'
import { ipcRenderer } from 'electron';
import App from './App.vue'
import router from './router';
// import './samples/node-api'
createApp(App)
.use(router)
.provide('ipcRenderer', ipcRenderer)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
