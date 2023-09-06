import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NotFound from "@/components/Home.vue";
import Table from "@/components/Table.vue";
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    { path: '/', component: NotFound },
    { path: '/comments', component: Table },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
