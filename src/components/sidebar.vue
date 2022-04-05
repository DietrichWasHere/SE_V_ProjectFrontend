<template>
  <div>
    <v-app-bar color="deep-purple accent-4"  dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title > {{ $route.meta.title }} </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon v-on:click = "logout()">
        <v-icon>mdi-logout</v-icon>
        
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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
          <v-list-item  to="/">
            <v-list-item-title >Profile</v-list-item-title>
          </v-list-item>

          <v-list-item  to="/inbox">
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item>

          <v-list-item  to="/calendar">
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item>

          <v-list-item  to="/contract">
            <v-list-item-title>Contract</v-list-item-title>
          </v-list-item>
          
          <v-list-item  to="/users">
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  
  </div>
</template>

<script>
  
  // import LogoutButton from '../components/logoutButton.vue'
  
  export default {
//  components: {LogoutButton },
      props: {
    title : String,
  },
    data: () => ({
      drawer: false,
      group: null,
  
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },

    methods: {
      logout() {
      this.requestUser = window.localStorage.clear('token') 
      this.requestUser = window.localStorage.clear('user') 
      },
    },
  }
</script>