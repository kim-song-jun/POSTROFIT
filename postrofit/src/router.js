import {createWebHashHistory, createRouter} from 'vue-router';
import MainPage from './views/MainPage.vue';
import UserPage from './views/UserPage.vue';
import UserHome from './components/User/UserHome';
import HistoryLocker from './components/User/HistoryLocker.vue';
import HistoryEnd from './components/User/HistoryEnd.vue';
import HistoryActive from './components/User/HistoryActive.vue';
import MovePostPage from './views/MovePostPage.vue';
import LockerPage from './views/LockerPage.vue';

const routes = [
  {
    path: '/',
    component: () => import('../src/views/LoadingPage.vue'),
  },
  {
    path: '/MainPage',
    component: MainPage,
  },
  {
    path: '/UserPage',
    component: UserPage,
    children: [
      {
        path: '',
        component: UserHome,
      },
      {
        path: 'active/:id',
        component: HistoryActive,
      },
      {
        path: 'end/:id',
        component: HistoryEnd,
      },
      {
        path: 'locker',
        component: HistoryLocker,
      },
    ],
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
