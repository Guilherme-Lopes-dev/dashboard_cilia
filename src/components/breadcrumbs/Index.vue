<template>
    <div class="breadcrumbs">
        <a href="">Ínicio</a>
        <ChevronRight />
        <a href=""> Página Teste</a>
      </div>
</template>
<script>
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import './styles.scss'
export default{
    name: 'breadCrumbsIndex',
    components: {
    ChevronRight,
  },

}

</script>