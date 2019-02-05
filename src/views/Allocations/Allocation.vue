<template>
       <v-container fluid>
  <v-card class="alloction">
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
    <hr>
    <v-card-text> </v-card-text>
  </v-card>
<v-divider></v-divider>
  <v-card>


  </v-card>
       </v-container>
</template>
<script>
  export default {
    data () {
      return {
        row: null
      }
    }
  }
</script>
<style>
.allocation{
  font-weight: bold;
  padding-right: 30px;
  padding-left: 30px;
}
</style>
