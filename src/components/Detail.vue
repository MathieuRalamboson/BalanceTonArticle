<template>
   <v-dialog max-width="700px" v-model="dialog">
       <template template v-slot:activator="{on}">
           <v-btn
                text v-on="on" 
                class="ma-1" outlined color="indigo"
                v-on:click="viewArticle(idx)"
                >
               <v-icon>mdi-playlist-play</v-icon>
              </v-btn>
       </template>

    <v-card>
        <v-card-title>
            <h2>Detail de l'article</h2>
        </v-card-title>
        <h1> Titre : {{todoList.titre}} </h1>
        <h1> Description : {{todoList.description}} </h1>
        <h1> Status : {{todoList.status}} </h1>
        <img v-bind:src=todoList.url>
        <v-row no-gutters>
            <v-text-field>
            </v-text-field>
        </v-row>
    </v-card>

    </v-dialog>
</template>
<script>
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import View from "./View"

export default {
    props: ['idx'],
   data:() => ({
    
    on: false,
    valid: false,
    seen: true,
    url: "http://localhost:4000",
    dialog: false,

    titre: "",
    description: "",
    status: "",
    todoList: []

   }),
   methods: {
    viewArticle(idx) {
    console.log("Voir un article");
    console.log("Idx recu : ", idx);
    axios.get(this.url + '/api/data/detail', {params: {idx: idx}} )
    .then(response => {
        this.todoList = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    }

   }
};
</script>