<template>
  <div class="container">
    <table class="table table-striped mt-4">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <th scope="row">{{post.id}}</th>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "PostsExample",
    data() {
      return {
        posts: [
          {id: 1, title: 'Post 1', body: 'This is my first post'},
          {id: 2, title: 'Post 2', body: 'This is my second post'},
          {id: 3, title: 'Post 3', body: 'This is my third post'},
          {id: 4, title: 'Post 4', body: 'This is my fourth post'},
        ]
      }
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
        this.posts = posts.data
      });
    }
  }
</script>

<style scoped>

</style>
