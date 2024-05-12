<template>
  <template v-if="menuMobile == true">
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
  <div
    class="modal fade drawer left-align"
    id="drawer"
    tabindex="-1"
    role="dialog"
    aria-labelledby="drawer-left"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="side_menu_header">
            <Logo :size="45"/>
          </div>
          <div class="side_menu_body">
            <a href=""><Progress />Dashboard(108)</a>
            <a href=""><ClipboardOutline />Atendimentos(108)</a>
            <a href=""><AlarmCheck />Reparos(108)</a>
            <a href=""><Car />Carros Reserva(108)</a>
            <a href="" class="opacity"><Wrench />Oficinas(108)</a>
            <a href="" class="opacity"><AccountMultiple />Usuários(108)</a>
            <a href="" class="opacity"><FolderAccountOutline />Grupos(108)</a>
            <a href="" class="opacity"><FolderStar />Permissões(108)</a>
            <a href="" class="opacity"><Cog />Configurações(108)</a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  <div class="breadcrumbs">
    <a href="">Ínicio</a>
    <ChevronRight />
    <a href=""> Página Teste</a>
  </div>
</template>

<script>
import { ref } from "vue";
import "./NavBar.scss";
import Logo from "../atoms/logo/Index.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import MessageText from "vue-material-design-icons/MessageText.vue";
import HomeCircle from "vue-material-design-icons/HomeCircle.vue";
import AccountCircle from "vue-material-design-icons/AccountCircle.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Progress from "vue-material-design-icons/ProgressClock.vue";
import ClipboardOutline from "vue-material-design-icons/ClipboardOutline.vue";
import AlarmCheck from "vue-material-design-icons/AlarmCheck.vue";
import Wrench from "vue-material-design-icons/Wrench.vue";
import AccountMultiple from "vue-material-design-icons/AccountMultiple.vue";
import FolderAccountOutline from "vue-material-design-icons/FolderAccountOutline.vue";
import FolderStar from "vue-material-design-icons/FolderStar.vue";
import Cog from "vue-material-design-icons/Cog.vue";
import Car from "vue-material-design-icons/Car.vue";
import Logout from "vue-material-design-icons/Logout.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import WindowClose from "vue-material-design-icons/WindowClose.vue";

export default {
  components: {
    Logo,
    ChevronDown,
    WindowClose,
    Logout,
    HelpCircle,
    MessageText,
    HomeCircle,
    AccountCircle,
    ChevronRight,
    MenuIcon,
    Car,
    Progress,
    ClipboardOutline,
    AlarmCheck,
    Wrench,
    AccountMultiple,
    FolderAccountOutline,
    FolderStar,
    Cog,
  },

  name: "NavBar",
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

<style scoped></style>
