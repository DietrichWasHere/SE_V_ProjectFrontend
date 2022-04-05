<template>
    <div>
        <v-system-bar color="deep-purple darken-3" height="55">
        <p style="color:white; font-size:30px; top: 50px"></p>
        <button
        style="color:white; font-size: 10px; left:500px"
    id="logout-button"
    @click.prevent="handleLogout"
    :disabled="isLoggedOut"
  >
    </div>
</template>

<script>
export default {

    data() {
    return {
      requestUser: null,              
    };
  },
  created() {
    this.setRequestUser();        
  },  
  methods: {
    logout() {
      this.requestUser = window.localStorage.clear('token') ;
      this.requestUser = window.localStorage.clear('user') ;
      window.location.href = '/';
        }
    },

}
</script>