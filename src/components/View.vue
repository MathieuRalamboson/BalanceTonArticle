<template>
  <v-container class="grey lighten-5">
    <v-layout>
<<<<<<< HEAD
      <v-btn v-on:click="refresh">Refresh</v-btn>
       <Popup />
    </v-layout>

    <!-- Articles génére une list de la data -->
=======
      <v-btn v-on:click="addTodo">Add</v-btn>
    </v-layout>

    <!-- Articles -->
>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
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
<<<<<<< HEAD
=======

>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
            </v-flex>

            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Créé par :</div>
              <div>{{ todo.due }}</div>
<<<<<<< HEAD
=======

>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
            </v-flex>
            <v-flex xs12 sm4 md2>
              <div class="caption grey--text">Fait le :</div>
              <div>{{ todo.date }}</div>
<<<<<<< HEAD
=======

>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
            </v-flex>

            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Status</div>
              <div>{{ todo.status }}</div>
            </v-flex>
<<<<<<< HEAD

            <v-flex xs2 sm4 md2>
              <v-btn 
              class="ma-2" outlined color="indigo"
              v-on:click="deleteTodo(idx)">
               <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-flex>
=======
>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
          </v-layout>
        </v-card>
      </v-container>
    </div>
    <!-- Articles -->

<<<<<<< HEAD
=======
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

>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
  </v-container>
</template>

<script>
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
<<<<<<< HEAD
import Popup from './Popup'

export default {
  components: {Popup},
=======
export default {
>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
  data: () => ({
    valid: false,
    seen: true,
    url: "http://localhost:4000",
<<<<<<< HEAD
    titre: "",
    description: "",
    status: "",

    todoList: []
  }),
  methods: {
    refresh() {
      console.log("Recuperation Database");
      axios.get(this.url + '/api/data')
        .then(response => {
      // JSON responses are automatically parsed.
      this.todoList = response.data
      // this.todoList = [...this.todoList , response.data]
    })
    .catch(e => {
      this.errors.push(e)
    })
    },

    deleteTodo(idx) {
    console.log("Suppression un post");
    console.log("Idx recu : ", idx);
    axios.delete(this.url + '/api/data', {params: {idx: idx}} )
    .then(response => {
    })
    .catch(e => {
      this.errors.push(e)
    })
    this.refresh()
=======

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
>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
    }
  }
};
</script>

<style>
<<<<<<< HEAD
.project.news {
  border-left: 4px solid #3cd1c2;
}
.project.sante {
  border-left: 4px solid orange;
}
.project.doc {
=======
.project.news{
  border-left: 4px solid #3CD1C2;
}
.project.sante{
  border-left: 4px solid orange
}
.project.doc{
>>>>>>> dc214730059e6762e15f40c90c1a965255a9c663
  border-left: 4px solid tomato;
}
</style>
