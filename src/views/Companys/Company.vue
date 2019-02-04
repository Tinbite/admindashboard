<template>
  <v-card>
    <v-card-title>
      Companies
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
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.phone }}</td>
        <td class="text-xs-right">{{ props.item.altphone }}</td>
        <td class="text-xs-right">{{ props.item.region }}</td>
        <td class="text-xs-right">{{ props.item.zone }}</td>
        <td class="text-xs-right">{{ props.item.city }}</td>
        <td class="text-xs-right">{{ props.item.woreda }}</td>
        <td class="text-xs-right">{{ props.item.kebele}}</td>
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
          { text: 'Email', value: 'email' },
          { text: 'Phone .N', value: 'phone' },
          { text: 'Alt. phone.N', value: 'altphone' },
          { text: 'Region', value: 'region' },
          { text: 'Zone', value: 'zone' },
          { text: 'City', value: 'city' },
          { text: 'Woreda', value: 'woreda' },
          { text: 'Kebele', value: 'kebele' }
        ],
      leters: [
          {
            name: 1,
            Fname: 'abebe',
            email: 'aa@gmail.com',
            phone: +2519112334 ,
            altphone: +256789000,
            region: 'a.a',
            zone: 4,
            city: 'a.a',
            woreda:4,
            kebele:3
          },
             {
            name: 2,
            Fname: 'benjiy',
            email: 'bb@gmail.com',
            phone: +2519112339 ,
            altphone: +256789800,
            region: 'a.a',
            zone: 3,
            city: 'awasa',
            woreda:5,
            kebele:7
          },
          
        ]
      }
    }
  }
</script>