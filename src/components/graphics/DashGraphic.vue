<template>
  <div class="col-lg-12 pcustom m0">
    <CardHeader :icon="HelpCircle" title="Título do Card" />
    <div id="chart"></div>
  </div>
</template>

<script>
/* eslint-disable */

import Highcharts from "highcharts";
import CardHeader from '../../atoms/card_header/Index.vue'
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
export default {
  components:{
    CardHeader,
    HelpCircle
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
          text: "Vendas por marca de carro",
        },
        xAxis: {
          categories: this.marcas,
        },
        yAxis: {
          title: {
            text: "Vendas",
          },
        },
        series: [
          {
            name: "Vendas",
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
      HelpCircle,
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
      ],
      vendas: [1000, 1500, 800, 2000, 1800, 1200, 1600, 500, 1400, 1700],
    };
  },
};
</script>

<style>
.pcustom{ padding: 20px;}
</style>
