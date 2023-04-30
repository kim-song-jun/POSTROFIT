import {createRouter, createWebHistory} from 'vue-router';
import MainPage from './views/MainPage.vue';
import UserPage from './views/User/UserPage.vue';
import UserHome from './views/User/UserHome';
import HistoryLocker from './views/User/HistoryLocker.vue';
import HistoryEnd from './views/User/HistoryEnd.vue';
import HistoryActive from './views/User/HistoryActive.vue';
import MovePostPage from './views/Select/MovePostPage.vue';
import CheckBillPage from './views/Select/CheckBillPage.vue';
import LockerPage from './views/Select/LockerPage.vue';
import CheckDeliveryPage from './views/Select/CheckDeliveryPage.vue';
import PaySuccessPage from './views/Select/PaySuccessPage.vue';
import SelectPage from './views/Select/SelectPage.vue';

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
        path: 'active',
        component: HistoryActive,
      },
      {
        path: 'end',
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
