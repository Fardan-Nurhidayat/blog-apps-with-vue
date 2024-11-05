import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/blogs',
      name: 'blogs',
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
