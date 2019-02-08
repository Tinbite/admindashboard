<template>
<div>
<v-card>
  <v-btn color="primary" dark @click="dialog2 = true">New request</v-btn>
   <v-spacer></v-spacer>
   <v-flex xs12 md4 class="text-xs-right">
   <v-text-field
      color="blue"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
   </v-flex>
      <v-btn color="teal"
      class="white--text">
      Tools
      </v-btn>
      <v-spacer></v-spacer>
      <v-data-table
      :headers="headers"
      :items="leters"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.Fname }}</td>
        </template>
<v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
      
    <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
            Confirm
          </v-card-title>
          <v-divider></v-divider>
          <v-card-title>
             Are you sure? lets hope you know what your doing.
          </v-card-title>
           <v-divider></v-divider>
          <v-card-text>
            <v-btn color="primary" dark @click="dialog3 = !dialog3">OK</v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog2=false">Cancel</v-btn>
          </v-card-actions>
           <v-dialog v-model="dialog3" max-width="500px">
        <v-card class="transfer">
          <v-card-title>
            <!-- <span>Dialog 3</span> -->
            Transfer
            </v-card-title>
             <v-divider></v-divider>
             <v-card-text>
               Company
             </v-card-text>
        <v-flex
                  xs13
                  md10>
          <v-autocomplete
          color="blue"
            label="Select a company"
            outline
          ></v-autocomplete>
        </v-flex>
        <v-card-text>
               Company
             </v-card-text>
        <v-flex
                  xs13
                  md10>
          <v-autocomplete
          color="blue"
          ref="week"
          :items="weeks"
          v-model="week"
            label="Select a Week"
            outline
          ></v-autocomplete>
            <v-list-tile-action>
                  <v-checkbox  v-model="checkbox1"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Special Request</v-list-tile-title>
                  <v-list-tile-sub-title>Only use this option for special case</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-flex xs12>
            <v-card-text>
                Start Date
            </v-card-text>
          <v-text-field
            value="2019-03-12"
            outline
            readonly
          ></v-text-field>
        </v-flex>
<v-card-text>
    End date
</v-card-text>
        <v-flex xs12>
          <v-text-field
            value="2019-04-10"
            outline
            readonly
          ></v-text-field>
        </v-flex>
        <v-card-text>
        Description
    </v-card-text>
    <v-flex xs12>
        <v-textarea
          outline
          name="input-7-4"
          label="Outline textarea"
          value=""
        ></v-textarea>
        
      </v-flex>
         </v-flex>
         <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" flat>Save</v-btn>
            <v-btn color="primary" flat @click="dialog2=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        </v-card>
      </v-dialog>

  </v-card>
 </div>
 </template>
 <script>
  export default {
    data: () => ({
      search: '',
        headers: [
          {
            text: '#',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Name', value: 'Fname' },
          ],
      leters: [
          {
            name: 1,
            Fname: 'abebe'
          },
      ],
        dialog2: false,
        dialog3: false,
        checkbox1: false,
         weeks:['Week1 2019','Week2 2019','Week3 2019','Week4 2019','Week5 2019','Week6 2019','Week7 2019'],
      week:null
    })
  }
</script>
<style>
.transfer{
  padding-left: 20px;
}
</style>