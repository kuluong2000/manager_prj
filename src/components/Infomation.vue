<template>
  <div>
    <v-container class="px-0 py-0">
      <v-card class="pb-10">
        <h1 class="px-5 py-7 text-center">Thông Tin Nhân Viên</h1>
        <v-row align="center" justify="center" class="">
          <v-col cols="12" sm="4" class="text-center">
            <v-avatar class="mb-2" color="grey darken-1" size="250" v-if="this.imgLink">
              <v-img
                aspect-ratio="30"
                :src="this.imgLink"
              />
            </v-avatar>
            <v-avatar class="mb-2" color="grey darken-1" size="250" v-else>
              <v-img
                aspect-ratio="30"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_8jyrBjic0ELBWNbA2JH7ufzOb3jkJvN8Q&usqp=CAU"
              />
            </v-avatar>
            <h2 class="black--text mt-2 mb-6" v-if="this.firstName && this.lastName">{{this.lastName}} {{this.firstName}}</h2>
            <h2 class="black--text mt-2 mb-6" v-else>Người dùng mới</h2>
            <v-row
              align="center"
              justify="center"
              v-for="(link, index) in linkUser"
              :key="index"
              class="mt-0 ms-5"
            >
              <v-col cols="12" sm="2" class="text-end px-0 mb-2">
                <v-avatar class="mb" color="grey darken-1" size="30">
                  <v-img aspect-ratio="30" :src="link.imgUrl" />
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="10" class="text-start">
                <h4 class="primary--text">{{ link.titleUrl }}</h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="4" class="text-center">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      :counter="30"
                      label="Họ"
                      :value="this.lastName"
                      required
                      class="pt-1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      :counter="30"
                      label="Tên"
                      :value="this.firstName"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="E-mail"
                      :value="this.email"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Password"
                      :value="this.password"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Số điện thoại"
                      value="0346996951"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12" class="pb-0 pt-1">
                    <v-text-field
                      label="Địa Chỉ"
                      :value="this.address"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                        <v-select
                          :items="[
                            'Nhân Viên',
                            'Trưởng Phòng',
                            'Giám đốc CSVC',
                            'Admin',
                          ]"
                          label="Chức Vụ"
                          :value="this.role"
                          required
                        ></v-select>
                  </v-col>

                  <v-col cols="12" md="12">
                        <v-select
                          :items="[
                            'Phòng Marketing',
                            'Phòng Sales',
                            'Phòng Nhân Sự',
                            'Phòng Kế Toán',
                            'Phòng Kiểm Toán',
                            'Phòng Kinh Doanh',
                            'Phòng Công Nghệ Thông Tin',
                            'Phòng CSKH',
                            'Phòng Cơ Sở Vật Chất'
                          ]"
                          label="Phòng Ban"
                          :value="this.department"
                          :menu-props="{ top: true, offsetY: true }"
                          required
                        ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
          <v-col cols="12" sm="4" class="text-center">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://www.constructionplusasia.com/wp-content/uploads/2020/05/1-03.jpg"
              >
              </v-img>

              <v-card-subtitle class="pb-2 pt-3" style="font-size: 16px">
                Công Ty Axon Active
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Nhân viên lập trình VueJS</div>
                <div>Thời gian làm việc: 2 năm</div>
              </v-card-text>
            </v-card>
            <v-card class="mx-auto mt-5" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://tatgreen.vn/StoreData/images/54516463_612519319234103_3432507145357099008_o%20(1).jpg"
              >
              </v-img>
              <v-card-subtitle class="pb-2 pt-3" style="font-size: 16px">
                Công Ty Paradox Software
              </v-card-subtitle>
              <v-card-text class="text--primary">
                <div>Nhân viên lập trình NodeJS</div>
                <div>Thời gian làm việc: 2.5 năm</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-btn color="blue-grey" class="ma-2 white--text mt-8">
            Cập nhật thông tin
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Infomation",
  data() {
    return {
      linkUser: [
        {
          imgUrl:
            "https://br.atsit.in/vi/wp-content/uploads/2021/06/anh-facebook-khong-tai-hoac-khong-hien-thi-loi-khong-the-ket-noi-bat-len-ban-khong-don-doc.png",
          titleUrl: "https://www.facebook.com/",
        },
        {
          imgUrl:
            "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/90/96/fc/9096fc60-7d7f-b8a1-f152-882c02811ddc/AppIcon_v3-85-220-4-2x.png/1200x630bb.png",
          titleUrl: "https://www.google.com/intl/vi/gmail/about/",
        },
        {
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757__480.png",
          titleUrl: "https://github.com/",
        },
        {
          imgUrl:
            "https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png",
          titleUrl: "https://www.instagram.com/",
        },
      ],
      firstName: "",
      lastName: "",
      imgLink: "",
      email: "",
      password: "",
      role: "",
      department: "",
      address: "",
    };
  },
  async mounted() {
    const res = await axios.get(`http://localhost:3001/employee`);
    const dataLogin = JSON.parse(localStorage.getItem("user-info"));
    console.log(dataLogin);
    let id = dataLogin.email;
    console.log(id);
    let data = res.data;
    const index = data.find((el) => el.email === id);
    //  const index =  data.map(el => el.email == id)
    console.log(index);
    this.firstName = index.firstName;
    this.lastName = index.lastName;
    this.imgLink = index.imgUrl;
    this.email = index.email;
    this.password = index.password;
    this.role = index.role;
    this.address = index.address;
    this.department = index.depart_name;
  },
};
</script>

<style>
</style>