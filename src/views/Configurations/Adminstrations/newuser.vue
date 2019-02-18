<template>
<div class="newallocation">
   <v-card>
     <v-form>
<v-container>
    <v-layout
  wrap
    >
    <v-flex xs12 >
        <v-card-text>
          Full name
        </v-card-text>
          <v-flex
                  xs12>
          <v-text-field
                 color="blue"
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            required
            outline
          ></v-text-field>
        </v-flex>
        <v-card-text >
          Phone Number
        </v-card-text>
         <v-flex
                  xs12>
          <v-text-field
           v-model="phone"
        color="blue"
        label="Phone number"
        mask="phone"
            outline
          ></v-text-field>
          </v-flex>
 <v-card-text >
          Role
          </v-card-text>
        <v-flex
                  xs12>
          <v-autocomplete
          color="blue"
            label="Role"
            outline
          ></v-autocomplete>
        </v-flex>
        <v-divider></v-divider>
 <v-card-text >
       Industry park
    </v-card-text>
    </v-flex>
    <v-flex xs12>
        <v-text-field
        color="blue"
          outline
          label="Industry park"
        ></v-text-field>
        </v-flex>
<v-card-text >
       Location
    </v-card-text>
    <v-flex xs12>
        <v-text-field
        color="blue"
          outline
          label="location"
        ></v-text-field>
    </v-flex>
     <v-card-text >
       Region
    </v-card-text>
    
    <v-flex xs12>
        <v-autocomplete
        color="blue"
          outline
          label="Region"
        ></v-autocomplete>
    </v-flex>
    <v-divider></v-divider>
 <v-card-text >
       Zone
    </v-card-text>
    <v-flex xs12>
        <v-autocomplete
        color="blue"
          outline
          label="select zone"
        ></v-autocomplete>
    </v-flex>
 <v-card-text>
       city
    </v-card-text>
    
    <v-flex xs12>
        <v-autocomplete
        color="blue"
          outline
          label="select city"
        ></v-autocomplete>
    </v-flex>

     <v-card-text >
       Woreda
    </v-card-text>
    
    <v-flex xs12>
        <v-autocomplete
        color="blue"
          outline
          label="select woreda"
        ></v-autocomplete>
    </v-flex>
     <v-card-text >
       Kebele
    </v-card-text>
    
    <v-flex xs12>
        <v-autocomplete
        color="blue"
          outline
          label="select kebele"
        ></v-autocomplete>
    </v-flex>
<v-divider></v-divider>
      
        <v-card-text >
          Email
        </v-card-text>
          <v-flex
                  xs12>
          <v-text-field
           v-model="email"
        :rules="[rules.email]"
        color="blue"
        label="Email address"
        type="email"
        outline
          ></v-text-field>
        </v-flex>
          <v-card-text >
         Password
        </v-card-text>
          <v-flex
                  xs12>
         <v-text-field
        v-model="Password"
        color="blue"
        label="password"
        outline
      ></v-text-field>
                </v-flex>
         
             <v-card-text >
         Confirm Password
        </v-card-text>
          <v-flex
                  xs12>
         <v-text-field
        v-model="Password"
        color="blue"
        label="confirm password"
        outline
      ></v-text-field>
                </v-flex>
        <div class="text-xs-right">
         <v-btn 
  class="mx-0 font-weight-light"
     dark
     color="teal"
 @click="changeRoute('Users', 1)">
      Cancel
    </v-btn>
    <v-btn 
  class="mx-0 font-weight-light"
  color="teal"
     dark>
      Save
    </v-btn>
        </div>
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
      number:null,
      email: undefined,
      phone: undefined,
      password:undefined,
      errorMessages:'',
      name:null,
      rules: {
        email: v => (v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        required: v => !!v || 'This field is required',
    },
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
