<template>
  <NavBar/>
  <Graphic/>
</template>

<script>
import NavBar from './NavBar.vue'
import Graphic from '../components/graphics/DashGraphic.vue'
export default {
  name: 'HelloWorld',
  components:{
  NavBar,
  Graphic
  },
  data() {
  }
}
</script>

<style >
</style>
