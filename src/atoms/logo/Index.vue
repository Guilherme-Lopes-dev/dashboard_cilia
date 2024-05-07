<template>
  <img :src="LogoImg" class="header_logo" alt="Logo Cilia" />
</template>

<script>
import LogoImg from '../../assets/logo.svg'
import './logo.scss'
export default {
  name: 'LogoImg',

  setup(){
    return{
      LogoImg,
    }
  }

}
</script>

<style >
</style>
