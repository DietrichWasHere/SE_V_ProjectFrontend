<template>
<div>
    <v-system-bar color="deep-purple darken-3" height="55">
        <p style="color:white; font-size:30px; top: 50px">User Profile</p>
    </v-system-bar>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mb-4" icon = circle color="grey darken-1">     
                        </v-avatar>
                    </v-flex>
                    <v-text-field
                        v-model="user.firstName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="user.lastName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        v-model="user.contactEmail"
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
                loading: false,
                user: {
                },
                userData: {
                }
                // avatar: image
            }
        },
        async created () {
            // var userData = window.localStorage.getItem('user').user;
            // console.log(userData);
            await UserServices.getCurrentUser()
                .then(response => {
                    console.log("!")
                    console.log(response);
                    this.user = response.data.user
                    console.log(this.user.id);
                })
                .catch(error => {
                    console.log('There was an error:', error.response)
                })
            await UserServices.getUser(this.user.id)
                .then(response => {
                    console.log(response);
                    this.userData = response.data
                    console.log(this.userData);
                })
                .catch(error => {
                    console.log('There was an error:', error.response)
                })
        }
    }
</script>