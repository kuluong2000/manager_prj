<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer" style="background: #28353a"/>
    <Topbar @drawerEvent="drawer = !drawer" />
    <v-main style="background: #ebf1f5">
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import { mapActions } from "vuex";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
export default {
  name: "Layout",
  components: { Topbar, Sidebar},
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  // async mounted() {
  //   await this.loadNameUser();
  // },
  // methods: {
  //       ...mapActions(["actionSetUserInfo","actionSetImageInfo"]),
  //   async loadNameUser() {
  //     const meAuth = JSON.parse(localStorage.getItem("user-info"));
  //     if (meAuth && meAuth !== "") {
  //       let name = `${meAuth.lastName} ${meAuth.firstName}`;
  //       let url = `${meAuth.imgUrl}`;
  //       this.actionSetUserInfo(name);
  //       this.actionSetImageInfo(url);
  //     }
  //     //C1
  //     // this.$store.dispatch('actionSetUserInfo', name) // C2
  //   },
  // },
};
</script>
