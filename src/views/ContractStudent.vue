<template>
<v-container class = "setsize"> 
    <h2>{{this.org[0].orgName}} Student Sign Up</h2>
    
    
    <p>
      {{this.org[0].studentAgreement}}
    </p>

    <p>
        I certify that my tutor and I have read and discussed the information contained in this contract. I
        agree to work cooperatively with this tutor to achieve academic success. I understand that 
        tutoring may be suspended or discontinued if it is determined that I am not making an effort to
        benefit from such services.
    </p>

    <br>
    <v-container fill-width fluid>
        <v-row justify="center"><v-col lg="3" >Student Signature<v-text-field v-model="studentName" :rules="nameRules" :counter="30" label="First name Last Name" required></v-text-field> </v-col>
        
        <v-col lg="3">Date:
                <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="dateFormatted"  hint="MM/DD/YYYY format" persistent-hint prepend-icon="mdi-calendar" 
                        v-bind="attrs" @blur="date = parseDate(dateFormatted)" v-on="on">
                        </v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title  @input="menu1 = false" >
                    </v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
    </v-container>
    <br>
    <p>
        I certify that my student and I have read and discussed the information contained in this 
        contract. I agree to work cooperatively with this stuent to achieve academic success.
    </p>

    <v-btn color="primary" elevation="3" plain rounded x-large to="/calendarstudent">
        Next
    </v-btn>
</v-container>
</template>

<script>
  import OrgServices from '@/services/OrgServices.js'

  export default {
    props: ['orgID'],
    data: vm => ({
      org: '',
      studentName: '',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),
    created () {
      OrgServices.getOrganization(this.orgID)
        .then(response => {
          console.log(response.data)
          this.org = response.data;
          console.log(this.org)
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