<template>
  <template v-if="menuMobile == true">
    <MenuMobile :menuMobile="menuMobile" :toggleMenuMobile="toggleMenuMobile"/>
  </template>

  <Sidebar/>
  <div class="navbar">
    <div class="content">
      <div class="left">
        <button class="btn_menu" data-toggle="modal" data-target="#drawer">
          <MenuIcon :size="35" />
        </button>
        <a href="/">
          <Logo />
        </a>
      </div>
      <button class="open_mobile" @click="toggleMenuMobile">
        <ChevronDown />
      </button>

      <div class="right">
        <a class="" href=""> <HelpCircle :size="30" /> Ajuda </a>
        <a class="after" href="">
          <MessageText :size="30" /> Suporte via Chat
        </a>
        <a class="" href="">
          <p>Diego • Auto/RE - TESTE</p>
          <p>Administrador</p>
        </a>
        <div class="white_icons">
          <HomeCircle :size="50" />
          <AccountCircle :size="50" />
        </div>
        <div class="dropdown">
          <div class="dropdown dropdown-left">
            <button
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item drop_item" href="#">Meu Perfil</a>
              <a class="dropdown-item drop_item" href="#">Configurações</a>
              <a class="dropdown-item drop_item" href="#">Sair</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <BreadCrumbs/>
</template>

<script>
import Sidebar from '../sidebar/Index.vue'
import { ref } from "vue";
import "./styles.scss";
import Logo from "../../atoms/logo/Index.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import MessageText from "vue-material-design-icons/MessageText.vue";
import HomeCircle from "vue-material-design-icons/HomeCircle.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import BreadCrumbs from '../breadcrumbs/Index.vue'
import MenuMobile from '../mobileMenu/Index.vue'
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";


export default {
  components: {
    Sidebar,
    Logo,
    ChevronDown,
    MenuMobile,
    HelpCircle,
    MessageText,
    HomeCircle,
    AccountCircle,
    MenuIcon,
    BreadCrumbs

  },

  name: "HeaderIndex",
  setup() {
    const menuMobile = ref(false);
    const toggleMenuMobile = () => {
      menuMobile.value = !menuMobile.value;
    };

    return {
      menuMobile,
      toggleMenuMobile,
    };
  },
};
</script>

