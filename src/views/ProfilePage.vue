<template>
<div>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mb-4" icon = circle color="grey darken-1">     
                        </v-avatar>
                    </v-flex>
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
                userData: {
                }
                // avatar: image
            }
        },
        created () {
            // var userData = window.localStorage.getItem('user').user;
            // console.log(userData);
            UserServices.getCurrentUser()
                .then(response => {
                        //console.log("!")
                        //console.log(response);
                        this.user = response.data.user
                        console.log(this.user); 
                        UserServices.getUser(this.user.id)
                            .then(response => {
                                this.userData = response.data[0]
                            })
                            .catch(error => {
                                console.log('There was an error:', error.response)
                            })
                    })
                .catch(error => {
                    console.log('There was an error:', error.response)
                })
        },
        methods: {
            editUser() {
                UserServices.updateUser(this.user.id, this.userData)
                    /*.then(response => {
                        console.log("!")
                        //console.log(response);
                        this.user = response.data.user
                        //console.log(this.user.id);
                    })*/
                    .catch(error => {
                        console.log('There was an error:', error.response)
                    }) 
            }         
        }
    }
</script>