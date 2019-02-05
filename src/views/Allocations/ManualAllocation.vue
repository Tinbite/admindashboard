<template>
<div class="weeklyR">
  <v-card>
    <v-btn color="teal"
      class="white--text"
      @click="changeRoute('new', 1)">
      New
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
   <v-divider></v-divider>
    <v-container fluid>
    <v-layout v-model="row" row>
     <v-card-text>
      #
    </v-card-text>
    <v-card-text>
      Company
    </v-card-text>
    <v-card-text >
      Requested on
    </v-card-text>
    <v-card-text >
     Requested(total)
    </v-card-text>
     <v-card-text >
     Staged
    </v-card-text>
     <v-card-text >
     Allocated
    </v-card-text>
     <v-card-text >
   Progress
    </v-card-text>
    
    </v-layout>
    </v-container>
    <hr>
    <v-card-text> </v-card-text>
  </v-card>
<v-divider></v-divider>
  <v-card>
  </v-card>
</div>
</template>
<script>
  export default {
    data () {
      return {
        row: null,
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
