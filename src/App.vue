<template>
  <v-app class="grey lighten-4">
    
   <mssgInbox/>
    
  </v-app>
</template>

<script>
import mssgInbox from './views/Inbox.vue'

export default {
  masterTitle: 'Title',
  components: { mssgInbox 
  
  },
  name: 'App',
    props: {
  
  },
  data () {
    return {
      
    }
  }
}
</script>