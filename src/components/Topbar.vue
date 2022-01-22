<template>
<div>
  <v-app-bar app elevate-on-scroll elevation="3" color="white">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer />
    <v-col lg="6" cols="12">
      <v-form>
        <v-text-field
          class="p-0 m-0 mt-6"
          full-width
          dense
          append-icon="mdi-magnify"
          outlined
          rounded
          placeholder="Search"
        />
      </v-form>
    </v-col>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span
          class="mx-5 mr-10"
          style="cursor: pointer"
          v-bind="attrs"
          v-on="on"
        >
          <v-badge content="3" color="red" offset-y="10" offset-x="10">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>
      <v-list three-line width="250">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40" v-if="imgUrl">
                <v-img
                  :src="imgUrl"
                />
              </v-avatar>
              <v-avatar size="40" v-else>
                <v-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
                />
              </v-avatar>
            </v-badge>
            <span class="ml-3" v-if="lastName && firstName">{{ lastName }} {{ firstName }}</span>
            <span class="ml-3" v-else>Người dùng mới</span>
          </v-chip>
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar v-if="imgUrl">
            <img style="object-fit: cover;"
              :src="imgUrl"
            />
          </v-list-item-avatar>
          <v-list-item-avatar v-else>
            <img style="object-fit: cover;"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-if="lastName && lastName">{{ lastName }} {{ firstName }}</v-list-item-title>
            <v-list-item-title v-else>Người dùng mới</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          link
          v-for="(menu, i) in menus"
          :key="i"
          @click="listAction(menu.action)"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <popup :show="showDialog"
          :cancel="cancel"
          :confirm="confirm"
          text="Có! Mình muốn đăng xuất ^^"
          textCancel="Không nha :v"
          title="Thông báo?"
          description="Bạn có muốn đăng xuất không ???"></popup>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import axios from "axios"
import Popup from './Popup.vue';
export default {
  components: { Popup },
  name: "Topbar",
  data() {
    return {
      menus: [
        { title: "Profile", icon: "mdi-account", action: "profile" },
        { title: "Change Password", icon: "mdi-key" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout", action: "logout" },
      ],
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      showDialog: false,
      firstName: '',
      lastName: '',
      imgUrl: '',
    };
  },
  // computed: {
  //   ...mapState({
  //     userInfo: (state) => state.userInfo,
  //     imageInfo: (state) => state.imageInfo,
  //   }),
  // },
    async mounted() {
            const res = await axios.get(`http://localhost:3001/employee`);
            const dataLogin =JSON.parse(localStorage.getItem("user-info"));
            console.log(dataLogin)
            let id = dataLogin.email;
            console.log(id);
            let data = res.data;
             const index =  data.find(el => el.email === id )
            //  const index =  data.map(el => el.email == id)
             console.log(index)
             this.firstName = index.firstName
             this.lastName = index.lastName
             this.imgUrl = index.imgUrl
           console.log(index.firstName);
  },
  methods: {
    listAction(action) {
      if (action === "logout") {
        this.showDialog = true;
      }
      if (action === "profile") {
        this.$router.push('/userInfo')
      }
    },
    cancel() {
      this.showDialog = false;
    },
    confirm() {
      localStorage.removeItem("user-info");
      this.$router.push("/login");
      this.showDialog = false;
    },
  },
};
</script>

<style scoped></style>
