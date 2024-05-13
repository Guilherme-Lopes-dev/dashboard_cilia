<template>

  <div class="card_home">
    <div class="card_header">
      <MapMarker :size="30" />
      <p>Localização</p>
    </div>
    <div class="card_body">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8345280656376!2d-49.265954124092794!3d-16.68516184552103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef167fe77afad%3A0x616a06459c0a17c8!2sCilia%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1715211298039!5m2!1spt-BR!2sbr"
      width="600"
      height="300"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  </div>
</template>
<script>
import MapMarker from "vue-material-design-icons/MapMarker.vue";
import './styles.scss'
export default {
  name:'IndexMaps',
  components: {MapMarker},
  data() {
    return {};
  },
};
</script>
<style scoped>

</style>
