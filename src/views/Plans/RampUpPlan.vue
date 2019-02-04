<template>
<v-flex xs12 md15>
    <div class="card">
      <v-card>
        
        <v-card-text>
<v-flex
   xs12
   md15>
          <v-autocomplete
          color="blue"
          ref="year"
          :items="years"
          v-model="year"
            label="Select a Year"
            outline
          ></v-autocomplete>
        </v-flex>
        </v-card-text>
        <div class="search">
        <v-flex
        
   xs12
   md4>
        <v-text-field
        color="blue"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        </v-flex>
        </div>
      </v-card>
    </div>
</v-flex>

        </template>
        <script>
  

  export default {
    data: () => ({
      years: ['2014','2015','2016','2017','2019','2020','2021','2022','2023'],
      year:null
    })

    
  }
</script>
<style>
.search{
  padding-bottom: 20px;
}
</style>

