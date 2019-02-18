<template>

<div class="teal--text">
  <h2>
  Labour report</h2>
  <v-layout row >
  <p >Weekly progress <strong>{{ date }}</strong></p>

<p>comulative progress <strong>overall</strong></p>
  </v-layout>
<v-divider></v-divider>
        <v-container>
              <v-layout row wrap>
        <v-card width="400">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Grading
        </v-card-text>
          </div> 
        </v-card>
<br>
        <v-card width="400">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Grading
        </v-card-text>
          </div>
          
        </v-card>
<br>
        <v-card width="400">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Grading
        </v-card-text>
          </div>
        </v-card>
<br>
        <v-card width="400">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Grading
        </v-card-text>
          </div>
        </v-card>
<br>
        <v-card width="400">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Grading
        </v-card-text>
          </div>      
        </v-card>
<br>
        <v-card width="400">
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
         Grading
        </v-card-text>
          </div>      
        </v-card>
              </v-layout>
        </v-container>
 </div>

</template>


<script>
  export default {
    data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      row:null 
  }
    }}
</script>
<style>
.dashboard {
  color:#009688
}
.h2{
  color: #009688
}
.p{
  color: #009688
}
.industry-wide{
  padding-right: 50px;
  padding-left: 20px;
}
</style>

