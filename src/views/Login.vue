<template>
  <div class="d-flex justify-center align-center" style="height: 100%">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h2 class="text-center mb-3">Login in to Your Account</h2>
                      <h5 class="text-center grey--text">
                        Log in to your account so you can continue builiding.
                        <br />and editing your onboarding flows
                      </h5>
                      <v-row
                        align="center"
                        justify="center"
                        v-on:keyup.enter="login"
                      >
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-12 mb-1"
                            v-model="user.email"
                            :rules="[requiredEmail]"
                          />
                          <!-- <h5 v-if="user.email !== 'sydung@gmail.com'" style="color: red;margin: -20px 0 20px">Vui lòng nhập đúng cú pháp</h5> -->
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            v-model="user.password"
                            :rules="[requiredPassword]"
                          />
                          <!-- <h5 v-if="user.password !== '1234567890'" style="color: red; margin: -20px 0 20px">Vui lòng nhập trên 8 ký tự</h5> -->
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="Remember Me"
                                class="mt-n1"
                                color="blue"
                              >
                              </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text float-right"
                                >Forgot password</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn color="blue" dark block tile @click="login"
                            >Sign in</v-btn
                          >

                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Log in using
                          </h5>
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-16
                            "
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">mdi-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >mdi-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="blue rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h1 class="text-center mb-5">
                          Don't Have an Account Yet?
                        </h1>
                        <h4 class="text-center">
                          Let's get you all set up so you can start creating
                          your your first<br />
                          onboarding experience
                        </h4>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h1 class="text-center mb-5">Alredy Signed up?</h1>
                        <h4 class="text-center">
                          Log in to your account so you can continue building
                          and<br />
                          editing your onboarding flows
                        </h4>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h2 class="text-center mb-3">Sign Up for an Account</h2>
                      <h5 class="text-center grey--text mb-3">
                        Let's get you all set up so you can start creatin your
                        <br />
                        first onboarding experiance
                      </h5>
                      <v-row
                        align="center"
                        justify="center"
                        v-on:keyup.enter="signup"
                      >
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="First Name"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                class="mt-4"
                                v-model="userSignUp.firstName"
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Last Name"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                class="mt-4"
                                v-model="userSignUp.lastName"
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            v-model="userSignUp.email"
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            v-model="userSignUp.password"
                          />
                          <v-text-field
                            label="Confirm Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            v-model="userSignUp.passwordConfirm"
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="I Accept AAE"
                                class="mt-n1"
                                color="blue"
                              >
                              </v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption blue--text ml-n4 float-right"
                                >Terms &Conditions</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn color="blue" dark block tile @click="signup"
                            >Sign up</v-btn
                          >

                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Sign up using
                          </h5>
                          <div
                            class="
                              d-flex
                              justify-space-between
                              align-center
                              mx-10
                              mb-11
                            "
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">mdi-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >mdi-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <popup
      :show="showDialog"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Ok! Mình sẽ kiểm tra lại"
      description="Email hoặc mật khẩu không đúng!!!"
    ></popup>
    <popup
      :show="showDialogSignUp"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Ok! Mình sẽ kiểm tra lại"
      description="Vui lòng điền đầy đủ thông tin !!!"
    ></popup>
    <popup
      :show="showDialogPassword"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="Ok! Mình sẽ kiểm tra lại"
      description="Kiểm tra lại mật khẩu vừa nhập !!!"
    ></popup>
    <popup
      :show="showDialogSuccess"
      :cancel="cancel"
      :confirm="confirm"
      title="Thông báo?"
      text="OKE ^^"
      description="Đăng ký thành công !!!"
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
      step: 1,
      requiredEmail: (value) => value.length > 0 || "You must input your email",
      requiredPassword: (value) => value.length > 0 || "You must input your password",
      user: {},
      userSignUp: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        role: "",
        position_id: "",
        depart_id: "",
        depart_name: "",
        address: "",
        imgUrl: "",
      },
      showDialog: false,
      showDialogSignUp: false,
      showDialogPassword: false,
      showDialogSuccess: false,
    };
  },
  methods: {
    async login() {
      let res = await axios.get(
        `http://localhost:3001/user?email=${this.user.email}&password=${this.user.password}`
      );
      console.log(res);
      if (res.data.length > 0) {
        // let resEm = await axios.get(`http://localhost:3001/employee?email=${this.user.email}`)
        // this.$store.dispatch('actionSetUserInfo', `${resEm.data[0].lastName} ${resEm.data[0].firstName}`);
        setTimeout(() => this.$store.dispatch("actionSetDialog", true), 200);
        // console.log(resEm.status)
        localStorage.setItem("user-info", JSON.stringify(res.data[0]));
        this.$router.push("/");
      } else {
        this.showDialog = true;
      }
    },
    async signup() {
      if (
        this.userSignUp.firstName == "" ||
        this.userSignUp.lastName == "" ||
        this.userSignUp.email == "" ||
        this.userSignUp.password == "" ||
        this.userSignUp.passwordConfirm == ""
      ) {
        this.showDialogSignUp = true;
      } else {
        if (this.userSignUp.password === this.userSignUp.passwordConfirm) {
          let res = await axios.post(`http://localhost:3001/user`, {
            email: this.userSignUp.email,
            password: this.userSignUp.password,
            role: this.userSignUp.role,
          });
          let res2 = await axios.post(`http://localhost:3001/employee`, {
            firstName: this.userSignUp.firstName,
            lastName: this.userSignUp.lastName,
            email: this.userSignUp.email,
            password: this.userSignUp.password,
            role: this.userSignUp.role,
            position_id: this.userSignUp.position_id,
            depart_id: this.userSignUp.depart_id,
            depart_name: this.userSignUp.depart_name,
            address: this.userSignUp.address,
            imgUrl: this.userSignUp.imgUrl,
          });
          console.log(res);
          console.log(res2);
          this.showDialogSuccess = true;
          this.step = 1;
        } else {
          this.showDialogPassword = true;
        }
      }
    },
    cancel() {
      console.log("cancel");
      this.showDialog = false;
      this.showDialogSignUp = false;
      this.showDialogPassword = false;
      this.showDialogSuccess = false;
    },
    confirm() {
      console.log("confirm");
      this.showDialog = false;
      this.showDialogSignUp = false;
      this.showDialogPassword = false;
      this.showDialogSuccess = false;
    },
  },
  props: {
    source: String,
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
a {
  text-decoration: none;
  color: #fff;
  display: block;
  width: 100%;
}
</style>