<template>
<v-container class="setsize" >
  <v-row >
    <v-col>
      <v-sheet>
        <v-toolbar>
                <v-btn 
          
            class="mr-4"
            @click="addItem()">
            Add
          </v-btn>
    
           <v-select
            v-model="color"
            :items="colors"
            colors
            item-text="status"
            item-value="color"
            item-color="black"
            label="Status"
            multiple
          ><template #item="{item}">
              <span :style="{color: item.color}"> 
                      {{item.status}}</span>
           </template>
           </v-select>
                        <v-btn    
          color="primary"
          elevation="2"         
          small
            @click="filter()">
                Filter 
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
                  
                 
                 
                 <!-- <v-col cols="12" sm="6" md="4"> -->
                   <!-- <v-container fill-width fluid>-->
                 
                 
                 <!--     <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="date"  hint="MM/DD/YYYY format" persistent-hint prepend-icon="mdi-calendar" 
                          v-bind="attrs" @blur="date = parseDate(appointment.startDateTime)" v-on="on" >
                            
                          </v-text-field>
                        </template>
                          <v-date-picker v-model="date" no-title  @input="menu2 = false" >
                        </v-date-picker>
                      </v-menu>-->
                     <v-col
                        cols="12"
                        m = "12"
                        sm="12"
                      >
                         <v-date-picker
                              v-model="dates"
                              multiple
                            ></v-date-picker>
                      </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                        >
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="dates"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                    <!-- <template v-slot:activator="{ on, attrs }">
                         <v-combobox
                          v-model="dates"
                          multiple
                          chips
                          small-chips
                          label="Multiple picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-combobox>
                      </template>-->
                      <v-date-picker
                        v-model="dates"
                        multiple
                        no-title
                        scrollable
                      >
                <!--        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="menu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(dates)"
                        >
                          OK
                        </v-btn>-->
                      </v-date-picker>
                      </v-menu>
                      </v-col>

                  <!--  </v-container> -->
      <!--</v-col>-->
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
          item-text="name"
          item-value="id"
          v-model="locationID"                    

        ></v-select>
      <v-text-field             
            v-model="locationDetails"
            v-if = "locationID === 6"
            label="Specify Location:"
            outlined
            clearable

          ></v-text-field>
         <v-text-field 
            v-if = "locationID === 5"
            label="Google Meet Link:"
            outlined
            clearable
            v-model="locationDetails"

          ></v-text-field>
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

            <v-avatar
            class="mb-4"
            color="grey darken-1"
            size="36">     
              <img :src="`${selectedEvent.picture}`"  alt="">
          </v-avatar>
            
              <p >&nbsp;&nbsp;&nbsp;&nbsp;{{ selectedEvent.name }} </p>

              <v-spacer></v-spacer>
    
            </v-toolbar>
            <v-card-text>
              <!--content in appointment popup-->
              <p >
              Subjects Available:
                <ul>
                  <li v-for="subject in selectedEvent.subjects" :key="subject">{{subject}}</li>
                  </ul>

                <br>
              Location:&nbsp;
              <span v-if= "selectedEvent.locationName === 'Online'"  >
                <a :href="selectedEvent.locationDetails">Virtual Session Link</a>
              </span>
              <span v-else>
                <span v-if= "selectedEvent.locationName === 'Other'">
                    {{selectedEvent.locationDetails}}
                </span>
                <span v-else>
                  {{selectedEvent.locationName}}
                </span>
              </span>
              </p>


            </v-card-text>
            <v-card-actions>
               <v-btn  v-if= "(Date.now() > new Date(selectedEvent.end)) && selectedEvent.color === 'green'" text color="green" @click="selectedOpen = false"
               >
               <router-link :to="{ name: 'review', params: { id : selectedEvent.appointmentID } }">Review</router-link> 
              </v-btn>
              <v-btn v-if= "(Date.now() < new Date(selectedEvent.end)) &&selectedEvent.color === 'green'" text color="red" @click="cancelAppt()">
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
import SubjectServices from '@/services/SubjectServices.js';



  export default {
    data: vm=> ({
      dates: [],
      menu: false,
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
      locations : [{name:'Student Center',id:1}, {name:'Writing Center',id:2}, {name:'Student Success Center',id:3}, {name:'Library',id:4}, {name:'Online',id:5}, {name:'Other: ',id:6}],
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
       subjects: [],
      subject: [],
      locationID : "", 
      locationDetails: "", 
      color: [], 
      colors: [{status:'Available', color:'grey'}, {status:'Pending', color:'orange'}, {status:'Booked', color:'green'}, {status:'Canceled',color:'red'}],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      org : "",
      role : ""
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
  //  mounted () {
   //   this.$refs.calendar.checkChange()
    //},
    created () {
        this.reload();
    },
    methods: {
      reload(){
           UserServices.getCurrentUser() 
              .then(response => {
            this.user =  response.data.user.id;
            this.org = response.data.user.roles[0].org;
            this.role = response.data.user.roles[0].role;

        const events = []
          var that = this;

        AppointmentServices.getAppointments(this.org)
        .then(async response => {
          //console.log(response);
          this.rawEvents = response.data
          //console.log(this.rawEvents);

          for (let x = 0; x < this.rawEvents.length; x++)
         {             
            //console.log(this.rawEvents[x]);
            var startDate = new Date(this.rawEvents[x].startDateTime);
            var hrs =  startDate.getHours(); //? startDate.getHours()-12 > 12)
            var formattedStartDate = (startDate.getFullYear()   + "-" + (startDate.getMonth() +1) + "-" + startDate.getDate()  +  " " + hrs +  ":" + startDate.getMinutes() + ":" + "00");
            var endDate = new Date(this.rawEvents[x].endDateTime);
            hrs =  endDate.getHours();
            var formattedEndDate = (endDate.getFullYear()  + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate() +  " " + hrs +  ":" + endDate.getMinutes()  + ":" + "00");
            var subjects = [];
            await SubjectServices.getSubjectsByTutor(this.rawEvents[x].tutorID).then(r => {
                for (var x in r.data) subjects.push(r.data[x].subjectName);
            });
              
                if (this.user == this.rawEvents[x].tutorID)
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
                        tutorFName: this.rawEvents[x].tutorFName,
                        tutorLName: this.rawEvents[x].tutorLName,
                        subjects: subjects,
                        picture : this.rawEvents[x].picture,
                        locationID : this.rawEvents[x].locationID,
                        locationName : this.rawEvents[x].locationName,
                        locationDetails : this.rawEvents[x].locationDetails
                    
                    })
                    console.log(this.rawEvents[x].picture);
                }
              }
            await SubjectServices.getSubjects().then(r => {
                for (var x in r.data) that.subjects.push(r.data[x].subjectName);
            });
           this.events = events;
           this.allevents = events;
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    
          })
          .catch(error => {
            console.log('There was an error: heres', error.response)
          })
      },
      cancelAppt(){
        var that = this;
            AppointmentServices.getAppointment(this.selectedEvent.orgID, this.selectedEvent.appointmentID) 
          .then(response => {      
            var currentAppointment = response.data[0];
            currentAppointment.color = 'red';  
            console.log(response);
            AppointmentServices.updateAppointment(this.selectedEvent.appointmentID, currentAppointment)
            this.selectedOpen = false;
            
            that.reload();
          })
            .catch(error => {
              
              console.log('There was an error: updating', error.response)
              this.selectedOpen = false;
              that.reload();
            });
      },
  filter() {
           this.events = this.allevents.filter(e => !this.color.length || this.color.includes(e.color));
           //console.log(this.events);
      },
      formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      sqlDate(date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + String(date.getMinutes()).padStart(2, "0");
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

            UserServices.getUser(this.user) 
                .then(async (response) =>{
        for(var x = 0; x < this.dates.length ; x++)
        {
          var concat = "";
          
          console.log(this.dates[x]);
          concat = new Date(this.dates[x] + " " + this.time);
          
          var newtime = new Date(new Date(concat).getTime() + this.duration*60000);
          //newtime = this.date  + " " +  newtime;
          var that = this
          console.log("new time ", newtime)


      //    UserServices.getCurrentUser().then(function(result) {
            that.appointment.tutorID = this.user
            that.appointment.orgID = this.org
            that.appointment.startDateTime = that.sqlDate(concat)
            that.appointment.endDateTime = that.sqlDate(newtime)
            that.appointment.locationID = this.locationID
            that.appointment.color = "grey"
            that.appointment.title = response.data[0].fName + " " + response.data[0].lName;
            that.appointment.locationDetails= this.locationDetails;
            await AppointmentServices.addAppointment(that.appointment)
           }
                that.reload();
            })
            .then(response => {
              console.log(response);
              
            })
            .catch(error => {
              console.log('There was an error:', error.response)
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
      },
    },
  }
</script>
<style scoped>
.setsize{
  
  height: 100%;
  width: 70%;
}
</style>