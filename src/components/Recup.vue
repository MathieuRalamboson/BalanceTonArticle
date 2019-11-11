<template>
  <v-container>
    <v-layout text-center wrap>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="identifiant" label="Identifiant" required v-show="isActive"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="mdp" label="Mdp" required v-show="isActive"></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn v-on:click="checkLogin">Connexion</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
     <img src="./liverpool.png" required v-show = "!isActive">
  </v-container>
</template>

<script>
export default {
    
}
</script>