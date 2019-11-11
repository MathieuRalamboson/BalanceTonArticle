<template>
  <v-container>
    <v-layout text-center wrap>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="username" label="Username" required v-show="isActive"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="password" label="Password" required v-show="isActive"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn v-on:click="checkLogin">Login</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
// this.axios
      //   .post(this.url + "/api/login", {
      //     username: this.username,
      //     password: this.password,
      //     userId: 1000
      //   })
      //   .then(rep => {
      //     // Connection etablie
      //     console.log("Login réussi !");
      //     console.log("La réponse : " , rep)
      //   })
      //   .catch(err => {
      //     // Erreur
      //     console.log("Login échoué !");
      //     console.log(err);
      //     //console.log("La réponse : " , rep)
      //   });
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  data: () => ({
    valid: false,
    isActive: true,
    username: "",
    password: "",
    userId: "",
    url: "http://localhost:4000"
  }),
  methods: {
    affichage() {// rend isActive ou pas un objet
      
      this.isActive = !this.isActive;
      console.log("Objet isActive");
    },
    async checkLogin() {// Requete pour connection
      console.log("Tentative de connection.");
      
      const response = await this.axios.post(this.url + '/api/login', {
        username: this.username,
        password: this.password,
      })
      
      if(response){//Si il y a connection , go View
        this.$router.push({path:"/page-1" ,
         params: { admin : response.data.admin },
         props: { admin : true }
         });
        console.log('Admin1 :', response.data.admin)
        console.log('Admin2 :', this.$route.params.admin)
      }
      
    }
  }
};
</script>
