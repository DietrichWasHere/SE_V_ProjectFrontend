<template>
  <!--<div id="app">-->
  <v-app >
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        elevation="4"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <!--<template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>-->
  
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
   
        <v-app-bar-title >Profile</v-app-bar-title>
  
        <v-spacer></v-spacer>    <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>


        <drop-down-menu v-model="drawer"/>

    



        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>Edit</v-tab>
            <v-tab>Appointments</v-tab>
            <v-tab>Messages</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="80%"
      >
        <v-container class = "description">

          <br><br><br><br><br><br><br>
          <br><br>

          <h>User: </h>
          <br> <h>First Name: </h>
          <br><h>Last Name: </h>
          <br> <h>Email: </h>
          <br> <h>Phone Number: </h>

          <social_login/>
        </v-container>

        

      </v-sheet>
    </v-card>
  </v-app>
<!--</div>-->
</template>

<script>
//import Profile from './components/Profile';
import social_login from './components/SocialLogin.vue'
import DropDownMenu from './components/DropDownMenu.vue'

export default {
  name: 'App',

  components: {
    social_login,
    DropDownMenu
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