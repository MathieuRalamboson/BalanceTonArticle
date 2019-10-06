<template>
  <v-container class="grey lighten-5">
    <v-layout>
      <v-btn v-on:click="addTodo">Add</v-btn>
    </v-layout>

    <!-- Affichage Post -->
    <ul id="example-1">
      <li v-for="(todo, idx) in todoList" v-bind:key="idx">{{ todo.titre +' '+ todo.description }}</li>
    </ul>
    <!-- Affichage Post -->

    <!-- Recuperation Input -->
    <v-row no-gutters>
      <v-col cols="9">
        <v-text-field v-model="titre" label="Title" required></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="description" label="Description" required></v-text-field>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
    <!-- Recuperation Input -->

    <!--  Post Existant -->
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="9">
          <v-card
            class="pa-2"
            outlined
            tile
            v-for="(todo, idx) in todoList"
            v-bind:key="idx"
          >{{ todo.titre }}</v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            class="pa-2"
            outlined
            tile
            v-for="(todo, idx) in todoList"
            v-bind:key="idx"
          >{{ todo.description }}</v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-2" outlined tile>
            Image
            <br />Subsequent columns continue along the new line.
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--  Post Existant -->
  </v-container>
</template>

<script>
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  data: () => ({
    valid: false,
    seen: true,
    url: "http://localhost:4000",

    titre: "",
    description: "",
    todoList: [
      {
        titre: "superman",
        description: "héro"
      }
    ]
  }),
  methods: {
    async logout() {
      // Deconnection
      console.log("Tentative de déconnection.");
      const response = await this.axios.get(this.url + "/api/logout");
      if (response) {
        //Si il y a déconnection , go Login
        this.$router.push("/");
      }
    },
    addTodo() {
      // TODO
      this.todoList.push({
        titre: this.titre,
        description: this.description
      });
      console.log("Ajout un post");
      console.log("Titre :", this.titre);
      console.log("Description :", this.description);

      this.titre = '',
      this.description = ''
    }
  }
};
</script>
