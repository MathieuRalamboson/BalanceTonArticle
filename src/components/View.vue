<template>
  <v-container class="grey lighten-5">
    <v-layout>
      <v-btn v-on:click="addTodo">Add</v-btn>
    </v-layout>

    <!-- Articles -->
    <div class="dashboard">
      <h1 class="subheading grey--text">Les Articles</h1>

      <v-container class="my-5">
        <v-card flat class="pa-3" v-for="(todo, idx) in todoList" v-bind:key="idx">
          <v-layout row wrap :class="`pa-3 project ${todo.status}`">
            <v-flex xs12 md2>
              <div class="caption grey--text">Article</div>
              <div>{{ todo.titre }}</div>
            </v-flex>
            <v-flex xs12 md2>
              <div class="caption grey--text">Description</div>
              <div>{{ todo.description }}</div>

            </v-flex>

            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Créé par :</div>
              <div>{{ todo.due }}</div>

            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Fait le :</div>
              <div>{{ todo.date }}</div>

            </v-flex>

            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Status</div>
              <div>{{ todo.status }}</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-container>
    </div>
    <!-- Articles -->

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
        description: "héro",
        due: "Mathieu.R",
        date: "2nd Jan 2019",
        status: "news"
      },
{
        titre: "batman",
        description: "héro",
        due: "Mathieu.R",
        date: "1st Jan 2019",
        status: "sante"
      }
    ]
  }),
  methods: {
    addTodo() {
      // TODO
      this.todoList.push({
        titre: this.titre,
        description: this.description
      });
      console.log("Ajout un post");
      console.log("Titre :", this.titre);
      console.log("Description :", this.description);

      (this.titre = ""), (this.description = "");
    }
  }
};
</script>

<style>
.project.news{
  border-left: 4px solid #3CD1C2;
}
.project.sante{
  border-left: 4px solid orange
}
.project.doc{
  border-left: 4px solid tomato;
}
</style>
