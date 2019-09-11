<template>
  <v-container>
    <v-layout text-center wrap>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="identifiant"
                label="Identifiant"
                required
                v-show="visible"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="mdp"
                label="Mdp"
                required
                v-show="visible"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-btn v-on:click="checkLogin">Login</v-btn>
              <v-btn v-on:click="affichage">Visible</v-btn>
            </v-col>
      
          </v-row>
        </v-container>
      </v-form>
    </v-layout>
    <img src="assets/liverpool.png">
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    visible: true,
    identifiant: '',
    mdp: '',
  }),
  methods: {
    affichage () { // rend visible ou pas un objet
      this.visible = !this.visible
    },
    checkLogin () { // Si bon log , acces a la suite
      if(this.identifiant = 'user' && this.mdp == 'user'){
        this.visible = !this.visible
      }
    }
  }
}
</script>
