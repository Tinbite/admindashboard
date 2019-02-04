<template>
<div>
       <v-dialog
          v-model="dialog"
      width="800"
      height="300">
        <v-btn class="orange" slot="activator" dark>
          New Request
        </v-btn>
 <v-card>
        <v-card-title class="card"
         >
          Confirm
        </v-card-title> 
          <v-divider></v-divider>
          <v-card-text>
            Are you sure? lets hope you know what your doing.</v-card-text>
<v-divider></v-divider>
<v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
  <v-btn class="teal" dark>
    Ok
  </v-btn> 
 <v-card>
        <v-card-title class="card"
         >
          transfer
        </v-card-title> 
          <v-divider></v-divider>
<v-card-text>
  Company
</v-card-text>
          <v-autocomplete
            label="Select a Company"
            outline
          ></v-autocomplete>
        
<v-card-text>
  Week
</v-card-text>
<v-autocomplete
            label="Select a Week"
            outline
          ></v-autocomplete>

<v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
 </v-card>

 </v-card>
</v-dialog>
<div class="search">
<v-card >
<div>
  <v-flex
  xs12
  md2>
  
  <v-text-field
      right
      flat
      append-icon="search"
      label="Search">
    </v-text-field>
  </v-flex>
<div class="text-xs-right">
        <v-btn class="teal" dark>
          Show
        </v-btn>
                <v-btn class="teal" dark>
          Tools
        </v-btn>
        </div>
</div>
<v-divider></v-divider>
  <v-card-text>
  #     Name
  </v-card-text>
  <v-divider></v-divider>
  <v-card-text>
  
  </v-card-text>
  </v-card>
</div>
</div>
</template>

<script>
  

  export default {
    
  }
</script>
<style>
.search{
  padding-left: 20px;
  padding-right: 20px;
}
</style>

