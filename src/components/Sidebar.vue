<template>
  <v-navigation-drawer v-if="!drawer" app>
    <v-img height="140" class="pa-4" src="https://timnhaviet.vn/hinh-background-dep/imager_3486.jpg">
      <div class="text-center">
        <v-avatar class="mb-2" color="grey darken-1" size="77" v-if="imgUrl">
          <v-img aspect-ratio="30" :src="imgUrl" />
        </v-avatar>
        <v-avatar class="mb-2" color="grey darken-1" size="77" v-else>
          <v-img aspect-ratio="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU" />
        </v-avatar>
        <h3 class="white--text" v-if="lastName && firstName">{{ lastName }} {{ firstName }}</h3>
        <h3 class="white--text" v-else>Người dùng mới</h3>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(link, i) in links" :key="i" link @click="positionAction(link.action)" class="item-sidebar">
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content style="color: #9ca6ac">
          {{ link.title }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        {
          icon: "mdi-microsoft-windows",
          title: "Trang Chủ",
          action: "dashboard",
        },
        { icon: "mdi-account", title: "Quản Lý Tài Khoản", action: "user" },
        {
          icon: "mdi-card-account-details-outline",
          title: "Quản Lý Nhân Viên",
          action: "employee",
        },
        {
          icon: "mdi-desktop-classic",
          title: "Quản Lý CS Vật Chất",
          action: "facilities",
        },
        {
          icon: "mdi-home-city",
          title: "Quản Lý Phòng Ban",
          action: "department",
        },
        {
          icon: "mdi-shield-account",
          title: "Quản Lý Chức Vụ",
          action: "position",
        },
        {
          icon: "mdi-cash-multiple",
          title: "Quản Lý Tiền Lương",
          action: "payment",
        },
        { icon: "mdi-cog", title: "Cài Đặt", action: "dashboard" },
      ],
      firstName: "",
      lastName: "",
      imgUrl: "",
      role: "",
    };
  },
  async mounted() {
    const res = await axios.get(`http://localhost:3001/employee`);
    const dataLogin = JSON.parse(localStorage.getItem("user-info"));
    let email = dataLogin.email;
    let data = res.data;
    const index = data.find((el) => el.email === email);
    //  const index =  data.map(el => el.email == id)
    this.firstName = index.firstName;
    this.lastName = index.lastName;
    this.imgUrl = index.imgUrl;
    this.role = index.role;
    if (this.$route.fullPath == "/user") {
      return;
    } else {
      if (this.$route.name === "user") {
        if (this.role === "Admin" || this.role === "Trưởng Phòng") {
          this.$router.push("/user");
        } else {
          this.$router.push("/");
          setTimeout(() => alert("Bạn không có quyền hạn để vào"), 400);
        }
      }
    }
    if (this.$route.fullPath == "/employee") {
      return;
    } else {
      if (this.$route.name === "employee") {
        if (this.role === "Admin" || this.role === "Trưởng Phòng" || this.role === "Nhân Viên" || this.role === "Giám Đốc CSVC") {
          this.$router.push("/employee");
        } else {
          this.$router.push("/");
          setTimeout(() => alert("Bạn không có quyền hạn để vào"), 400);
        }
        console.log("this is", this.$route.Path);
      }
    }
    // facilities
    if (this.$route.fullPath == "/facilities") {
      return;
    } else {
      if (this.$route.name === "facilities") {
        if (this.role === "Admin" || this.role === "Nhân Viên" || this.role === "Giám Đốc CSVC") {
          this.$router.push("/facilities");
        } else {
          this.$router.push("/");
          setTimeout(() => alert("Bạn không có quyền hạn để vào"), 400);
        }
      }
    }

    // department
    if (this.$route.fullPath == "/department") {
      return;
    } else {
      if (this.$route.name === "department") {
        if (this.role === "Admin" || this.role === "Trưởng Phòng") {
          this.$router.push("/department");
        } else {
          this.$router.push("/");
          setTimeout(() => alert("Bạn không có quyền hạn để vào"), 400);
        }
      }
    }
    // position
    if (this.$route.fullPath == "/position") {
      return;
    } else {
      if (this.$route.name === "position") {
        if (this.role === "Admin" || this.role === "Trưởng Phòng") {
          this.$router.push("/position");
        } else {
          this.$router.push("/");
          setTimeout(() => alert("Bạn không có quyền hạn để vào"), 400);
        }
      }
    }
    //payment
    if (this.$route.fullPath == "/payment") {
      return;
    } else {
      if (this.$route.name === "payment") {
        if (this.role === "Admin" || this.role === "Trưởng Phòng") {
          this.$router.push("/payment");
        } else {
          this.$router.push("/");
          setTimeout(() => alert("Bạn không có quyền hạn để vào"), 400);
        }
      }
    }
  },
  methods: {
    positionAction(action) {
      switch (action) {
        case "dashboard":
          if (this.$route.name !== "dashboard") {
            this.$router.push("/");
          } else {
            alert("Bạn đang ở trang này rồi");
          }
          break;
        case "user":
          if (this.$route.name !== "user") {
            if (this.role === "Admin" || this.role === "Trưởng Phòng") {
              this.$router.push("/user");
              console.log(this.$route.name);
            } else {
              alert("Bạn Không Có Quyền Hạn Để Vào");
            }
          } else {
            alert("Bạn đang ở trang này rồi");
          }
          break;
        case "employee":
          if (this.$route.name !== "employee") {
            if (this.role === "Admin" || this.role === "Trưởng Phòng" || this.role === "Nhân Viên" || this.role === "Giám Đốc CSVC") {
              this.$router.push("/employee");
            } else {
              alert("Bạn Không Có Quyền Hạn Để Vào");
            }
          } else {
            alert("Bạn đang ở trang này rồi");
          }

          break;
        case "facilities":
          if (this.$route.name !== "facilities") {
            if (this.role === "Admin" || this.role === "Nhân Viên" || this.role === "Giám Đốc CSVC") {
              this.$router.push("/facilities");
            } else {
              alert("Bạn Không Có Quyền Hạn Để Vào");
            }
          } else {
            alert("Bạn đang ở trang này rồi");
          }
          break;
        case "department":
          if (this.$route.name !== "department") {
            if (this.role === "Admin" || this.role === "Trưởng Phòng") {
              this.$router.push("/department");
            } else {
              alert("Bạn Không Có Quyền Hạn Để Vào");
            }
          } else {
            alert("Bạn đang ở trang này rồi");
          }
          break;
        case "position":
          if (this.$route.name !== "position") {
            if (this.role === "Admin" || this.role === "Trưởng Phòng") {
              this.$router.push("/position");
            } else {
              alert("Bạn Không Có Quyền Hạn Để Vào");
            }
          } else {
            alert("Bạn đang ở trang này rồi");
          }

          break;
        case "payment":
          if (this.$route.name !== "payment") {
            if (this.role === "Admin" || this.role === "Trưởng Phòng") {
              this.$router.push("/payment");
            } else {
              alert("Bạn Không Có Quyền Hạn Để Vào");
            }
          } else {
            alert("Bạn đang ở trang này rồi");
          }

          break;
        default:
          alert("Hiện tại không có chức năng này");
      }
    },
  },
  //     computed: {
  //   ...mapState({
  //     userInfo: (state) => state.userInfo,
  //     imageInfo: (state) => state.imageInfo,
  //   }),
  // },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: green !important;
  display: block;
}
a,
i {
  color: #9ca6ac !important;
  transition: 0.3s;
}
.v-list-item--link,
.v-list-item__content {
  transition: 0.3s;
}
.v-list-item--link:hover {
  background-color: green;
}
.v-list-item--link:hover .v-list-item__content,
.v-list-item--link:hover i {
  color: #fff !important;
}
.item-sidebar {
  display: flex;
}
</style>
