<template>
  <div class="account">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>employee list</h1> -->
          <v-card>
            <v-card-title class="pb-0">
              DANH SÁCH TÀI KHOẢN
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="green"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="ms-5 my-4"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="pt-7">
                  <span class="text-h5">Thêm mới tài khoản</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal first name*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col> -->
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                          v-model="user.email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                          v-model="user.password"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-select
                          :items="[
                            'Nhân Viên',
                            'Trưởng Phòng',
                            'Giám đốc CSVC',
                            'Admin',
                          ]"
                          label="Chức Vụ"
                          required
                          v-model="user.role"
                        ></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="[
                            'Skiing',
                            'Ice hockey',
                            'Soccer',
                            'Basketball',
                            'Hockey',
                            'Reading',
                            'Writing',
                            'Coding',
                            'Basejump',
                          ]"
                          label="Interests"
                          multiple
                        ></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">
                    Đóng
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="createUser">
                    Cập nhật
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-data-table
              :headers="header"
              :items="account"
              :items-per-page="10"
              class="elevation-1 text-center table-list"
              item-key="id"
              show-select
              :search="search"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
              }"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn class="ma-2" color="primary" dark>
                  Detail
                  <v-icon dark right> mdi-eye </v-icon>
                </v-btn>
                <v-btn
                  class="ma-2"
                  color="orange darken-2"
                  dark
                  @click="showDialogUpdate = true"
                >
                  Update
                  <v-icon dark right> mdi-pencil </v-icon>
                </v-btn>
                <v-btn
                  class="ma-2"
                  color="red"
                  dark
                  @click="handleRow(item)"
                >
                  Delete
                  <v-icon dark right> mdi-delete </v-icon>
                </v-btn>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary"> Reset </v-btn>
              </template>
              <!-- <template v-slot:top>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="mx-5"
              ></v-text-field> </template> -->
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <popup
      :show="showDialogDelete"
      :cancel="cancel"
      :confirm="handleDelete"
      text="Có! Mình muốn xóa ^^"
      title="Thông báo!"
      textCancel="Không nha :v"
      description="Bạn có muốn xóa dữ liệu này không ???"
    ></popup>
    <popup
      :show="showDialogUpdate"
      :cancel="cancel"
      :confirm="confirm"
      text="Ok! Mình sẽ vào lại sau"
      title="Thông báo!"
      description="Chức năng này hiện tại vẫn chưa cập nhật???"
    ></popup>
    <popup
      :show="showDialogCreateRequired"
      :cancel="cancel"
      :confirm="confirm"
      text="Ok! Mình sẽ kiểm tra lại"
      title="Thông báo!"
      description="Vui lòng điền đầy đủ thông tin nhân viên!!"
    ></popup>
    <popup
      :show="showDialogCreateSuccess"
      :cancel="cancel"
      :confirm="confirm"
      text="Oke ^^"
      title="Thông báo!"
      description="Thêm dữ liệu thành công!!"
    ></popup>
    <popup
      :show="showDialogDeleteSuccess"
      :cancel="cancel"
      :confirm="confirm"
      text="Oke ^^"
      title="Thông báo!"
      description="Xoá dữ liệu thành công!!"
    ></popup>
  </div>
</template>
<script>
import axios from "axios";
import Popup from "../components/Popup.vue";
export default {
  components: { Popup },
  data() {
    return {
      header: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Email",
          value: "email",
          align: "center",
        },
        {
          text: "Password",
          value: "password",
          align: "center",
        },
        {
          text: "Chức vụ",
          value: "role",
          align: "center",
        },
        {
          text: "ACTIONS",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        position_id: "",
        depart_id: "",
        depart_name: "",
        address: "",
        imgUrl: "",
      },
      deleteId: 0,
      account: [],
      search: "",
      dialog: false,
      showDialogDelete: false,
      showDialogUpdate: false,
      showDialogCreateRequired: false,
      showDialogCreateSuccess: false,
      showDialogDeleteSuccess: false,
    };
  },
  methods: {
    handleRow(item) {
      this.deleteId = item.id;
      this.showDialogDelete = true;
    },
    async handleDelete() {
      await axios.delete(`http://localhost:3001/user/${this.deleteId}`);
      this.showDialogDelete = false;
      this.showDialogDeleteSuccess = true;
      setTimeout(() => window.location.reload(), 2000)
    },
    cancel() {
      this.showDialogDelete = false;
      this.showDialogUpdate = false;
      this.showDialogCreateRequired = false;
      this.showDialogCreateSuccess = false;
    },
    confirm() {
      this.showDialogDelete = false;
      this.showDialogUpdate = false;
      this.showDialogCreateRequired = false;
      this.showDialogCreateSuccess = false;
      this.showDialogDeleteSuccess = false
    },
    async createUser() {
      if (
        this.user.email.length == "" ||
        this.user.password == "" ||
        this.user.role == ""
      ) {
        this.showDialogCreateRequired = true;
        this.dialog = false;
      } else {
        let res = await axios.post(`http://localhost:3001/user`, {
          email: this.user.email,
          password: this.user.password,
          role: this.user.role,
        });
        let res2 = await axios.post(`http://localhost:3001/employee`, {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password,
          role: this.user.role,
          position_id: this.user.position_id,
          depart_id: this.user.depart_id,
          depart_name: this.user.depart_name,
          address: this.user.address,
          imgUrl: this.user.imgUrl,
        });
        console.log(res);
        console.log(res2);
        this.dialog = false;
        this.showDialogCreateSuccess = true;
        setTimeout(() => window.location.reload(), 2000)
      }
    },
  },
  async mounted() {
    const res = await axios.get(`http://localhost:3001/user`);
    if (res.status === 200) {
      this.account = res.data;
      console.log(this.account);
    }
  },
};
</script>
<style scoped>
h1 {
  text-transform: uppercase;
  text-align: center;
  margin: -10px 0 30px;
}
</style>