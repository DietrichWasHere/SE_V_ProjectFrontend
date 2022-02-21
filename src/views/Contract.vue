<template>
<v-container class = "setsize"> 
    <h1>Tutoring Agreement Contract</h1><br>
    <h2>Student Responsibilities:</h2>
    <ul>
        <li>I will be on time, if I am 15 minutes late, the tutor is not obliged to wait for me and
            I will be considered a "no show". After the 1st "no show" I understand I will be 
            charged $10 per additional "no show".</li>
        <li>If I must miss a session I will contact my tutor at least 6 hours prior to the 
            appointed time.</li>
        <li>I will be prepared. Assignments will be completed as fully as possible and I will 
            have questions ready to ask.</li>
        <li>I will attend class regularly.</li>
        <li>I will not expect my tutor to "know everything"</li>
        <li>When my tutor refers me to my professor, I will follow through.</li>
    </ul>  
    <br><h2>Tutor Responsibilities:</h2>
    <ul>
        <li>I will be on time.
        </li>
        <li>If I must cancel a session I will contact my students as far in advance as possible
            (no less than 6 hours before appointed meeting time).
        </li>
        <li>I will be prepared to answer most student questions
        </li>
        <li>I will admit if I don't know the solution or answer. I will try to find the 
            information. I will refer the student to the professor when needed.  
        </li>
        <li>I will provide opportunities and assist in practice problems (but not graded work)
        </li>
        
    </ul>
    <br><h2>Tutoring will be stopped for the follwing reasons:</h2>
    <ul>
        <li>When the student misses 3 tutoring sessions without above mentioned
            notification.
        </li>
        <li>When tutoring is not helping the students progress
        </li>
        <li>If/When the tutor and student both agree that the student is able to make
            satisfactory progress working independently.
        </li>
    </ul>
    <br>
    <p>
        I certify that my tutor and I have read and discussed the information contained in this contract. I
        agree to work cooperatively with this tutor to achieve academic success. I understand that 
        tutoring may be suspended or discontinued if it is determined that I am not making an effort to
        benefit from such services.
    </p>

    <br>
    <v-container fill-width fluid>
        <v-row justify="center"><v-col lg="3" >Student Signature<v-text-field v-model="name" :rules="nameRules" :counter="30" label="First name Last Name" required></v-text-field> </v-col>
        
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

    <br>
    <v-container fill-width fluid>
        <v-row justify="center"><v-col lg="3" >Tutor Signature<v-text-field v-model="name" :rules="nameRules" :counter="30" label="First name Last Name" required></v-text-field> </v-col>
        
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
</v-container>
</template>

<script>
  export default {
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),
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
    width : 50%;

}


</style>