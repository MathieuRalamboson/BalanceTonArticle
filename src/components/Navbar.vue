<template>
  <!-- Barre navigation -->
  <nav>
    <v-app-bar color="grey darken-1" flat app>
      <!-- NavBAR -->
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Mathieu.R</span>
        <span>Vue.js</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text color="white" v-on:click="logout">
        <span>Sign Out</span>
      </v-btn>
    </v-app-bar>

    <!-- Content a ajouter si besoin -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid></v-container>
    </v-content>
	<!-- Content a ajouter si besoin -->
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
  <!-- Barre navigation -->

</template>

<script>
import ToDo from "@/components/ToDo";
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

export default {
  components: { ToDo },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-account", text: "Login", route: "/" },
        { icon: "mdi-folder", text: "View", route: "/page-1" },
        { icon: "mdi-view-dashboard", text: "Autre", route: "/page-2" }
      ]
    };
  },
  methods: {
    async logout() {
      // Deconnection
      console.log("Tentative de déconnection.");
      const response = await this.axios.get("http://localhost:4000" + "/api/logout");
      if (response) {
        //Si il y a déconnection , go Login
        console.log("Vous venez de vous déconnecter")
        this.$router.push("/");
      }else{
        console.log("Vous etes deja déconnecter")
      }
    }
  }
};
</script>