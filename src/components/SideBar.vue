<template>
  <div id="nav" :class="isOpen ? 'active' : ''">
    <ul>
      <li >
        <a target="_blank" >
          Dashboard
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBar",
  components: {},
  props:{
    isOpen : Boolean
  },
  setup() {
  },
});
</script>
<style scoped lang="scss">
#nav {
  height: 100vh;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #17141d;
  color: white;
  position: fixed;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s linear;
  margin-left: 200px;
}
#nav.active {
  transform: translateX(0);
}
</style>

