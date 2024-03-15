import './assets/main.css'
import App from './App.vue';
import { createApp } from 'vue'
import  router  from "@/routes/index.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import"bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount('#app')
