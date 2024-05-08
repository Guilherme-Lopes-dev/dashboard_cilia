import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import HighchartsStock from 'highcharts/modules/stock';

HighchartsStock(Highcharts);

const app = createApp(App);

// Registre o HighchartsVue como um plugin Vue
app.use(HighchartsVue);

// Monte o aplicativo no elemento com o id 'app'
app.mount('#app');
