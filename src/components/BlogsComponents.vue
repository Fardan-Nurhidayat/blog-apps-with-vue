<script setup>
import { ref, onMounted } from 'vue'
import { localStorageKey, data } from '../assets/data.js'
import SearchComponents from '../components/SearchComponents.vue'

// Menggunakan ref untuk membuat blogs menjadi reactive
const blogs = ref([])

// Initialize blogs data
let storedBlogs = localStorage.getItem(localStorageKey)
onMounted(() => {
  if (storedBlogs) {
    blogs.value = JSON.parse(storedBlogs)
  } else {
    blogs.value = data
    localStorage.setItem(localStorageKey, JSON.stringify(data))
  }
})

// Function to update blogs when search results change
const receiveBlogs = searchResults => {
  console.log(searchResults)
  blogs.value = searchResults
}
</script>
<template>
  <SearchComponents
    class="mb-5 max-w-full"
    v-bind:blogs="blogs"
    @send-blogs="receiveBlogs"
  />
  <div
    class="grid items-stretch xl:grid-cols-4 xl:justify-center lg:grid-cols-3 lg:gap-8 md:grid-cols-2 md:gap-6 sm:grid-cols-1"
  >
    <div v-if="blogs.length === 0" class="col-span-4 text-center">
      <p class="text-lg font-medium text-gray-900 dark:text-white mt-10">
        No blogs found
      </p>
    </div>
    <div
      v-for="blog in blogs"
      :key="blog.id"
      class="max-w-xl p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
