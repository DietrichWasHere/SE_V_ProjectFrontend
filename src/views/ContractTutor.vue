<template>
<v-container class = "setsize"> 
    <h2>{{this.org.orgName}} Tutor Sign Up</h2>
    
    
    <p>
      {{this.org.tutorAgreement}}
    </p>

    <p>
        I certify that I have read the information contained in this contract.
    </p>

    <br>
    <p v-if='this.nameCheck'>The name typed in was not correct!</p>
    <v-container fill-width fluid>
        <v-row justify="center"><v-col lg="3" >Tutor Signature<v-text-field v-model="studentName" :rules="nameRules" :counter="30" label="First name Last Name" required></v-text-field> </v-col>
        
        <v-col lg="3">Date:
                <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                    <template v-slot:activator="{ attrs }">
                      <!--https://stackoverflow.com/questions/57524110/what-does-v-on-syntax-mean-in-vuejs-->
                        <v-text-field v-model="dateFormatted" persistent-hint prepend-icon="mdi-calendar" 
                        v-bind="attrs" @blur="date = parseDate(dateFormatted)">
                        </v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title  @input="menu1 = false" >
                    </v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
    </v-container>
    <br>
    <v-btn color="primary" elevation="3" plain rounded x-large @click.native="submitContract">
        Next
    </v-btn>
</v-container>
</template>

<script>
  import OrgServices from '@/services/OrgServices.js'
  import UserServices from '@/services/UserServices.js';
  import TutorServices from '@/services/TutorServices.js';


  export default {
    props: ['orgID'],
    data: vm => ({
      org: '',
      studentName: '',
      user: '',
      userData: '',
      nameCheck: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),
    created () {
      OrgServices.getOrganization(this.orgID)
        .then(response => {
          //console.log(response.data)
          this.org = response.data[0];
          //console.log("!")
          //console.log(this.org)
        })
        .catch(error => {
            console.log('There was an error:', error.response)
        })
      UserServices.getCurrentUser()
        .then(response => {
                this.user = response.data.user
                console.log(this.user); 
                UserServices.getUser(this.user.id)
                    .then(response => {
                        this.userData = response.data[0]
                        console.log(this.userData);
                    })
                    .catch(error => {
                        console.log('There was an error:', error.response)
                    })
            })
        .catch(error => {
            console.log('There was an error:', error.response)
        })
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
   /* watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },*/
    methods: {
      submitContract() {
        var tutor = {
          userID: this.userData.userID,
          orgID: this.org.orgID,
          dateAgreementSigned: this.date
        };
        console.log(this.studentName);
        console.log(this.userData.fName + ' ' + this.userData.lName);
        console.log(this.studentName == (this.userData.fName + ' ' + this.userData.lName));
        if (this.studentName == (this.userData.fName + ' ' + this.userData.lName)) {
          TutorServices.addTutor(tutor)
            .then(response => {
              console.log(response.data);
              this.$router.push('/calendar');
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })
        }
        else this.nameCheck = true;
      },
      formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>
<style scoped>

.setsize{
    width : 70%;

}


</style>