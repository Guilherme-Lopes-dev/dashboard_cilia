<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title"> <Logo /></span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" href="">
            <HelpCircle :size="30" /> Ajuda
          </a>
          <a class="mdl-navigation__link" href="">
            <MessageText :size="30" />
            Suporte via Chat
          </a>
          <a class="mdl-navigation__link" href="">
            <p>Diego • Auto/RE - TESTE</p>
            <p>Administrador</p>
          </a>
          <a class="mdl-navigation__link end">
            <HomeCircle :size="45" />
            <AccountCircle :size="45" />
            <div class="mdl-dropdown">
              <button
                id="dropdown-button"
                class="mdl-button mdl-js-button mdl-button--icon"
              >
                <i class="material-icons">arrow_drop_down</i>
              </button>
              <ul
                class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                for="dropdown-button"
              >
                <li class="mdl-menu__item">Meu Perfil</li>
                <li class="mdl-menu__item">Configurações</li>
                <li class="mdl-menu__item">Sair</li>
              </ul>
            </div>
          </a>
        </nav>
      </div>
    </header>
    <div class="breadcrumbs">
      <a href="">Ínicio</a>
      <ChevronRight />
      <a href="">Pagina Teste</a>
    </div>
    <div class="mdl-layout__drawer">
      <SideBar />
    </div>
  </div>
</template>

<script>
import Logo from "../atoms/logo/Index.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import MessageText from "vue-material-design-icons/MessageText.vue";
import HomeCircle from "vue-material-design-icons/HomeCircle.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";

import "./NavBar.scss";
// import MenuIcon from "vue-material-design-icons/Menu.vue";
import SideBar from "./SideBar.vue";
export default {
  components: {
    Logo,
    HelpCircle,
    MessageText,
    HomeCircle,
    AccountCircle,
    ChevronRight,
    // MenuIcon,
    SideBar,
  },

  name: "NavBar",
  setup() {
    return {};
  },
};
</script>

<style>
.mdl-layout__drawer {
  width: 350px !important;
  transform: translateX(-360px);
}
.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {
  background-color: unset !important;
}
</style>
