<template>
  <div class="row m0">
    <div class="col-md-6 p0">
        <MenuIcon v-on:click="toggle"/>
        <Logo />
    </div>
    <div class="col-md-6 p0">
      <div class="row m0">
        <div class="col-md-2 p0">
          <span>
            <HelpCircle />
          </span>
          <a href="">Ajuda</a>
        </div>
        <div class="col-md-2 p0">
          <span>
            <MessageText />
          </span>
          <a href="">Suporte via Chat</a>
        </div>
        <div class="col-md-3 p0">
            Diego • Auto/RE - TESTE Administrador
        </div>
        <div class="col-md-3 p0">
            <HomeCircle/>
            <AccountCircle/>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
                  <li><a class="dropdown-item" href="#">Configurações</a></li>
                  <li><a class="dropdown-item" href="#">Sair</a></li>
                </ul>
              </div>
        </div>
      </div>
    </div>
    <SideBar :isOpen='isOpen'/>

  </div>
</template>

<script>
import Logo from "../atoms/logo/Index.vue";
import HelpCircle from "vue-material-design-icons/HelpCircle.vue";
import MessageText from "vue-material-design-icons/MessageText.vue";
import HomeCircle from "vue-material-design-icons/HomeCircle.vue"
import AccountCircle from "vue-material-design-icons/AccountCircle.vue"
import MenuIcon from "vue-material-design-icons/Menu.vue"
import SideBar from './SideBar.vue'
import { ref} from 'vue'
export default {
  components: { Logo, HelpCircle, MessageText,HomeCircle,AccountCircle, MenuIcon,SideBar },

  name: "NavBar",
  setup() {
    const isOpen = ref(false);
    function toggle(){
      isOpen.value = !isOpen.value;
    }
    return {
      isOpen,
      toggle,
      Logo,
    };
  },
};
</script>

<style>

  
  </style>
