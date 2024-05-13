<template>
  <img :src="color == 'blue' ? BlueLogo : WhiteLogo " class="header_logo" alt="Logo Cilia" />
</template>

<script>
import WhiteLogo from '../../assets/logo.svg'
import BlueLogo  from '../../assets/blue_logo.svg'
import './logo.scss'
export default {
  name: 'LogoImg',
  props:{
    color:String
  },
  setup(){
    return{
      WhiteLogo,
      BlueLogo
    }
  }

}
</script>

<style >
</style>
