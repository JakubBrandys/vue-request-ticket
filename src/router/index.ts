import { createRouter, createWebHistory } from 'vue-router';
import UsersPage from '@/pages/UsersPage.vue';
import PostsPage from '@/pages/PostsPage.vue';

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', name: 'Users', component: UsersPage },
  { path: '/posts', name: 'Posts', component: PostsPage },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
