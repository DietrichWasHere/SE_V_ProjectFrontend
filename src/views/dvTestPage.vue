<template>
    <v-app>  
      <h1>Joe Shmoe Goe Noe Oho!</h1>
      <social-login/>
      <p>{{this.orgs}}</p>
   </v-app>
</template>

<script>
import SocialLogin from '../components/SocialLogin.vue'
import OrgServices from '@/services/OrgServices.js';

export default {
  components: { SocialLogin },
  name: 'Profile',
  props: {
    msg: String
  },
  data() {
    return {
      orgs: []
    };
  },
  created() {
    OrgServices.getOrgs()
    .then(response => {
      this.orgs = response.data
    })
    .catch(error => {
      console.log('There was an error:', error.response)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>