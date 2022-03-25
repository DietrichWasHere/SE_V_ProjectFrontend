<template>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>

                <v-text-field 
                        v-model="appointments.studentcomment"
                        label="Notes for the tutor (Specify what you need help with and other details you may want the tutor to know)"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" :loading="loading" @click.native="update" to='/contractstudent'>     
                        Next
                    </v-btn>
                    <v-btn text color="red" :loading="loading" @click.native="update">     
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data () {
            return {
 
            }
        }
    }
</script>