<template>
  <section id="menu-overlay" :class="{ open: menuMobile }">
    <button @click="toggleMenuMobile"><WindowClose /></button>
    <a class="" href=""> <HelpCircle :size="30" /> Ajuda </a>
    <a class="" href=""> <MessageText :size="30" /> Suporte via Chat </a>
    <a class="">
      <AccountCircle :size="30" />
      Meu Perfil</a
    >
    <a class="">
      <Cog :size="30" />
      Configurações</a
    >
    <a class="">
      <Logout :size="30" />
      Sair</a
    >
  </section>
</template>
<script>
import Logout from "vue-material-design-icons/Logout.vue";
import WindowClose from "vue-material-design-icons/WindowClose.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import Cog from "vue-material-design-icons/Cog.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import MessageText from "vue-material-design-icons/MessageText.vue";

import './styles.scss'
export default {
  name: "MenuMobile",
  components: {
    Logout,
    WindowClose,
    MessageText,
    Cog,
    HelpCircle,
    AccountCircle

  },
  props:{
    menuMobile: Boolean,
    toggleMenuMobile: Function

  },

};
</script>
