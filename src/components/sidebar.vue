<template>
  <div>
    <v-app-bar color="deep-purple accent-4"  dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title > {{orgName}} {{ $route.meta.title }} </v-app-bar-title>

      <v-spacer></v-spacer>

  

      <v-btn v-if="loggedIn()" icon v-on:click = "logout()">
        <v-icon>mdi-logout</v-icon>
        
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item  :to="'/' + this.orgID + '/profile'">
            <v-list-item-title >Profile</v-list-item-title>
          </v-list-item>


          <v-list-item  v-if= "role === 'tutor' || role === 'supervisor'" :to="'/' + this.orgID + '/inbox'">
            <v-list-item-title>Notifications 
          </v-list-item-title>
          </v-list-item>
          <v-list-item   v-if= "role === 'tutor'" :to="'/' + this.orgID + '/calendar'" >
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item>

            <v-list-item  v-if= "role === 'student' || role === 'supervisor'" :to="'/' + this.orgID + '/calendars'">
            <v-list-item-title>Calendars</v-list-item-title>
          </v-list-item>

          <v-list-item  v-if= "role === 'supervisor'" :to="'/' + this.orgID + '/users'">
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  
  </div>
</template>

<script>
  
import OrgServices from '../services/OrgServices'
import UserServices from '@/services/UserServices.js';

  export default {
//  components: {LogoutButton },
      props: ['orgID'],
    data: () => ({
      drawer: false,
      group: null,
      orgName: '',
      role : ''
    }),
    async created() {
      this.orgName = (await OrgServices.getOrganizationByName(this.orgID)).data[0].orgName;
      console.log(this.orgName)
      this.role = await this.getRole();
      console.log(this.role);
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
      loggedIn() {return window.localStorage.token || window.localStorage.user;},
      logout() {
      this.requestUser = window.localStorage.clear('token') 

      this.requestUser = window.localStorage.clear('user')
      this.$router.push('/' + this.orgID)
      },
      async getRole(){
        return (await UserServices.getCurrentUser()).data.user.roles[0].role;

      }
    },
  }
</script>