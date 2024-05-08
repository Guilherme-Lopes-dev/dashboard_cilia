<template>
  <div id="chart"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      Highcharts.chart('chart', {
        chart: {
          type: 'area' // Mudança para tipo de gráfico de área
        },
        title: {
          text: 'Vendas por marca de carro'
        },
        xAxis: {
          categories: this.marcas
        },
        yAxis: {
          title: {
            text: 'Vendas'
          }
        },
        series: [{
          name: 'Vendas',
          data: this.vendas,
          color: 'rgba(255, 0, 0 )', 
          fillColor:'rgba(255, 0,0, 0.2)',
          lineColor: 'red', 
          lineWidth: 2 
        }]
      });
    }
  },
  data() {
    return {
      marcas: ['BMW', 'Chevrolet', 'Citroen', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Iveco', 'Jeep', 'Renault'],
      vendas: [1000, 1500, 800, 2000, 1800, 1200, 1600, 500, 1400, 1700]
    };
  }
};
</script>
