<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/contact">Contact by Link</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/contact'">Contact by Router</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostsExample,
    Contact
  }
}
</script>

<style>
#app {

  @import "../node_modules/bootstrap/dist/css/bootstrap.css";

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
