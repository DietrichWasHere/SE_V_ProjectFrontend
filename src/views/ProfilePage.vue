<template>
<div>

    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mb-4" icon = circle color="grey darken-1">
                              <img src="@/assets/dietrich.jpg" alt="">
                        </v-avatar>
                    </v-flex>
                    <v-text-field
                        v-model="user.fName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="user.lName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        v-model="user.email"
                        label="Email Address"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" :loading="loading" @click.native="update">
                        
                        Save Changes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</div>
</template>

<script>
  import UserServices from '@/services/UserServices.js';

    export default {
        pageTitle: 'MyProfile',
        data () {
            return {
                user:[]
                ,
                loading: false,
             /*   form: {
                    firstName: 'Dietrich',
                    lastName: 'Veres',
                    contactEmail: 'Tutor@OC.edu',
                    avatar: <img src="@/assets/eddiegomez.jpg" alt=""></img>
                },*/
            }
        }
        ,
        created () {
        UserServices.getUser(5)
        .then(response => {
          console.log(response);
          
          this.user = response.data
          console.log(this.user.fName);
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    }
</script>