<template>
  <v-app class="grey lighten-4">
    
    <SideBar></Sidebar>

    <v-content>
      <router-view></router-view>
     
      <my-profile/>
    </v-content>
    
  </v-app>
</template>

<script>
import SideBar from './components/sidebar'

import MyProfile from './views/ProfilePage.vue'


export default {
  masterTitle: 'Title',
  components: { SideBar,
                
                MyProfile,

  },
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
