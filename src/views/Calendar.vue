<template>
<v-container class="setsize" >
  <v-row >
    <v-col>
      <v-sheet>
        <v-toolbar>
               <v-btn    
          color="primary"
          elevation="2"         
          small
            @click="filter()">
                Filter 
        </v-btn> 
          <v-btn 
          
            class="mr-4"
            @click="addItem()">
            Add
          </v-btn>
           <v-select
            v-model="color"
            :items="colors"
            colors
            label="Status"
            multiple
          >
           </v-select>
     
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
                      <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="date"  hint="MM/DD/YYYY format" persistent-hint prepend-icon="mdi-calendar" 
                          v-bind="attrs" @blur="date = parseDate(appointment.startDateTime)" v-on="on" >
                            
                          </v-text-field>
                        </template>
                          <v-date-picker v-model="date" no-title  @input="menu2 = false" >
                        </v-date-picker>
                      </v-menu>
                    </v-container>
                  </v-col>
    <v-col
      cols="11"
      sm="5"
    >
      <v-menu
        ref="menu"
        v-model="timepicker"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Picker in menu"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="timepicker"
          v-model="time"
          ampm-in-title
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
                                    


   <v-col cols="12">
            <v-slider
              v-model="duration"
              :max="120"
              thumb-label="always"
              step="10"
              label="Duration in Minutes"
              class="align-center"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="duration"
                  class="mt-0 pt-0"
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
    </v-col>


     <v-col>
        <v-select
          :items="locations" 
          label="Location"
          v-model="appointment.locationID"                    

        ></v-select>
      </v-col>

                 <!--   <v-text-field
                      label="Location" 
                    ></v-text-field>-->
    <!--               <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="appointment.studentID"
                      label="Student"
                    ></v-text-field>
                  </v-col>-->
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
              <span v-html="selectedEvent.start"></span>
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
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
            user: 0,
      timepicker: false,
      time : "12:30",
      dialog: false,
      focus: '',
      type: 'month',
      locations : ['Student Center', 'Writing Center', 'Library', 'Other'],
      duration: 60,
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
        studentID: null,
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
      allevents: [],

      color: [], 
      colors: ['grey', 'orange', 'green', 'red'],
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
           UserServices.getCurrentUser() 
              .then(response => {
            this.user =  response.data.user.id;

            console.log(response);
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })

        const events = []

        AppointmentServices.getAppointments(10)
        .then(response => {
          console.log(response);
          this.rawEvents = response.data
          console.log(this.rawEvents);

          for (let x = 0; x < this.rawEvents.length; x++)
         {
           console.log(this.rawEvents[x]);
          var startDate = new Date(this.rawEvents[x].startDateTime);
          var hrs =  startDate.getHours(); //? startDate.getHours()-12 > 12)
          var formattedStartDate = (startDate.getFullYear()   + "-" + (startDate.getMonth() +1) + "-" + startDate.getDate()  +  " " + hrs +  ":" + startDate.getMinutes() + ":" + "00");
          var endDate = new Date(this.rawEvents[x].endDateTime);
          hrs = ((endDate.getHours() > 12) ? endDate.getHours()-12 : endDate.getHours());
          var formattedEndDate = (endDate.getFullYear()  + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate() +  " " + hrs +  ":" + endDate.getMinutes()  + ":" + "00");
         
         
         
         // console.log(this.rawEvents[x].startDateTime, startDate, endDate)
         // console.log('HI', formattedStartDate, formattedEndDate)
         // UserServices.getUser(1)
          //  .then(response => {
          var tutorID = this.rawEvents[x].tutorID;

        //  console.log(this.rawEvents[x].title, '  ', this.rawEvents[x].color);
          
          if (this.user == tutorID)
           {
             if(this.color == this.rawEvents[x].color)
            {
              events.push({
              name: this.rawEvents[x].title,
              start: formattedStartDate,
              end: formattedEndDate,
              startFormat: this.rawEvents[x].startDateTime,
              endFormat: this.rawEvents[x].endDateTime,
              color: this.rawEvents[x].color,
              appointmentID: this.rawEvents[x].appointmentID,
              tutorID: this.rawEvents[x].tutorID,
              orgID: this.rawEvents[x].orgID,
              })
            }
              else if(this.color == "")
              {
                    events.push({
                    name: this.rawEvents[x].title,
                    start: formattedStartDate,
                    end: formattedEndDate,
                    startFormat: this.rawEvents[x].startDateTime,
                    endFormat: this.rawEvents[x].endDateTime,
                    color: this.rawEvents[x].color,
                    appointmentID: this.rawEvents[x].appointmentID,
                    tutorID: this.rawEvents[x].tutorID,
                    orgID: this.rawEvents[x].orgID,
                    })
              }
            }
          
       }
           this.events = events;
          this.allevents = events;

        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    
    },
    methods: {
      
  filter() {
           this.events = this.allevents.filter(e => !this.color.length || this.color.includes(e.color));
           console.log(this.events);
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

        //DO CALCULATIONS AND INSERT INTO BACK END
        //I need a get current org
        var concat = "";
        concat = new Date(this.date + " " + this.time);
        
        var newtime = new Date(new Date(concat).getTime() + this.duration*60000);
        //newtime = this.date  + " " +  newtime;
        var that = this
        console.log(newtime)

        UserServices.getCurrentUser().then(function(result) {
          console.log(result)
          that.appointment.tutorID = result.data.user.id
          that.appointment.orgID = 10
          that.appointment.startDateTime = concat
          that.appointment.endDateTime = newtime
          that.appointment.locationID = 5
          AppointmentServices.addAppointment(that.appointment)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log('There was an error:', error.response)
          })

        })
            



        this.dialog = false
  
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
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
     },*/
    },
  }
</script>
<style scoped>
.setsize{
  
  height: 100%;
  width: 70%;
}
</style>