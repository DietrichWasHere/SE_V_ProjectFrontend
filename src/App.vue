<template>

  <div >
  <admin-crud-menu/>
 <router-view/>
</div>

</template>

<script>
import AdminCrudMenu from './views/AdminCrudMenu.vue';
//import Profile from './components/Profile';

//import DropDownMenu from './components/DropDownMenu.vue'

//import social_login from './components/SocialLogin.vue'




export default {
  name: 'App',

  components: {

   // social_login,
  //  DropDownMenu

  //  social_login,
    //Profile,
    AdminCrudMenu

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

.title2{
  margin-top: -40px;
  font-size: 50px;
}
.menu{
 
  margin-left: 200px;
  margin-top: -70px;
}
.overflowtitle {
  text-overflow: show;
  flex-grow: 50;
  width: 200px !important;  
  color: var(--text-reverse);
  
}
</style>