<template>
<div class="reasons">
<v-card>
 <v-card-title>
      <v-spacer></v-spacer>
      
         <v-text-field
      color="blue"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-btn color="teal"
      class="white--text">
      Tools
      </v-btn>
 </v-card-title>
  <div>
    <v-toolbar flat color="white">
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <div class="text-xs-left">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        </div>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                </v-flex>
                   <v-flex xs12 sm6 md4>
                 <v-autocomplete ref="type"
          :items="types" v-model="editedItem.type" label="type"></v-autocomplete>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.region" label="Region"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.zone" label="Zone"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.city" label="City"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.woreda" label="Woreda"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.kebele" label="Kebele"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="names"
       :search="search"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.type }}</td>
        <td class="text-xs-right">{{ props.item.region }}</td>
        <td class="text-xs-right">{{ props.item.zone }}</td>
        <td class="text-xs-right">{{ props.item.city }}</td>
        <td class="text-xs-right">{{ props.item.woreda }}</td>
        <td class="text-xs-right">{{ props.item.kebele }}</td>
        <td class="text-xs-right">{{ props.item.description}}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Names',
          align: 'left',
          sortable: false,
          value: 'name'
        },
         { text: 'Type', value: 'type' },
        { text: 'Region', value: 'region' },
        { text: 'Zone', value: 'zone' },
        { text: 'City', value: 'city' },
        { text: 'Woreda', value: 'woreda' },
        { text: 'Kebele', value: 'kebele' },
         { text: 'Description', value: 'description' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      types: ['Catcment area', 'screening center', 'Grading center','Company location'],
      type:null,
      names: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        type:'',
        region: 0,
        zone: 0,
        city: 0,
        woreda: 0,
        kebele: 0,
        description:''
      },
      defaultItem: {
        name: '',
        type:'',
         region: 0,
        zone: 0,
        city: 0,
        woreda: 0,
        kebele:0,
         description:''
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.names = [
          {
            name: 'Fantahun',
              type:'',
             region: 'amhara',
        zone: 1,
        city: 'a.a',
        woreda: 11,
        kebele:2,
         description:'',
          },
          {
            name: 'abebe',
             type:'',
             region: 'a.a',
        zone: 3,
        city: 'a.a',
        woreda: 10,
        kebele:3,
         description:''
          },
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.names.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.names.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.names[this.editedIndex], this.editedItem)
        } else {
          this.names.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>