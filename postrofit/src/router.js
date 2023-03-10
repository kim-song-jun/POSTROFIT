import {createWebHashHistory, createRouter} from 'vue-router';
import MainPage from './views/MainPage.vue';
import UserPage from './views/UserPage.vue';
import MovePostPage from './views/MovePostPage.vue';
import LockerPage from './views/LockerPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/MainPage',
    component: MainPage,
  },
  {
    path: '/UserPage',
    component: UserPage,
  },
  {
    path: '/MovePostPage',
    component: MovePostPage,
  },
  {
    path: '/LockerPage',
    component: LockerPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
