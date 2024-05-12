<template>
  <div class="card_home">
    <div class="card_header">
      <Wrench :size="30" />
      <p>Montadoras</p>
    </div>
    <div class="card_body">
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import Wrench from "vue-material-design-icons/Wrench.vue";

export default {
  components: {
    Wrench,
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      Highcharts.chart("chart", {
        chart: {
          type: "area", // Mudança para tipo de gráfico de área
        },
        title: {
          text: "",
        },
        xAxis: {
          categories: this.marcas,
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "",
            data: this.vendas,
            color: "rgba(255, 0, 0 )",
            fillColor: "rgba(255, 0,0, 0.2)",
            lineColor: "red",
            lineWidth: 2,
          },
        ],
      });
    },
  },
  data() {
    return {
      marcas: [
      "BMW",
      "Chevrolet",
      "Citroen",
      "Fiat",
      "Ford",
      "Honda",
      "Hyundai",
      "Iveco",
      "Jeep",
      "Renault",
    ].map(marca => marca.toUpperCase()),
      vendas: [1000, 1500, 800, 2000, 1800, 1200, 1600, 500, 1400, 1700],
    };
  },
};
</script>

<style scoped>
.card_home {
  border: 1px solid rgba(117, 126, 143, 0.25);
  background-color: white;
  padding: 0 30px;
  .card_header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: white;
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
    span {
      margin: 20px;
      color: #22b4fd;
    }
    p {
      font-size: 14px;
      text-transform: uppercase;
      color: #3e4b5b;
      font-family: "Arial Rounded MT Bold", sans-serif;
    }
  }
  .card_body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-top: 20px;
    #chart {
      width: 100%;
      max-height: 100%;
      .highcharts-credits {
        display: none;
      }
    }
  }
}
</style>
