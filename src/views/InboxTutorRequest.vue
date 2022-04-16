<template>
  <v-app id="inspire">


    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="deep-purple darken-3"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64">     
          <img 
         :src="`${picture}`"
          alt="">
        </v-avatar>

        <div><p style="color:white; font-size:30px;">
             Notifications</p></div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

    
              <v-list two-line>
                <!--<template v-for="request in requests">-->
                  <v-list-item
                    v-for="request in requests"
                    :key="request.requestID"
                   
                  >
                    <v-list-item-avatar        
                    class="mb-4"
                    color="grey darken-1"
                    size="64">     
                      <img 
                    :src="`${request.picture}`"
                      alt="">
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ request.fName }} {{ request.lName }} is requesting to be a tutor</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ request.email }} <br>
                        {{ request.phone}}
                      </v-list-item-subtitle>
                          <div>
                        <v-btn
                         text
                          color="blue lighten-2"
                            @click="accept(request)"

                        >
                        Accept&nbsp; 
                        <br>
                        <v-icon color="blue lighten-1">mdi-thumb-up</v-icon>
                        </v-btn>
                        <v-btn
                        text
                          color="grey"
                          @click="deny(request)"
                        >                  
                        Deny&nbsp;
                        <br>
                        <v-icon color="grey lighten-1">mdi-thumb-down</v-icon>
                        </v-btn>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
               <!--</template>-->
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import TutorServices from '@/services/TutorServices.js';
import UserServices from '@/services/UserServices.js';

export default {
    name: 'mssgInbox',
     props: {
    msg: String
  },

    data: () => ({
      cards: ['Today'/*, 'Yesterday'*/],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down'],
      ],
      picture: "",
      requests:[],
      rawRequests:[],
      studentName:[],
      userInfo: [],
     // currentUser: [],
    }),
  
    created () {

        var that = this;
        UserServices.getCurrentUser().then(function(result) {
            UserServices.getUser(result.data.user.id).then(function(response) {
            that.picture = response.data[0].picture;
            console.log(that.picture);
         })
           // this.currentUser = result;
            console.log(result.data.user.roles[0].org);
            TutorServices.getTutors(result.data.user.roles[0].org)
            .then(response => {
                that.rawRequests = response.data
                for (let x = 0; x < that.rawRequests.length; x++)
                {

                    if(that.rawRequests[x].verified == 0)
                    {
                        console.log("made it here")
                        

                            that.requests.push({
                            userID : that.rawRequests[x].userID,
                            orgID : that.rawRequests[x].orgID,
                            verified : that.rawRequests[x].verified,
                            dateAgreementSigned: that.rawRequests[x].dateAgreementSigned, 
                            picture : that.rawRequests[x].picture,
                            fName: that.rawRequests[x].fName,
                            lName: that.rawRequests[x].lName,
                            email: that.rawRequests[x].email,
                            phone: that.rawRequests[x].phone

                            })

                        
                    //  UserServices.getUser(this.rawRequests[x].studentID)
                    //   .then(response => {

                }
                //  })
          /*         .catch(error => {
            
            console.log('There was an error: in getting user', error.response)
            })*/
            }
        
          })
          .catch(error => {
            
            console.log('There was an error: in getting tutpr', error.response)
          })

        })

 
      },
        methods: {
      
        accept(r) {
            TutorServices.updateTutor(r.userID, r.orgID, {verified:'1'})
            .then(response => {         

                console.log(response);
            })
            .catch(error => {
                
                console.log('There was an error: updating', error.response)
            });
       },
       deny(r)
      {
            
        TutorServices.deleteTutor( r.orgID, r.userID)
            .then(response => {  
                console.log('Worked', response)
            })    
                .catch(error => {
    
            console.log('There was an error: updating', error.response)
            });
       },
    }
  
      }
    
    



// wireframe credit : https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/wireframes/inbox.vue
</script>