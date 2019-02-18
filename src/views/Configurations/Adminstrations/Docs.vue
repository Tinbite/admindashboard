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
                <v-card-text>
                       <v-flex xs12 sm6 md4>
                <v-autocomplete ref="type"
          :items="types" v-model="editedItem.type" label="type"></v-autocomplete>
                       </v-flex>
                <v-flex xs12 sm6 md4>
                 <v-textarea 
           v-model="editedItem.description" label="Description"></v-textarea>
                </v-flex>
                </v-card-text>
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
        <td class="text-xs-right">{{ props.item.description }}</td>
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
       <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </div>
</v-card>
</div>
</template>

<script>
  export default {
    data: () => ({
      search: '',
      dialog: false,
      headers: [
        {
          text: 'Names',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Type', value: 'type' },
        { text: 'Description', value: 'description' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      types: ['', '', ''],
      type:null,
      names: [],
      editedIndex: -1,
      editedItem: {
        name: '',
         type:'',
        description:''
      },
      defaultItem: {
        name: '',
         type:'',
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
           name: 'abera',
        type:'',
        description:''
          },
          {
            name: 'bebe',
         type:'',
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
<style>
.reasons{
  padding-right: 20px;
  padding-left: 20px;
}

</style>
