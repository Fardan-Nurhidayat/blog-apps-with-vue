// const URL = 'https://fakestoreapi.com/products'
// const fetchData = async url => {
//   const response = await fetch(url)
//   return response.json()
// }

// const data = await fetchData(URL)

const data = [
  {
    id: 1,
    title: 'Frontend Developer',
    body: 'Frontend Developer is responsible for implementing visual elements that users see and interact within a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    body: 'A backend developer is a type of software engineer who creates the logical back-end and core computational logic of a website, software or information system. The developer creates components and features that are indirectly accessed by a user through a front-end application or system.',
  },
]

const localStorageKey = 'blog-posts'

export { localStorageKey, data }
