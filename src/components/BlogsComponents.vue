<script setup>
// import { ref } from 'vue'
import { localStorageKey, data } from '../assets/data.js'
import SearchComponents from '../components/SearchComponents.vue'
let blogs = localStorage.getItem(localStorageKey)
blogs = JSON.parse(blogs)
if (!blogs || blogs.length === 0) {
  blogs = data
  localStorage.setItem(localStorageKey, JSON.stringify(data))
}

function receiveBlogs(data) {
  console.log(data)
}
</script>
<template>
  <SearchComponents
    class="mb-5 max-w-full"
    v-bind:blogs="blogs"
    @send-blogs="receiveBlogs"
  />
  <div class="grid grid-cols-4 px-56 gap-5">
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ blog.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ blog.body }}
      </p>
      <RouterLink
        :to="{ name: 'blog', params: { id: blog.id } }"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Read more
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>
