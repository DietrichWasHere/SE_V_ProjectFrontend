<template>
<div>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mb-4" icon = circle color="grey darken-1">    
                              <img 
                                :src="`${picture}`"
                                alt=""> 
                        </v-avatar>
                    </v-flex>
                    <v-btn v-if='this.isStudent' @click.native="toTutorContract">
                        Become a Tutor
                    </v-btn>
                    <v-text-field
                        v-model="userData.fName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="userData.lName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        disabled
                        v-model="userData.email"
                        label="Email Address"></v-text-field>
                    <v-text-field
                        v-model="userData.phone"
                        label="Phone Number"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" :loading="loading" @click.native="editUser">
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
                loading: false,
                user: {
                },
                student: {},
                tutor: {},
                picture : "", 
                userData: {
                },
                isStudent: false
                // avatar: image
            }
        },
        created () {
            // var userData = window.localStorage.getItem('user').user;
            // console.log(userData);
            var that = this;
            UserServices.getCurrentUser()
                .then(response => {
                        //console.log("!")
                        //console.log(response);
                        this.user = response.data.user
                        console.log(this.user); 
                        UserServices.getUser(this.user.id)
                            .then(response => {
                                that.userData = response.data[0]
                                that.picture = response.data[0].picture;
                            })
                            .catch(error => {
                                console.log('There was an error:', error.response)
                            })
                        if (this.user.user.roles[0].role == 'student') this.isStudent = true;
                    })
                .catch(error => {
                    console.log('There was an error:', error.response)
                })
        },
        methods: {
            editUser() {
                UserServices.updateUser(this.userData)
                    /*.then(response => {
                        console.log("!")
                        //console.log(response);
                        this.user = response.data.user
                        //console.log(this.user.id);
                    })*/
                    .catch(error => {
                        console.log('There was an error:', error.response)
                    }) 
            },
            toTutorContract() {
                this.$router.push("/"+ this.orgName + "/tutorContract"); 
            }        
        }
    }
</script>