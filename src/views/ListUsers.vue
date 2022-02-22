<template>
<v-container>

<h1>Users</h1>

<v-btn elevation="2 ">Users List </v-btn>

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
    :items="user"
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
          v-model="dialog"
          max-width="500px"
        >
          <v-card>
              <v-container>
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
                      v-model="editedItem.email"
                      label="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.phone"
                      label="Phone number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                  </v-col>
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
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
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
  import UserServices from '@/services/UserServices.js';

  export default {
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'First Name', value: 'fName'},
        { text: 'Last Name', value: 'lName'},
        { text: 'Email', value: 'email'  },
        { text: 'Phone Number', value: 'phone' },
      ],
      message: null,
      users: [],
      editedIndex: -1,
      editedItem: {
        userID: '',
        fName: '',
        lName: '',
        email: '',
        phone: '',
      },
      defaultItem: {
        userID: '',
        fName: '',
        lName: '',
        email: '@gmail.com',
        phone: '',
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      UserServices.getUsers()
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },
    methods: {
      editItemDialog(item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItemDialog(item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm() {
        UserServices.deleteUser(this.editedItem.userID)
          .then(() => {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()
          })
          .catch(error => {
            //console.log("failure");
            this.message = error.message;
          })
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      saveEdit () {
        UserServices.updateUser(this.edtitedItem.userID, this.editedItem)
          .then(() => {
            //console.log("success");
            // this.$router.push({ name: 'coursePlan', params: {studentID: this.studentID} })
            if (this.editedIndex > -1) {
              Object.assign(this.users[this.editedIndex], this.editedItem)
            } else {
              this.users.push(this.editedItem)
            }
            this.message = null;
            this.close()
          })
          .catch(error => {
            //console.log("failure");
            this.message = error.message;
          })
      },
    },
  }
 
</script>

<!-- Add "scoped" at
tribute to limit CSS to this component only -->
<style scoped>

.description{
    min-height: 1000px;
}

</style>