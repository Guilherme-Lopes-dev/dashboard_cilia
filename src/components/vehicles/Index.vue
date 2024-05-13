<template>
  <div class="card_home">
    <div class="card_header">
      <Car :size="30" />
      <p>Veículo</p>
    </div>
    <div class="card_body">
      <div v-for="(car, index) in cars" :key="index" class="items">
        <img :src="Logo" alt="car_logo" />
        <p>{{ car.marca }} {{ car.modelo }} {{ car.versao }} {{ car.ano }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Car from "vue-material-design-icons/Car.vue";
import Logo from "../../assets/logo_vw.svg";
export default defineComponent({
  name: "IndexVehicles",
  components: {
    Car,
  },
  setup() {
    const cars = [
      {
        marca: "VOLKSWAGEN",
        modelo: "POLO",
        ano: 2018,
        versao: " COMFORTLINE 200 TSI 1.0 TSI 2018",
      },
      {
        marca: "VOLKSWAGEN",
        modelo: "POLO",
        ano: 2018,
        versao: " COMFORTLINE 200 TSI 1.0 TSI 2018",
      },
      {
        marca: "VOLKSWAGEN",
        modelo: "POLO",
        ano: 2018,
        versao: " COMFORTLINE 200 TSI 1.0 TSI 2018",
      },
      {
        marca: "VOLKSWAGEN",
        modelo: "POLO",
        ano: 2018,
        versao: " COMFORTLINE 200 TSI 1.0 TSI 2018",
      },
    ];
    return {
      cars,
      Logo,
    };
  },
});
</script>
