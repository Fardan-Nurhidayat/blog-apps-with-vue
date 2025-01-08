import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/BlogsView.vue'),
    },
    {
      path: '/blogs/:id',
      name: 'blog',
      component: () => import('../views/BlogDetailView.vue'),
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('../views/404View.vue'),
    },

    // method CRUD
    {
      path: '/add-blog',
      name: 'add-blog',
      component: () => import('../views/AddBlogView.vue'),
    },
    {
      path: '/edit-blog/:id',
      name: 'edit-blog',
      component: () => import('../views/EditBlogView.vue'),
    },
  ],
})

export default router
