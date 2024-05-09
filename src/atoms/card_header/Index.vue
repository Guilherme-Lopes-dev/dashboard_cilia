<template>
  <div class="container_header">
    <span class="icon">
      <component :is="icon" />
    </span>
    <h3 class="title">
      {{ title }}
    </h3>
  </div>
</template>

<script>
import './card_header.scss'
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";

export default {
  name: 'CardHeader',
  props: {
    // Altere o tipo da propriedade 'icon' para ser um componente Vue
    icon: {
      type: Object,
      default: HelpCircle // Defina HelpCircle como o valor padrão
    },
    title: String
  }
}
</script>
