<template>
<div>

  <login-page/>

</div>
</template>

<script>
//import Profile from './components/Profile';
//import social_login from './components/SocialLogin.vue'
import LoginPage from './views/LoginPage.vue'

export default {
  name: 'App',

  components: {
    
    LoginPage,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
   
  watch: {
      group () {
        this.drawer = false
      }
  }
};
</script>

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.description {
  min-height: 1000px;
  font-size: 20px;
  font-display: verdana;
  color: grey;
  line-height: 26pt;
 
}
</style>