<template>
  <v-app class="grey lighten-4">
    <Navbar />
 <!-- Router View -->
  <div>
    <main>
      <router-view/>
    </main>
  </div>
<!-- Router View -->
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import ToDo from './components/ToDo'
import View from './components/View'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    links: [
      {
        name: 'Se connecter',
        to: '/'
      },
      {
        name: 'Page View',
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
