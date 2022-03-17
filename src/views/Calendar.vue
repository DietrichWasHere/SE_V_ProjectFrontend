<template>
<v-container class="setsize" >
  <v-row >
    <v-col>
      <v-sheet>
        <v-toolbar flat>
          
          <v-btn 
          outlined
            class="mr-4"
            color="grey darken-2"
            @click="addItem()">
            Add
          </v-btn>
          
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    
          <v-dialog v-model="dialog" max-width="500px">
          <v-card>
              <v-container>
                <v-row>
                  <!-- <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.tutorID"
                      label="Tutor ID"
                    ></v-text-field>
                  </v-col> 
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.orgID"
                      label="Organization"
                    ></v-text-field>
                  </v-col> -->
                  <v-col cols="12" sm="6" md="4">
                    <v-container fill-width fluid>
                      <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="appointment.startDateTime"  hint="MM/DD/YYYY format" persistent-hint prepend-icon="mdi-calendar" 
                          v-bind="attrs" @blur="date = parseDate(appointment.startDateTime)" v-on="on" >
                            
                          </v-text-field>
                        </template>
                          <v-date-picker v-model="date" no-title  @input="menu1 = false" >
                        </v-date-picker>
                      </v-menu>
                    </v-container>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-container fill-width fluid>
                      <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="appointment.startDateTime"  hint="MM/DD/YYYY format" persistent-hint prepend-icon="mdi-calendar" 
                          v-bind="attrs" @blur="date = parseDate(appointment.startDateTime)" v-on="on" >
                            
                          </v-text-field>
                        </template>
                          <v-date-picker v-model="date" no-title  @input="menu2 = false" >
                        </v-date-picker>
                      </v-menu>
                    </v-container>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.locationID"                    
                      label="Location"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.studentID"
                      label="Student"
                    ></v-text-field>
                  </v-col>
                   <!--<v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.tutorRating"                   
                      label="Tutor Rating"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.tutorComments"                    
                      label="Tutor Comments"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.studentRating"                    
                      label="Student Rating"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.studentComments"                    
                      label="Student Comments"
                    ></v-text-field>
                  </v-col>-->
                </v-row>
              </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
          <!--n<v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="add"
          >
            Add
          </v-btn>-->

          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev" >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>


          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
       
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
  

    
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="red" @click="selectedOpen = false">
                Cancel Appointment
              </v-btn>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Exit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import AppointmentServices from "@/services/AppointmentServices.js";
  import UserServices from '@/services/UserServices.js';


  export default {
    data: vm=> ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
     // dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      dialog: false,
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      appointment: {
        tutorID: "",      
        orgID: "",
        startDateTime: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        endDateTime: "",
        locationID: "",
        studentID: "",
        tutorRating: "",
        tutorComments: "",
        studentRating: "",
        studentComments: "",
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      rawEvents: [],

      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
        computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
       watch: {
      dialog (val) {
        val || this.close()
       }},
    mounted () {
      this.$refs.calendar.checkChange()
    },
    created () {
          
          this.appointment.tutorID = 5,      
          this.appointment.orgID = 10,
          this.appointment.startDateTime = "2022-03-20 02:22:22",
          this.appointmentendDateTime = "2022-03-20 03:22:22",
          this.appointment.locationID = 5,
          this.appointment.studentID = 1,
          this.appointment.tutorRating = 5,
          this.appointment.tutorComments = "she did well",
          this.appointment.studentRating = 5,
          this.appointment.studentComments = "she did not do well"
          
          const events = []
            events.push({
            name: 'Appointment Eddie Gomez',
            start: this.appointment.startDateTime,
            end: this.appointment.endDateTime,
            color: 'blue',
          })
        

        AppointmentServices.getAppointments(10)
        .then(response => {
          console.log(response);
          this.rawEvents = response.data
          console.log(this.rawEvents);

          for (let x = 0; x < this.rawEvents.length; x++)
         {
          var startDate = new Date(this.rawEvents[x].startDateTime);
          var hrs = ((startDate.getHours() > 12) ? startDate.getHours()-12 : startDate.getHours());
          var formattedStartDate = (startDate.getFullYear()   + "-" + (startDate.getMonth() +1) + "-" + startDate.getDate()  +  " " + hrs +  ":" + startDate.getMinutes());
          var endDate = new Date(this.rawEvents[x].endDateTime);
          hrs = ((endDate.getHours() > 12) ? endDate.getHours()-12 : endDate.getHours());
          var formattedEndDate = (endDate.getFullYear()  + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate() +  " " + hrs +  ":" + endDate.getMinutes());

         // console.log('HI', formattedStartDate, formattedEndDate)

            events.push({
            name: String(UserServices.getUser(this.rawEvents[x].studentID)),
            start: formattedStartDate,
            end: formattedEndDate,
            color: 'blue',
            })
          }
           this.events = events;
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })

    },
    methods: {
      
       initialize() {
        AppointmentServices.getAppointments()
        .then(response => {
          console.log(response);
          this.rawEvents = response.data
          console.log(this.rawEvents);
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
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
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
       addItem () {
      //  this.editedIndex = this.admins.indexOf(item)
      //  this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
        close () {
      
        this.dialog = false
 
      },
      save () {
        this.add ()
      },
      add (){
          this.appointment.tutorID = 5,      
          this.appointment.orgID = 10,
          this.appointment.startDateTime = "2022-03-22 02:22:22",
          this.appointmentendDateTime = "2022-03-22 03:22:22",
          this.appointment.locationID = 5,
          this.appointment.studentID = 1,
          this.appointment.tutorRating = 5,
          this.appointment.tutorComments = "she did well",
          this.appointment.studentRating =5,
          this.appointment.studentComments = "she did not do well"
          
          const allDay = this.rnd(0, 3) === 0
          const events = []

            events.push({
            name: 'Appointment  Calculus 1  Eddie Gomez',
            start: '2022-03-22 02:22:22',
            end: '2022-03-22 03:22:22',
            color: 'orange',
           timed: !allDay,
          })
        
        this.events = events;

        AppointmentServices.addAppointment(this.appointment);
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

      //  nativeEvent.stopPropagation()
      },
      /*updateRange () {
        const events = []

        //const min = new Date(`${start.date}T00:00:00`)
       // const max = new Date(`${end.date}T23:59:59`)
      //  const days = (max.getTime() - min.getTime()) / 86400000
       // const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < 1; i++) {
          const allDay = this.rnd(0, 3) === 0
         // const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = '2022-03-02 14:30:00';
         // const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = '2022-03-02 15:30:00';

          events.push({
            name: 'Appointment  Calculus 1  Eddie Gomez',
            start: first,
            end: second,
            color: 'orange',
            timed: !allDay,
          })
        }
        this.events = events
      },*/
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
     },
    },
  }
</script>
<style scoped>
.setsize{
  
  height: 50%;
  width: 50%;
}
</style>