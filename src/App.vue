<template>
  <v-app class="grey lighten-4">
    <SideBar :orgID="this.$route.params.orgID">

    </Sidebar>

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
  data () {
    return {
      
    }
  },
  created() {console.log(this.$route)}
}


// bring back later   import mssgInbox from './views/Inbox.vue'   mssgInbox,     <mssgInbox/>

</script>
<style>


.v-app-bar-title__content{
  width: 500px !important;
}


</style>
