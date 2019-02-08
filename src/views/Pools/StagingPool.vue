<template>
<div class="pool">
<v-card>
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
