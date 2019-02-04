<template>
  <v-card>
    <v-card-title>
      Companies monthly report
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
    <v-data-table
      :headers="headers"
      :items="leters"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.Fname }}</td>
        <td class="text-xs-right">{{ props.item.month }}</td>
        <td class="text-xs-right">{{ props.item.year }}</td>
        <td class="text-xs-right">{{ props.item.entrydate }}</td>
        <td class="text-xs-right">{{ props.item.submittedby }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: '#',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Name', value: 'Fname' },
          { text: 'Month', value: 'month' },
          { text: 'Year', value: 'year' },
          { text: 'Entry Date', value: 'entrydate' },
          { text: 'Submmited by', value: 'submittedby' },
        ],
      leters: [
          {
            name: 1,
            Fname: 'abebe',
            month: 'Jan',
            year:2018,
            entrydate:2,
            submittedby: 'me'
          },
          
        ]
      }
    }
  }
</script>