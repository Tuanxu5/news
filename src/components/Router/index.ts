import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../HomePage/HomePage.vue';
import PersonPage from '../PersonPage/PersonPage.vue';
import DetailPage from '../DetailPage/DetailPage.vue';
// import AddNewPage from '../PersonPage/AddNewsPage.vue';
// import UpdateNewPage from '../PersonPage/UpdateNewPage.vue';
const routes = [
    { path: '/news/', component: HomePage },
    { path: '/news/person', component: PersonPage},
    { path: '/news/detail/:id', component: DetailPage,name: 'detail'},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router