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
                      <v-list-item-title>Accept Tutor Request with {{ request.name }}?</v-list-item-title>

                      <v-list-item-subtitle>
                        This is a place where the notes the student wrote for the tutor wil be displayed.
                      </v-list-item-subtitle>
                          <div>
                        <v-btn
                          class="ma-2"
                          text
                          icon
                          color="blue lighten-2"
                                      @click="accept(request)"

                        >
                          <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>

                        <v-btn
                          class="ma-2"
                          text
                          icon
                          color="grey lighten-2"
                          @click="deny(request)"
                        >
                          <v-icon>mdi-thumb-down</v-icon>
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

import ApptRequestServices from '@/services/ApptRequestServices.js';
import UserServices from '@/services/UserServices.js';
import AppointmentServices from '@/services/AppointmentServices.js';
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
      studentName:[]
    }),
  
    created () {
        var that = this;
        UserServices.getCurrentUser().then(function(result) {
           console.log(result)
          
          UserServices.getUser(result.data.user.id)
          .then(response => {
            console.log(response);
            that.picture = response.data[0].picture;
            console.log(this.picture);
          })
          .catch(error => {
            console.log('There was an error: getting user', error.response)
          })

        })

      ApptRequestServices.getRequests()
        .then(response => {
            
            this.rawRequests= response.data
            for (let x = 0; x < this.rawRequests.length; x++)
            {
              console.log( this.rawRequests[x].LName);
              //  UserServices.getUser(this.rawRequests[x].studentID)
             //   .then(response => {
                this.requests.push({
                studentID : this.rawRequests[x].studentID,
                appointmentID : this.rawRequests[x].appointmentID,
                subjectID : this.rawRequests[x].subjectID,
                reqDate: this.rawRequests[x].reqDate, 
                reqStatus : this.rawRequests[x].reqStatus,
                name :  this.rawRequests[x].fName + " " + this.rawRequests[x].lName,
                picture : this.rawRequests[x].picture
              })
                //  })
          /*         .catch(error => {
            
            console.log('There was an error: in getting user', error.response)
            })*/
            }
            console.log(this.rawRequests[1].studentID);

        
          })
          .catch(error => {
            
            console.log('There was an error: in getting request', error.response)
          })
        
      },
        methods: {
      
         accept(r) {
            AppointmentServices.updateAppointment(r.appointmentID, {color:'green'})
            .then(response => {         
              ApptRequestServices.deleteRequest(r.studentID, r.appointmentID)
                    .then(response => {  
                      console.log('Worked', response)
                         window.location.href = '/calendar'
                    })    
                      .catch(error => {
          
                    console.log('There was an error: updating', error.response)
                  });
     

              console.log(response);
            })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
            });


         
       },
       deny(r)
      {
            AppointmentServices.updateAppointment(r.appointmentID, {color:'red'})
            .then(response => {   
                ApptRequestServices.deleteRequest(r.studentID, r.appointmentID)
                    .then(response => {  
                      console.log('Worked', response)
                         window.location.href = '/calendar'
                    })    
                      .catch(error => {
          
                    console.log('There was an error: updating', error.response)
                  });
     
         
              console.log(response);

            })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
            });
         
       },

  
      }
    }
    



// wireframe credit : https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/wireframes/inbox.vue
</script>