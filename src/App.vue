<template>
  <v-app class="grey lighten-4">
    
   
   <my-profile/>
    
  </v-app>
</template>

<script>

import MyProfile from './views/ProfilePage.vue'

export default {
  masterTitle: 'Title',
  components: { 
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

// bring back later <mssgInbox/>, mssgInbox, import mssgInbox from './views/Inbox.vue'
</script>
