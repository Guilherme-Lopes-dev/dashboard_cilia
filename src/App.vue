<template>
  <NavBar/>
  <Home/>
</template>

<script>
import Home from './pages/Home.vue'
import NavBar from './components/header/Index.vue';
export default {
  name: 'App',
  components: {
    Home, NavBar
  }
}
</script>
