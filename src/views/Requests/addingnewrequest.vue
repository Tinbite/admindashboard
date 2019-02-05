<template>
<div class="addnew">
<v-card >
  <v-form>
    <v-container>
      <v-layout wrap>
          <v-flex xs12>
<v-card-text class="add">
    Week</v-card-text>
          <v-text-field
            value="Week 7"
            outline
            readonly
          ></v-text-field>
        </v-flex>
       <v-list-tile-action>
                  <v-checkbox  v-model="checkbox1"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Special Request</v-list-tile-title>
                  <v-list-tile-sub-title>Only use this option for special case</v-list-tile-sub-title>
                </v-list-tile-content>
                
    <!-- <v-checkbox label="Special Request" v-model="checkbox1">
    </v-checkbox> -->
        <v-flex xs12>
            <v-card-text class="add">
                Start Date
            </v-card-text>
          <v-text-field
            value="2019-03-12"
            outline
            readonly
          ></v-text-field>
        </v-flex>
<v-card-text class="add">
    End date
</v-card-text>
        <v-flex xs12>
          <v-text-field
            value="2019-04-10"
            outline
            readonly
          ></v-text-field>
        </v-flex>
        <v-divider></v-divider>
        <v-card-text class="add">
            Pick up date
        </v-card-text>
        <v-flex xs12 sm6>
      <v-date-picker v-model="picker2" color="blue lighten-1" header-color="indigo"></v-date-picker>
    </v-flex>
    <v-card-text class="add">
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
     <v-flex class="text-xs-right" >
  <v-btn 
  class="mx-0 font-weight-light"
     dark
 @click="changeRoute('WR', 1)">
      Cancel
    </v-btn>
     
     
     <v-btn
  class="mx-0 font-weight-light"
      color="teal"
       dark
       >
     Save
    </v-btn>
     </v-flex>        
      </v-layout>
    </v-container>
  </v-form>
</v-card>
</div>
</template>
<script>

export default {
  data() {
    return {
      checkbox1: false,
      picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10)
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
<style>
.addnew{
    padding-left: 30px;
    padding-right: 30px;
}
.add{
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    font-weight: bold;
}
.addnew .v-btn{
    text-align: right;
}
</style>

