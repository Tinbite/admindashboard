<template>
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
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.region }}</td>
        <td class="text-xs-right">{{ props.item.zone }}</td>
        <td class="text-xs-right">{{ props.item.city }}</td>
        <td class="text-xs-right">{{ props.item.woreda }}</td>
        <td class="text-xs-right">{{ props.item.kebele }}</td>
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
        { text: 'Region', value: 'region' },
        { text: 'Zone', value: 'zone' },
        { text: 'City', value: 'city' },
        { text: 'Woreda', value: 'woreda' },
        { text: 'Kebele', value: 'kebele' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      names: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        region: 0,
        zone: 0,
        city: 0,
        woreda: 0,
        kebele: 0,
      },
      defaultItem: {
        name: '',
         region: 0,
        zone: 0,
        city: 0,
        woreda: 0,
        kebele:0
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
             region: 'amhara',
        zone: 1,
        city: 'a.a',
        woreda: 11,
        kebele:2
          },
          {
            name: 'abebe',
             region: 'a.a',
        zone: 3,
        city: 'a.a',
        woreda: 10,
        kebele:3
          },
          {
            name: 'Eclair',
            region: 'hawasa',
        zone: 6,
        city: 'hawasa',
        woreda: 8,
        kebele:4
          },
          {
            name: 'Cupcake',
            region: 'tigray',
        zone: 3,
        city: 'mekele',
        woreda: 10,
        kebele:5
          },
          {
            name: 'Gingerbread',
            region: 'a.a',
        zone: 10,
        city: 'a.a',
        woreda: 2,
        kebele:6
          },
          {
            name: 'Jelly bean',
                 region: 'a.a',
        zone: 10,
        city: 'a.a',
        woreda: 2,
        kebele:8
          },
          {
            name: 'Lollipop',
                region: 'a.a',
        zone: 10,
        city: 'a.a',
        woreda: 2,
        kebele:8
          },
          {
            name: 'Honeycomb',
                  region: 'a.a',
        zone: 10,
        city: 'a.a',
        woreda: 2,
        kebele:6
          },
          {
            name: 'Donut',
                 region: 'a.a',
        zone: 10,
        city: 'a.a',
        woreda: 2,
        kebele:5
          },
          {
            name: 'KitKat',
                 region: 'a.a',
        zone: 10,
        city: 'a.a',
        woreda: 2,
        kebele:5
          }
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