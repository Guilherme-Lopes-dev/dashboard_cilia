<template>
  <span class="mdl-layout-title"><Logo /></span>
  <nav class="mdl-navigation">
    <a class="mdl-navigation__link" href=""><Progress />Dashboard(108)</a>
    <a class="mdl-navigation__link" href=""><ClipboardOutline />Atendimentos(108)</a>
    <a class="mdl-navigation__link" href=""><AlarmCheck />Reparos(108)</a>
    <a class="mdl-navigation__link" href=""><Car />Carros Reserva(108)</a>
    <a class="mdl-navigation__link" href=""><Wrench />Oficinas(108)</a>
    <a class="mdl-navigation__link" href=""><AccountMultiple />Usuários(108)</a>
    <a class="mdl-navigation__link" href=""><FolderAccountOutline />Grupos(108)</a>
    <a class="mdl-navigation__link" href=""><FolderStar />Permissões(108)</a>
    <a class="mdl-navigation__link" href=""><Cog />Configurações(108)</a>
  </nav>
  
  <main class="mdl-layout__content">
    <div class="page-content"></div>
  </main>
  <div class="mdl-layout__obfuscator"></div>
</template>
<script>
import { defineComponent } from "vue";
import Logo from "../atoms/logo/Index.vue";
import Progress from "vue-material-design-icons/ProgressClock.vue";
import ClipboardOutline from "vue-material-design-icons/ClipboardOutline.vue";
import AlarmCheck from "vue-material-design-icons/AlarmCheck.vue";
import Wrench from "vue-material-design-icons/Wrench.vue";
import AccountMultiple from "vue-material-design-icons/AccountMultiple.vue";
import FolderAccountOutline from "vue-material-design-icons/FolderAccountOutline.vue";
import FolderStar from "vue-material-design-icons/FolderStar.vue";
import Cog from "vue-material-design-icons/Cog.vue";
import Car from "vue-material-design-icons/Car.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    Logo,
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
  props: {},
  setup() {},
});
</script>
<style scoped lang="scss">
.mdl-navigation__link {
  span {
    margin-right: 15px;
    color: #22b4fd;

  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-items: center;
  padding: 16px 35px;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    transform: translate(20%, 0%);
    width: 70%;
    height: 1px;
    background-color: black;
    left: 0;
    opacity: 0.5;
  }
  .mdl-layout__drawer{
    width: 300px !important;
  }

}
</style>
