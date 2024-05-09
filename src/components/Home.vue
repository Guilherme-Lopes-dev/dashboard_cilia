<template>
  <!-- <NavBar /> -->
  <div class="row p0 m0">
    <Graphic />
    <Vehicles />
    <Map />
  </div>
</template>

<script>
// import NavBar from "./NavBar.vue";
import Graphic from "../components/graphics/DashGraphic.vue";
import Map from "../components/maps/DashMaps.vue";
import Vehicles from "../components/vehicles/VehiclesList.vue";
export default {
  name: "HelloWorld",
  components: {
    // NavBar,
    Graphic,
    Map,
    Vehicles,
  },
  data() {},
};
</script>

<style></style>
