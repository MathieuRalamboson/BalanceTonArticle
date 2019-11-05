<template>
   <v-dialog max-width="700px" v-model="dialog">
       <template template v-slot:activator="{on}">
           <v-btn
                text v-on="on" 
                class="ma-1" outlined color="indigo"
                v-on:click="viewArticle(idx)"
                >
               <v-icon>mdi-settings</v-icon>
              </v-btn>
       </template>

    <v-card>
        <v-card-title>
            <h2>Update de l'article</h2>
        </v-card-title>
        <h1> Idx : {{idx}} </h1>
        <h1> Titre : {{todoList.titre}} </h1>
        <h1> Description : {{todoList.description}} </h1>
        <h1> Status : {{todoList.status}} </h1>

        <!-- Recuperation Input -->
      <v-row no-gutters>
        <v-col cols="9">
          <v-text-field v-model="todoList.titre" label="Title" ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="todoList.description" label="Description"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-overflow-btn
            class="my-2"
            :items="dropdown_icon"
            segmented
            target="#dropdown-example"
            v-model="todoList.status"
            required
          ></v-overflow-btn>
        </v-col>
        <v-col>
          <v-btn 
          class="sucess mx-0 mt-3"
          v-on:click="addTodo"
          v-on="false">Update</v-btn>
        </v-col>
      </v-row>
      <!-- Recuperation Input -->
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
    
    dropdown_icon: [
      { text: "news", callback: () => console.log("news") },
      { text: "sante", callback: () => console.log("sante") },
      { text: "doc", callback: () => console.log("doc") }
    ],

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