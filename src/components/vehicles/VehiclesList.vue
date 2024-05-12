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
  name: "VehiclesList",
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
<style scoped>
.card_home {
  border: 1px solid rgba(117, 126, 143, 0.25);
  background-color: white;
  padding: 0 0 !important;
  max-height: 400px;
  .card_header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: white;
    position: relative;
    &::after {
      content: "";
      width: calc(100% - 20px);
      position: absolute;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, 0%);
      height: 1px;
      background-color: #3e4b5b;
    }
    span {
      margin: 20px;
      color: #22b4fd;
    }
    p {
      font-size: 14px;
      text-transform: uppercase;
      color: #3e4b5b;
    }
  }
  .card_body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-top: 20px;
    .items {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
        height: 1px;
        background-color: #3e4b5b;
      }
      p{
        font-size: 14px;
      }
      &:nth-child(even) {
        background-color: #F0F4F6;
      }
      img {
        margin: 15px;
      }
    }
  }
}
</style>
