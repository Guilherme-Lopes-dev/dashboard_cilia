<template>
  <div class="row" style="padding:20px">
    <div class="col-lg-12">
      <Graphic />
    </div>
    <div class="col-lg-6 mt20">
      <Vehicles />
    </div>
    <div class="col-lg-6 mt20">
      <Map />
    </div>
  </div>
</template>

<script>
import Graphic from "../components/graphics/DashGraphic.vue";
import Map from "../components/maps/DashMaps.vue";
import Vehicles from "../components/vehicles/VehiclesList.vue";
export default {
  name: "SectionHome",
  components: {
    Graphic,
    Map,
    Vehicles,
  },
  data() {},
};
</script>

<style>
.mt20{
  margin-top: 20px !important;
}
  </style>
