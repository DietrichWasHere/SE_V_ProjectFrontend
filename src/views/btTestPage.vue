<template>
    <v-app>  
      <v-card-title>
        <h1>Login Page</h1>
        <social-login/>
      </v-card-title>
   </v-app>
 
</template>

<script>
import SocialLogin from '@/components/SocialLogin.vue'



export default {
  components: { SocialLogin },
  name: 'testPage',
  component: SocialLogin,
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>