<template>
  <v-card>
     <div>
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
     </div>
     <br>
    <v-card-text>
      <v-container fluid>
        <v-layout row>
      <v-btn
         fab dark color="#ECEFF1"
        @click="snackbar = true"
      >
      </v-btn>
      <v-card-text>Notyet been<br> processed</v-card-text>
      <v-btn
         fab dark color="teal"
        @click="snackbar = true"
      >
      </v-btn>
      <v-card-text>Accepted</v-card-text>

      <v-btn
         fab dark color="error"
        @click="snackbar = true"
      >
      </v-btn>
      <v-card-text>Rejected</v-card-text>

      <v-btn
         fab dark color="black"
        @click="snackbar = true"
      >
      </v-btn>
      <v-card-text>No-show</v-card-text>

       <v-spacer></v-spacer>

<v-dialog
      v-model="dialog"
      width="800"
      height="300">
        <v-btn round color="teal" dark slot="activator">
        Identify
      </v-btn>
      <v-card>
        <v-card-title class="card 'headline grey lighten-2' "
         >
          Identify from allocation
        </v-card-title>
        <v-divider></v-divider>
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
       <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        </v-layout>
      </v-container>
    </v-card-text>
    <v-snackbar
      v-model="snackbar"
      color="error"
      :timeout="timeout"
    >
    Please login as company user!!
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        snackbar: false,
        timeout: 6000,
        row: null,
         dialog: false,
       
      }
    }
  }
</script>