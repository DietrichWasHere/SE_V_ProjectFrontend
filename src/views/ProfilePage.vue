<template>
<div>
    <v-system-bar color="deep-purple darken-3" height="55">
        <p style="color:white; font-size:30px; top: 50px">User Profile</p>
        <button
        style="color:white; font-size: 10px; left:500px"
    id="logout-button"
    @click.prevent="handleLogout"
    :disabled="isLoggedOut"
  >
    Log out
  </button>
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
                        v-model="form.firstName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="form.lastName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        v-model="form.contactEmail"
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

    export default {
        pageTitle: 'MyProfile',
        data () {
            return {
                loading: false,
                form: {
                    firstName: 'Student',
                    lastName: 'OC',
                    contactEmail: 'Student@OC.edu',
                    avatar: 'MALE_CAUCASIAN_BLACK_BEARD'
                },
            }
        }
    }
</script>