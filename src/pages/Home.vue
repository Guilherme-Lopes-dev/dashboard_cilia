<template>
  <div class="row">
    <div class="col-lg-12 col-sm-12">
      <Graphic />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-sm-12" >
      <Vehicles />
    </div>
    <div class="col-lg-6 col-sm-12">
      <Map />
    </div>
  </div>
</template>

<script>
import Graphic from "../components/graphics/Index.vue";
import Map from "../components/maps/Index.vue";
import Vehicles from "../components/vehicles/Index.vue";
import "./styles.scss";
export default {
  name: "SectionHome",
  components: {
    Graphic,
    Map,
    Vehicles,
  },
};
</script>

<style></style>
