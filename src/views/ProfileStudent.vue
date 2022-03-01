<template>
<div>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mb-4" icon = circle color="grey darken-1">
                              <img src="@/assets/eddiegomez.jpg" alt="">
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
                      <v-text-field>
                        Classification: Student
                      </v-text-field>
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
                    firstName: 'Eddie',
                    lastName: 'Gomez',
                    contactEmail: 'Student@OC.edu',
                    
                    avatar: <img src="@/assets/eddiegomez.jpg" alt=""></img>

                },
            }
        }
    }
</script>