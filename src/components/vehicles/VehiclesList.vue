<template>
  <div  class="col-md-6 col-sm-12  pcustom m0">
    <h1>Veículo</h1>
    <div v-for="(car, index) in cars" :key="index">
      <p>{{ car.marca }} {{ car.modelo }} {{ car.versao }} .{{ car.ano }}</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VehiclesList",
  setup() {
    const cars = [
      {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022,
        versao: "XEi 2.0 Flex 16V CVT",
      },
      {
        marca: "Volkswagen",
        modelo: "Golf",
        ano: 2021,
        versao: "GTI 2.0 TSI DSG",
      },
      {
        marca: "Honda",
        modelo: "Civic",
        ano: 2023,
        versao: "Touring 1.5 Turbo CVT",
      },
      {
        marca: "Chevrolet",
        modelo: "Corsa",
        ano: 2007,
        versao: "MPI 1.0",
      },
    ];
    return { cars };
  },
});
</script>
<style>
.pcustom{ padding: 20px;}
</style>
