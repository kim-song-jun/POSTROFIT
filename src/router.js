import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './views/MainPage.vue';
import UserPage from './views/UserPage.vue';
import UserHome from './components/User/UserHome';
import HistoryLocker from './components/User/HistoryLocker.vue';
import HistoryEnd from './components/User/HistoryEnd.vue';
import HistoryActive from './components/User/HistoryActive.vue';
import MovePostPage from './views/MovePostPage.vue';
import CheckBillPage from './views/CheckBillPage.vue';
import LockerPage from './views/LockerPage.vue';
import CheckDeliveryPage from './views/CheckDeliveryPage.vue';
import PaySuccessPage from './views/PaySuccessPage.vue';
import SelectPage from './views/SelectPage.vue';

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
    path: '/Test',
    component: () => import('../src/components/Locker/lockerImage.vue'),
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
    path: '/SelectPage',
    component: SelectPage,
    children: [
      {
        path: '',
        component: MovePostPage,
      },
      {
        path: 'checkBillPage',
        component: CheckBillPage,
      },
      {
        path: 'lockerPage',
        component: LockerPage,
      },
      {
        path: 'checkDeliveryPage',
        component: CheckDeliveryPage,
      },
      {
        path: 'paySuccessPage',
        component: PaySuccessPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
