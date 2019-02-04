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
        <v-flex
         xs12
                  md15>
          <v-autocomplete
          color="blue"
          ref="week"
          :items="weeks"
          v-model="week"
            label="Select a week"
            outline
          ></v-autocomplete>
        </v-flex>
        <div class="text-xs-center">
        <div>
        <v-btn class="teal" dark>
          Email Dashboard
        </v-btn>
                <v-btn class="teal" dark>
          Download Dashboard
        </v-btn>
        </div> 
        </div>
        </v-card-text>
      </v-card>
      <br>
      <v-card class="industry">
        <v-card-text>
          Industry wide companies system activity
        </v-card-text>
      </v-card>

      </div>
</v-flex>
</template>

<script>
  

  export default {
     data: () => ({
      weeks:['Week1 2019','Week2 2019','Week3 2019','Week4 2019','Week5 2019','Week6 2019','Week7 2019'],
      years: ['2014','2015','2016','2017','2019','2020','2021','2022','2023'],
      year:null,
      week:null,
    })
    }
</script>
<style>
.industry{
  font-size:20px;
  text-align: center;
  padding-right: 30px;
   padding-left: 30px;
}
.card{
   padding-left: 30px;
  padding-right: 30px;
}
</style>
