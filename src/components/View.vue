<template>
  <v-container class="grey lighten-5">
    <v-layout>
      <v-btn v-on:click="logout">Log out</v-btn>
      <v-btn v-on:click="addTodo">Add</v-btn>
    </v-layout>

    <v-row no-gutters>
      <v-col cols="9">
        <v-text-field v-model="title" label="Title" required></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="description" label="Description" required></v-text-field>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="9">
        <v-card class="pa-2" outlined tile>Titre</v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="pa-2" outlined tile>
          Description
          <br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="pa-2" outlined tile>
          Image
          <br />Subsequent columns continue along the new line.
        </v-card>
      </v-col>
    </v-row>
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
      const response = await this.axios.get(this.url + "/api/logout", {
        username: this.username,
        password: this.password
      });
      if (response) {
        //Si il y a déconnection , go Login
        this.$router.push("/");
      }
    },
    addTodo() {
      // TODO
      this.todoList.push({
        title: this.title,
        description: this.description
      });
      console.log(JSON.stringify(this.todoList));
      this.newTodolist = "";
    }
  }
};
</script>
