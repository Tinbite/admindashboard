<template>
<div class="newallocation">
   <v-card>
     <v-form>
<v-container>
    <v-layout
  wrap
    >
    <v-flex xs12 >
        <v-card-text class="newA">
          Select Company
        </v-card-text>
        <v-flex xs12>
          <v-autocomplete
          color="blue"
            label="Select a company"
            outline
          ></v-autocomplete>
        </v-flex>
        <v-card-text class="newA">Allocated Date</v-card-text>
        <v-flex
                  xs12>
            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker in menu"
          append-icon="event"
          readonly
          outline
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
        </v-flex>
        <v-card-text class="newA">
          Allocated by
        </v-card-text>
         <v-flex
                  xs12>
          <v-text-field
          color="blue"
            label="Allocated by"
            outline
          ></v-text-field>
         </v-flex>
          
          <v-card-text class="newA">
          Allocated Amount
          </v-card-text>
        <v-flex
                  xs12>
          <v-autocomplete
          color="blue"
            label="Select a company"
            outline
            v-model="number"
          ></v-autocomplete>
        </v-flex>
      
    <v-card-text class="newA">
        Description
    </v-card-text>
    <v-flex xs12>
        <v-textarea
        color="blue"
          outline
          name="input-7-4"
          label="Outline textarea"
          value=""
        ></v-textarea>
        <div class="text-xs-right">
         <v-btn 
  class="mx-0 font-weight-light"
     dark
     color="teal"
 @click="changeRoute('MA', 1)">
      Cancel
    </v-btn>
    <v-btn 
  class="mx-0 font-weight-light"
  color="teal"
     dark>
      Save
    </v-btn>
        </div>
    </v-flex>
    </v-flex>
    </v-layout>
</v-container>
     </v-form>
   </v-card>
</div>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      number:null
    }),
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
.newallocation {
  padding-left: 30px;
    padding-right: 30px;

}
.newA{
     font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-weight: bold;
}

</style>
