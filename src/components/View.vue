<template>
  <v-container class="grey lighten-5">
    <input v-on:change="refresh">
    <v-layout v-if = adminCheck()>
       <Popup >
        </Popup>
    </v-layout>

    <!-- Articles génére une list de la data -->
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

            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Status</div>
              <div>{{ todo.status }}</div>
            </v-flex>

            <!-- Boutton sur les cotées -->
            <v-flex xs2 sm4 md2>
  
              <Detail :idx="idx" >
              </Detail>

              <Update :idx='idx' v-if = adminCheck() >
              </Update>              

              <!-- Supprimer article-->
              <v-btn 
              v-if = adminCheck() 
              class="ma-1" outlined color="indigo"
              v-on:click="deleteTodo(idx)">
               <v-icon>mdi-delete</v-icon>
              </v-btn>

            </v-flex>
            <!-- Boutton sur les cotées -->
          </v-layout>
        </v-card>
      </v-container>
    </div>
    <!-- Articles -->

  </v-container>
</template>

<script>
import Router from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import Popup from './Popup'
import Detail from './Detail'
import Update from './Update'

export default {
  components: {Popup,Detail,Update},
  props:['admin'],
  data: () => ({
    valid: false,
    seen: true,
    url: "http://localhost:4000",
    titre: "",
    description: "",
    status: "",

    todoList: []
  }),
  created () {
        this.refresh();
    },
  updated () {
        this.refresh();
    },
  methods: {
    debug() {
      console.log(this.$route.params.admin)
    },
    adminCheck() {
      if(this.$route.params.admin) {
        return true
      }else{
        return false
      }
    },
    refresh() {
      //console.log("Recuperation Database");
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
    }
  }
};
</script>

<style>
.project.news {
  border-left: 4px solid #3cd1c2;
}
.project.sante {
  border-left: 4px solid orange;
}
.project.doc {
  border-left: 4px solid tomato;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
