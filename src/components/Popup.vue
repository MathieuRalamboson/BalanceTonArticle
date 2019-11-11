<template>
  <v-dialog max-width="700px" v-model="dialog">
    <template template v-slot:activator="{on}">
      <v-btn depresed small color="black"
       text v-on="on" class="success">Ajouter un article</v-btn>
    </template>

  <form>
    <v-card>
      <v-card-title>
        <h2>Ajouter un article</h2>
      </v-card-title>
      <!-- Recuperation Input -->
      <v-row align="center">
        <v-col cols="9" sm="4">
          <v-text-field 
          v-model="titre" 
          label="Title"
          outlined
           ></v-text-field>
        </v-col>

        <v-col cols="9">
          <v-textarea
          v-model="description" label="Description"
          auto-grow
          outlined
          rows="3"
          row-height="25"
          shaped
        ></v-textarea>
        </v-col>
        

        <v-col cols="9">
          <v-text-field 
          v-model="imgUrl" 
          label="URL" 
          outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-overflow-btn
            class="my-2"
            :items="dropdown_icon"
            label="Choix du status"
            segmented
            target="#dropdown-example"
            v-model="status"
            required
          ></v-overflow-btn>
        </v-col>

        <v-col cols="9">
          <v-btn 
          depresed small color="black" 
          class="success"
          v-on:click="addTodo"
          v-on="false">Ajouter</v-btn>
        </v-col>

        <img v-bind:src=imgUrl>
      </v-row>
      <!-- Recuperation Input -->
    </v-card>
    </form>
  </v-dialog>
</template>
<script>
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import View from "./View"

export default {
  data: () => ({
    on: false,
    valid: false,
    seen: true,
    //url: "http://localhost:4000",
    url: "",
    dialog: false,

    dropdown_icon: [
      { text: "news", callback: () => console.log("news") },
      { text: "sante", callback: () => console.log("sante") },
      { text: "doc", callback: () => console.log("doc") }
    ],
    titre: "",
    description: "",
    status: "",
    imgUrl: ""
  
  }
  ),
  methods: {
    addTodo() { //Push les donnée sur data en server.js
      console.log(" Tentative d'ajout d'un post");
      axios.post(this.url + '/api/data', {
      titre: this.titre,
      description: this.description,
      status: this.status,
      url: this.imgUrl
    })
    .then(response => {})
      this.init_dialog(),
      this.dialog = false
    },
    init_dialog() { // Remise a 0
    this.titre = null,
    this.description = null,
    this.status = null,
    this.imgUrl = null
    }
  }
};
</script>