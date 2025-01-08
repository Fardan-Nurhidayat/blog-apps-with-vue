<script setup>
import { ref } from 'vue'
import { localStorageKey } from '../assets/data.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const blogs = JSON.parse(localStorage.getItem(localStorageKey)) || []
const title = ref('')
const body = ref('')
const addBlog = e => {
  e.preventDefault()
  const blog = {
    id: blogs.length + 1,
    title: title.value,
    body: body.value,
  }
  if (isStorageExist()) {
    localStorage.setItem(localStorageKey, JSON.stringify([...blogs, blog]))
    title.value = ''
    body.value = ''
  }
  router.push({ name: 'home' })
}

function isStorageExist() {
  if (typeof Storage !== 'undefined') {
    return true
  } else {
    alert('Browser kamu tidak mendukung local storage')
    return false
  }
}
</script>

<template>
  <form class="max-w-sm mx-auto" @submit="addBlog" method="post">
    <div class="mb-5">
      <label
        for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Title</label
      >
      <input
        v-model="title"
        type="text"
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
        >Body</label
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
