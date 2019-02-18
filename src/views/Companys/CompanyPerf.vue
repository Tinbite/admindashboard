<template>
<div>
    <v-flex xs12 md15>
      <div class="card">
      <v-card>
        <v-card-text>
        <v-flex
                  xs12
                  md15>
          <v-autocomplete
          color="blue"
            label="Select a company"
            outline
          ></v-autocomplete>
        </v-flex>
        <v-flex
                  xs12
                  md15>
          <v-autocomplete
          color="blue"
          ref="year"
          :items="years"
          v-model="year"
            label="Select a year"
            outline
          ></v-autocomplete>
        </v-flex>
         <v-flex
                  xs12
                  md15>
          <v-autocomplete
          color="blue"
          ref="week"
          :items="weeks"
          v-model="week"
            label="Select a Week"
            outline
          ></v-autocomplete>
         </v-flex>
        
          <div class="text-xs-center">
          <v-btn outline medium fab color="teal">
      <v-icon>print</v-icon>
    </v-btn>
          </div>

          <v-dialog
          v-model="dialog"
      width="800"
      height="300">
     
   
      <v-btn  round color="teal" slot="activator" dark>
        Show manual allocation detail
      </v-btn>
   
      
      <v-card>
        <v-card-title class="card"
         >
          Manual allocation detail for
        </v-card-title> 
          <v-divider></v-divider>
          <v-card-text v-model="row">
Date <br> Amount <br> Allocated By  <br> Reported by <br> Description</v-card-text>
<v-divider></v-divider>
<v-card-actions>
         <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
          </v-dialog>
         
        </v-card-text>
      </v-card>
      </div>
    </v-flex>
    
      <br>
        <v-card class="industry-wide">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Industry wide companies system activity
        </v-card-text>
          </div>
        </v-card>
      
    </div>
</template>

<script>
  export default {
    data() {
    return {
      checkbox1: false,
      row: null,
      dialog: false,
      dialogSettings: false
    },
    ({
      weeks:['Week1 2019','Week2 2019','Week3 2019','Week4 2019','Week5 2019','Week6 2019','Week7 2019'],
      years: ['2014','2015','2016','2017','2019','2020','2021','2022','2023'],
      year:null,
      week:null,
    })
    }
  }
</script>
<style>
.card{
  padding-left: 20px;
}
.industry-wide{
  padding-left:20px;
}
</style>
