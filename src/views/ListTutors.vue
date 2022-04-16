<template>
<v-container>


<!--<input  class = "search" type = "text" v-model= "search" placeholder="Filter by advisor name &#x1F50E;&#xFE0E;	"/>
    <br>
<admin-display class = "listDisp"  v-for="admin in filteredAdmins" :key="admin.adminID" :admin="admin" :permissions="permissions"/> 
-->
   <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="tutors"
    sort-by="fName"
    class="elevation-1"
      :search="search">
    <template v-slot:top>
     
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialogEdit"
          max-width="500px"
        >
          <v-card>
              <v-container>
                <p v-if="message">{{this.message}}</p>
                <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.fName"
                      label="First name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.lName"
                      label="Last Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.verified"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.dateAgreementSigned"
                      label="Phone number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                  </v-col>
                </v-row>
              </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeEdit">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="saveEdit">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <p v-if="message">{{this.message}}</p>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
     
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon small @click="deleteItemDialog(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
    
  </v-data-table>
</v-container>


</template>

<script>
  import TutorServices from '@/services/TutorServices.js';

  export default {
    props: ['orgID'],
    data: () => ({
      search: '',
      dialogEdit: false,
      dialogDelete: false,
      headers: [
        { text: 'First Name', value: 'fName'},
        { text: 'Last Name', value: 'lName'},
        { text: 'Verification', value: 'verifiedTxt'  },
        { text: 'Contract', value: 'dateAgreementSigned' },
        { text: 'Email', value: 'email'},
        { text: 'Phone', value: 'phone'},
        //{ text: 'Actions', value: 'actions', sortable: false },
      ],
      message: '',
      tutors: [],
      editedIndex: -1,
      editedItem: {
        userID: '',
        fName: '',
        lName: '',
        verified: '',
        verifiedTxt: '',
        dateAgreementSigned: ''
      },
      defaultItem: {
        userID: '',
        fName: '',
        lName: '',
        verified: '',
        verifiedTxt: '',
        dateAgreementSigned: ''
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Tutor' : 'Edit Tutor'
      },
    },
    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      TutorServices.getTutorsByOrg(this.orgID)
        .then(response => {
          console.log(response);
          this.tutors = response.data
          this.tutors.forEach(function setVerifyTxt(tutor) {
                const [year, month, day] = tutor.dateAgreementSigned.split('-'); 
                const [days, hours] = day.split('T');
                hours;
                tutor.dateAgreementSigned = year + '/' + month + '/' + days;
              if (tutor.verified) tutor.verifiedTxt = "Confirmed";
              else tutor.verifiedTxt = "Requested";
          })
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    methods: {
      /*initialize() {
        TutorServices.getTutors()
        .then(response => {
          console.log(response);
          this.tutors = response.data
          console.log(this.tutors);
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
      },*/
        formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      deleteItemDialog(item) {
        this.editedIndex = this.tutors.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm() {
        TutorServices.deleteTutor(this.editedItem.userID)
          .then(() => {
            this.tutors.splice(this.editedIndex, 1)
            this.closeDelete()
          })
          .catch(error => {
            console.log("ERR: " + error.message);
            //this.message = error.message;
          })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      }
    }
  }
</script>

<!-- Add "scoped" at
tribute to limit CSS to this component only -->
<style scoped>

.description{
    min-height: 1000px;
}

</style>