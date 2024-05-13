<template>
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
            <button class="btn_menu_mobile" data-toggle="modal" data-target="#drawer">
              <WindowClose :size="35" />
            </button>
            <Logo :size="45" color="blue"/>
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
</template>
<script>
import { defineComponent } from "vue";
import Logo from "../../atoms/logo/Index.vue";
import Progress from "vue-material-design-icons/ProgressClock.vue";
import ClipboardOutline from "vue-material-design-icons/ClipboardOutline.vue";
import AlarmCheck from "vue-material-design-icons/AlarmCheck.vue";
import Wrench from "vue-material-design-icons/Wrench.vue";
import AccountMultiple from "vue-material-design-icons/AccountMultiple.vue";
import FolderAccountOutline from "vue-material-design-icons/FolderAccountOutline.vue";
import FolderStar from "vue-material-design-icons/FolderStar.vue";
import Cog from "vue-material-design-icons/Cog.vue";
import Car from "vue-material-design-icons/Car.vue";
import WindowClose from "vue-material-design-icons/WindowClose.vue";
import './styles.scss'
export default defineComponent({
  name: "SideBar",
  components: {
    Logo,
    WindowClose,
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
