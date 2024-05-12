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
export default {
  components: {MapMarker},
  data() {
    return {};
  },
};
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
    }
  }
  .card_body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
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
