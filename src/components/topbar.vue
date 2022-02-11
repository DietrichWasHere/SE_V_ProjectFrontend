<template>
    <v-app >
    <v-card>
     
      <v-app-bar 
        absolute
        color="#6A76AB"
        dark
        scroll-target="#scrolling-techniques-4"
        shrink-on-scroll
        prominent
        elevation="4"
        fade-img-on-scroll
       
      >
        <!--<template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>-->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
     
  
     
     <v-app-bar-title  class="overflowtitle"> {{title}} </v-app-bar-title>

      <template v-slot:extension>
      <v-tabs  align-with-title>
        <v-tab>Edit</v-tab>
        <v-tab>Appointments</v-tab>
        <v-tab>Messages</v-tab>
      </v-tabs>
      </template>

        <v-spacer>                                                      
          </v-spacer>   
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

      </v-app-bar>

       <!--<AdminCrudMenu/>-->

      
      <v-sheet
        id="scrolling-techniques-4"
        class="overflow-y-auto"
        max-height="80%"
      >
        
      <v-container class = "description">

          <br><br><br><br><br><br><br>
          <br><br>
          

     <!--  <social_login/>-->
        </v-container>

        
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
          <v-list-item>
            <v-list-item-title>Tab</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Tab</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Tab</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Tab</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

      </v-sheet>
    </v-card>
  </v-app>
</template>


<script>
export default {
  name: 'TopBar',
  props: {
    title : String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>