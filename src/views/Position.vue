<template>
  <div class="position">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>employee list</h1> -->
          <v-card>
            <v-card-title>
              DANH SÁCH CHỨC VỤ
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="header"
              :items="position"
              :items-per-page="10"
              class="elevation-1 text-center"
              item-key="id"
              show-select
              :search="search"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
              }"
            >
              <template v-slot:[`item.actions`]="">
                <v-btn class="ma-2" color="primary" dark>
                  Detail
                  <v-icon dark right> mdi-eye </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="orange darken-2" dark>
                  Update
                  <v-icon dark right> mdi-pencil </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="red" dark>
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      header: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Mã Chức Vụ",
          value: "position_id",
          align: "center",
        },
                        {
          text: "Tên Chức Vụ",
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
      position: [],
      search: "",
    };
  },
  async mounted() {
    const res = await axios.get(`http://localhost:3001/position`);
    if (res.status === 200) {
      this.position = res.data;
      console.log(this.position);
    }
  },
};
</script>
<style scoped>
.elevation-1 {
  padding-top: 20px !important;
}
h1 {
  text-transform: uppercase;
  text-align: center;
  margin: -10px 0 30px;
}
</style>