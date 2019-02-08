<template>
<div class="pool">
<v-card>
    <v-container>
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
     <br>
      <v-layout row>
         <v-btn color="white" fab small></v-btn>
          <v-card-text>All</v-card-text>

          <v-btn color="error" fab small></v-btn>
          <v-card-text>Terminated</v-card-text>

          <v-btn color="orange" fab small></v-btn>
          <v-card-text>Rejected</v-card-text>

          <v-btn color="black" fab small></v-btn>
          <v-card-text>No show</v-card-text>
      </v-layout>
    </v-container>
    <div class="text-xs-right">
      <v-btn
        color="teal"
          :items="items"
        >
      tools
      </v-btn>
      <v-btn
        color="teal"
          :items="items"
        >
      show
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-card>
<v-form>
<v-container>
    <v-layout
  wrap
    >
    <v-flex xs12 >
        <v-card-text>
         Education level
        </v-card-text>
        <v-flex xs12>
          <v-autocomplete
          color="blue"
            label="Select education level"
            outline
          ></v-autocomplete>
        </v-flex>

        <v-flex xs12 >
        <v-card-text>
         Gender
        </v-card-text>
        <v-flex xs12>
          <v-autocomplete
          color="blue"
            label="Select gender"
            outline
          ></v-autocomplete>
        </v-flex>
        </v-flex>

        <v-flex xs12 >
        <v-card-text>
         Woreda
        </v-card-text>
        <v-flex xs12>
          <v-autocomplete
          color="blue"
            label="Select Woreda"
            outline
          ></v-autocomplete>
        </v-flex>
        </v-flex>
        <v-flex xs12 >
        <v-card-text>
         Catchment area
        </v-card-text>
        <v-flex xs12>
          <v-autocomplete
          color="blue"
            label="Select catchment area"
            outline
          ></v-autocomplete>
        </v-flex>
        </v-flex>
    </v-flex>
     <div class="title font-weight-thin">There is no person in the pool</div>
    
      <v-flex xs12 sm6>
     <v-card-text class="finger">
          <v-icon color="black" size="200">fingerprint</v-icon>
          <br>
          Finger Print
        </v-card-text>
       <div class="text-xs-center">
        
    <v-btn round color="teal" dark>Scan</v-btn>
  </div>
  <div class="text-xs-center">
    <v-checkbox label="Identify with person Id" v-model="checkbox1"></v-checkbox>
      </div>
      </v-flex>
    </v-layout>
</v-container>
</v-form>
</v-card>
</v-card>
</div>
</template>
<script>
export default {
  data() {
    return {
      row: null,
      checkbox1: false
    }
  }
}
</script>
<style>
.pool {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
