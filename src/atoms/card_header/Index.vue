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

export default {
  name: 'CardHeader',
  props: {
    // Altere o tipo da propriedade 'icon' para ser um componente Vue
    icon:String,
    title: String
  }
}
</script>
