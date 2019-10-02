<template>
  <v-app>
 <!-- Router Link en haut a gauche-->
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <main>
      <router-view/>
    </main>
  </div>
<!-- Router Link en haut a gauche-->
  </v-app>
</template>

<script>
import ToDo from './components/ToDo'
import View from './components/View'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    links: [
      {
        name: 'Se connecter',
        to: '/'
      },
      {
        name: 'Page Acceuil',
        to: '/page-1'
      },
      {
        name: 'Log Admin',
        to: '/page-2'
      }
    ]
  })
}
</script>
