<template>
<div>
    <v-container class="setsize">
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
                        <v-combobox      
                        v-model="selectedItem"
                        :items="items"
                        label="Select Subjects"
                        item-text="name"

                        multiple
                        chips
                        >
                        </v-combobox>
                            <v-btn color="primary" :loading="loading" @click.native="editSubject">
                          <v-icon
                            right
                            >
                            mdi-checkbox-marked-circle
                            </v-icon>
                    </v-btn>
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
    import SubjectServices from '@/services/SubjectServices.js';
    import TutorSubjectServices from '@/services/TutorSubjectServices.js';

    export default {
        pageTitle: 'MyProfile',
        props: ['orgName'],
        data () {
            return {
                items: [],
                itemsID: [],
                selectedItem: [],
                ideas: [],
                loading: false,
                user: {
                },
                student: {},
                tutor: {},
                picture : "", 
                userData: {
                },
                isStudent: false,
                // avatar: image
                tutorSubject : [],
            }
        },
        created () {
            // var userData = window.localStorage.getItem('user').user;
            // console.log(userData);
            SubjectServices.getSubjects()
            .then(response => {
                console.log("here", response.data)
                for(var x = 0; x < response.data.length; x++)
                {
                    this.items.push({name: response.data[x].subjectName, id: response.data[x].subjectID});
                }

            })
            .catch(error => {
                    console.log('There was an error getting subjects:', error.response)
            })
            
            var that = this;
            UserServices.getCurrentUser()
                .then(response => {
                        //console.log("!")
                        //console.log(response);
                        this.user = response.data.user
                       // console.log(this.user); 
                        UserServices.getUser(this.user.id)
                            .then(response => {
                                that.userData = response.data[0]
                                that.picture = response.data[0].picture;
                            })
                            .catch(error => {
                                console.log('There was an error:', error.response)
                            })
                      //  console.log("hi2");
                       // console.log(this.user.roles[0].role);
                        if (this.user.roles[0].role == 'student') this.isStudent = true;
                    })
                .catch(error => {
                    console.log('There was an error:', error.response)
                })
        },
        methods: {

            editSubject(){
                for(var x = 0; x < this.selectedItem.length; x++){
                   
                    this.tutorSubject.push({
                        tutorID: this.userData.userID,
                        subjectID:  this.selectedItem[x].id,
                        maxLevel: '3'
                    })
                    TutorSubjectServices.addSubject(this.tutorSubject[x])
                    .then(response =>{
                        console.log(response, "yey")
                    })
                }
            },

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

<style scoped>
.setsize{
  
  height: 100%;
  width: 70%;
}
</style>