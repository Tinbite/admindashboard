<template>
<div class="profile">
<v-tabs class="tab"
        slot="extension"
        v-model="tab"
        color="grey lighten-2"
        align-with-title
      >
        <v-tabs-slider color="cyan"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-left
      wrap
    >
      <v-flex
        xs126
        md8
      >
      <v-card>
        <v-card-title ref="form" class="basic-details">
          Basic Details
        </v-card-title>
<v-divider></v-divider>
          
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            required
                  />
                </v-flex>
                <v-flex
                  xs12
                  md5
                >
                  <v-text-field
                    label="Email Address"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Phone .No"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Type"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="teal"
                    dark
                  >
                    Save
                  </v-btn>
                
                </v-flex>
              </v-layout>
            </v-container>
                </v-card>
                  <br>
                  <v-card>
                <v-card-title class="address-details">
                  Address Details</v-card-title>
                <v-divider></v-divider>
            <v-container py-0>
              <v-layout wrap>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Location"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md5>
                  <v-text-field
                    label="Industry park"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Region"
                    class="purple-input"/>
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    class="purple-input"
                    label="Zone"
                    type="number"/>
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="City"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="Woreda"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    label="Kebele"
                  />
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light"
                    color="teal"
                    dark
                  >
                    Save address
                  </v-btn>
                
                </v-flex>
              </v-layout>
            </v-container>
      </v-card>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <v-card>
          <v-divider></v-divider>
          <div class="text-xs-center">
         <v-card-text>
          <v-icon size="200">mdi-account-circle</v-icon>
        </v-card-text>
          </div>
        <v-divider></v-divider>
           <div class="text-xs-center">
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="teal"
      class="white--text"
      @click="loader = 'loading3'"
    >
      Upload
      <v-icon right dark>cloud_upload</v-icon>
    </v-btn>
  </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
      </v-tab-item>
    </v-tabs-items>
    </div>
</template>

<script>
export default {
  data(){
    return{
      loader: null,
      loading3: false,
      tab:null,
      errorMessages:'',
      name:null,
      formHasErrors: false,
        items: ['Basic Information','System Password']
    }
  },
   watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
}
</script>
<style>
.basic-details{
  font-size: 20px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;

}
.address-details{
  font-size: 20px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}
.tab{
  padding-left: 10px;
  padding-right: 10px;
}
.profile{
  background-color:#E0E0E0;
}
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>



