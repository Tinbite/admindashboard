<template>
<div class="weeklyR">
  <v-card>
    <v-btn color="teal"
      class="white--text"
      @click="changeRoute('addnew', 1)">
      Add new
      
      </v-btn>
        <v-spacer></v-spacer>
      <v-flex class="weeklyR" 
       right
      xs12
      md5>
      <v-text-field
      color="blue"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      </v-flex>
      <div class="text-xs-right">
      <v-btn color="teal"
      class="white--text"
      >
      Tools
    
      </v-btn>
      </div>
    <v-data-table class="weeklyR"
      :headers="headers"
      :items="leters"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.Fname }}</td>
        <td class="text-xs-right">{{ props.item.detail }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</div>
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
          { text: 'Detail', value: 'detail' }
        ],
      leters: [
          {
            name: '',
            Fname: '',
            detail: '',
           
          },
          
        ]
      }
    },
    methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
  }
</script>
<style >
.weeklyR{
  padding-left: 30px;
  padding-right: 30px;
}
</style>
