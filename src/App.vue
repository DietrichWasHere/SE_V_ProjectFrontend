<template>
  <v-app class="grey lighten-4">
    
    <SideBar></Sidebar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import SideBar from './components/sidebar'


export default {
  masterTitle: 'Title',
  components: { SideBar },
  name: 'App',
    props: {
  
  },
  data () {
    return {
      
    }
  }
}

// bring back later   import mssgInbox from './views/Inbox.vue'   mssgInbox,     <mssgInbox/>

</script>
