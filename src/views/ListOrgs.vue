<template>
<v-container>

<h1>Organization</h1>

<v-btn elevation="2 ">Organizations List </v-btn>
<v-btn elevation="2" to="/createOrg">Add an Organization</v-btn>

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
    :items="org"
    sort-by="firstname"
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
                      v-model="editedItem.firstname"
                      label="First name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.lastname"
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
                      v-model="editedItem.phonenumber"
                      label="Phone number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.organization"
                      label="Organization"
                    ></v-text-field>
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
  // import OrgServices from './services/OrgServices.js';

  export default {
    data: () => ({
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Organization', align: 'start', sortable: false, value: 'orgName'},
        { text: 'Last Name', value: 'lastname'},
        { text: 'Email', value: 'email'  },
        { text: 'Phone Number', value: 'phonenumber' },
        { text: 'Organization', value: 'organization' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      org: [],
      editedIndex: -1,
      editedItem: {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        organization: '',
      },
      defaultItem: {
        firstname: '',
        lastname: '',
        email: '@gmail.com',
        phonenumber: '',
        organization: '',
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
      this.initialize()
    },
    methods: {
      initialize () {
        this.orgs = [
          {
            orgID: '',
            orgName: 'Eddie',
            lastname: 'Gomez',
            email: 'eddie@gmail.com',
            phonenumber: '123 333-8993',
            organization: 'New College',
          },
          {
            firstname: 'David',
            lastname: 'North',
            email: 'eddie@gmail.com',
            phonenumber: '123 333-8993',
            organization: 'New College',
          },
          {
            firstname: 'Timothy',
            lastname: 'White',
            email: 'eddie@gmail.com',
            phonenumber: '123 333-8993',
            organization: 'New College',
          },
          {
            firstname: 'Deitrich',
            lastname: 'Versaw',
            email: 'eddie@gmail.com',
            phonenumber: '123 333-8993',
            organization: 'New College',
          },
          {
            firstname: 'Braden',
            lastname: 'Thompson',
            email: 'eddie@gmail.com',
            phonenumber: '123 333-8993',
            organization: 'New College',
          },
          {
            firstname: 'Jelly bean',
            lastname: 375,
            email: 'eddie@gmail.com',
            phonenumber: '123 333-8993',
            organization: 'New College',
          },
         
        ]
      },
      editItem (item) {
        this.editedIndex = this.orgs.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.orgs.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.orgs.splice(this.editedIndex, 1)
        this.closeDelete()
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
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.orgs[this.editedIndex], this.editedItem)
        } else {
          this.orgs.push(this.editedItem)
        }
        this.close()
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