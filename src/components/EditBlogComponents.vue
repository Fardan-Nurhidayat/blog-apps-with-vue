<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { localStorageKey } from '../assets/data.js'
const route = useRoute()
const router = useRouter()
const blogs = JSON.parse(localStorage.getItem(localStorageKey)) || []
let blog = blogs.find(blog => blog.id == route.params.id)
const title = ref(blog.title)
const body = ref(blog.body)
const updateBlog = e => {
  e.preventDefault()
  const updatedBlog = {
    id: blog.id,
    title: title.value,
    body: body.value,
  }
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(
      blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog)),
    ),
  )
  router.push({ name: 'blogs' })
}
</script>

<template>
  <form class="max-w-sm mx-auto" @submit="updateBlog" method="PUT">
    <div class="mb-5">
      <label
        for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Title</label
      >
      <input
        v-model="title"
        id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter your title"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="body"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >body</label
      >
      <textarea
        v-model="body"
        id="body"
        rows="10"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your body here..."
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>
