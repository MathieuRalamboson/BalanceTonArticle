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
            <h1>{{todoList.titre}}</h1>
        </v-card-title>
        <h2> Status : {{todoList.status}} </h2>
        <h2> Description : </h2>
        <h2> {{todoList.description}} </h2>
        <img v-bind:src=todoList.url>
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