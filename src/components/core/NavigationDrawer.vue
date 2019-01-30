<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app
    class='blue-grey darken-4'>
    <v-toolbar flat dark>
        <v-toolbar-title class="toolbar">
         Hahu jobs
        </v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-tile class="teal--text" @click="changeRoute('dashboard', 1)">
        <v-list-tile-action>
          <v-icon class="teal--text">dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >Dashboard</v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('AdminDb', 2)">
        <v-list-tile-action>
          <v-icon class="teal--text">gavel</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Admin Dashboard</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('Calendar', 3)">
        <v-list-tile-action>
          <v-icon class="teal--text">calendar_today</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Calendar</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="assignment"
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Plans</v-list-tile-title>
    </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('RUP', 4)">
        <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">Ramp-Up-Plan</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('DMP', 5)">
        <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Detail Monthly Plan Summary</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('MPS', 6)">
        <v-list-tile-action>
          <v-icon ></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Monthly Plan Summary</v-list-tile-title>
      </v-list-tile>
      </v-list-group>

<v-list-group
        prepend-icon="account_balance"
        collor
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Companys</v-list-tile-title>
    </v-list-tile>

  <v-list-tile class="teal--text" @click="changeRoute('Company', 7)">
        <v-list-tile-action>
          <v-icon class="teal--text">question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">Company</v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('CompanyPerf', 8)">
        <v-list-tile-action>
          <v-icon class="teal--text">question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 8}, 'item-title' ]">Company performance</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('AllCompPerf', 9)">
        <v-list-tile-action>
          <v-icon class="teal--text">question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 9}, 'item-title' ]">All Company Performance Summary</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('CMR', 10)">
        <v-list-tile-action>
          <v-icon class="teal--text">question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 10}, 'item-title' ]">Companies Monthly Report</v-list-tile-title>
      </v-list-tile> 
</v-list-group>
  
  <v-list-group
        prepend-icon="replay"
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Requests</v-list-tile-title>
    </v-list-tile>

     <v-list-tile class="teal--text" @click="changeRoute('WR', 11)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 11}, 'item-title' ]">Weekly Request</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('RL', 12)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 12}, 'item-title' ]">Request List</v-list-tile-title>
      </v-list-tile>
  </v-list-group>

<v-list-group
        prepend-icon="subdirectory_arrow_right"
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Allocations</v-list-tile-title>
    </v-list-tile>

   <v-list-tile class="teal--text" @click="changeRoute('Allocation', 13)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 13}, 'item-title' ]">Allocation</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('MA', 14)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 14}, 'item-title' ]">Manual Allocation</v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('DailyAsummary', 15)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 15}, 'item-title' ]">Daily Allocation Summary</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('AR', 16)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 16}, 'item-title' ]">Allocation Response</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('CA', 17)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 17}, 'item-title' ]">Confirmed Allocation</v-list-tile-title>
      </v-list-tile>
</v-list-group>

<v-list-group
        prepend-icon="person"
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Pools</v-list-tile-title>
    </v-list-tile>

<v-list-tile class="teal--text" @click="changeRoute('Pool', 18)">
        <v-list-tile-action>
          <v-icon class="teal--text">person</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 18}, 'item-title' ]">Pool</v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('SP', 19)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 19}, 'item-title' ]">Staging Pool</v-list-tile-title>
      </v-list-tile>
</v-list-group>

<v-list-group
        prepend-icon="settings"
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Reports</v-list-tile-title>
    </v-list-tile>

<v-list-tile class="teal--text" @click="changeRoute('CP', 20)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 20}, 'item-title' ]">Companies Performance</v-list-tile-title>
      </v-list-tile>    

      <v-list-tile class="teal--text" @click="changeRoute('WPC', 21)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 21}, 'item-title' ]">Workers PerCompany</v-list-tile-title>
      </v-list-tile>
</v-list-group>

  <v-list-group
        prepend-icon="settings"
        class="teal--text"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Configurations</v-list-tile-title>
   
    </v-list-tile>

      <v-list-group
      sub-group
      class="teal--text"
        >
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Registration</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="teal--text" @click="changeRoute('Industry', 22)">
          <v-list-tile-action>
            <v-icon class="teal--text">business</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 22}, 'item-title' ]">Industry Park</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="teal--text" @click="changeRoute('Companies', 23)">
          <v-list-tile-action>
            <v-icon class="teal--text">account_balance</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 23}, 'item-title' ]">Companies</v-list-tile-title>
        </v-list-tile>
      
        <v-list-tile class="teal--text" @click="changeRoute('Reasons', 24)">
          <v-list-tile-action>
            <v-icon class="teal--text">account_balance</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 24}, 'item-title' ]">Reasons</v-list-tile-title>
        </v-list-tile>

<v-list-tile class="teal--text" @click="changeRoute('Locations', 25)">
          <v-list-tile-action>
            <v-icon class="teal--text">add_location</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 25}, 'item-title' ]">Locations</v-list-tile-title>
        </v-list-tile>
 
 <v-list-tile class="teal--text" @click="changeRoute('Regions', 26)">
          <v-list-tile-action>
            <v-icon class="teal--text"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 26}, 'item-title' ]">Regions</v-list-tile-title>
        </v-list-tile>
      
   <v-list-tile class="teal--text" @click="changeRoute('Zones', 27)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 27}, 'item-title' ]">Zones</v-list-tile-title>
        </v-list-tile> 

 <v-list-tile class="teal--text" @click="changeRoute('Woredas', 28)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 28}, 'item-title' ]">Woredas</v-list-tile-title>
        </v-list-tile>

        <v-list-tile class="teal--text" @click="changeRoute('Kebeles', 29)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 29}, 'item-title' ]">Kebeles</v-list-tile-title>
        </v-list-tile>

        <v-list-tile class="teal--text" @click="changeRoute('Cities', 30)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 30}, 'item-title' ]">Cities</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

 <v-list-tile class="teal--text" @click="changeRoute('GL', 31)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 31}, 'item-title' ]">Grading Labels</v-list-tile-title>
        </v-list-tile>
<v-list-tile class="teal--text" @click="changeRoute('PS', 32)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 32}, 'item-title' ]">Period setting</v-list-tile-title>
        </v-list-tile>

<v-list-tile class="teal--text" @click="changeRoute('Test', 33)">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 33}, 'item-title' ]">Test</v-list-tile-title>
        </v-list-tile>

      <v-list-group
        sub-group
        class="teal--text">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Adminstrations</v-list-tile-title>
        </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('Users', 34)">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 34}, 'item-title' ]">Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="teal--text" @click="changeRoute('Roles', 35)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 35}, 'item-title' ]">Roles</v-list-tile-title>
        </v-list-tile>
<v-list-tile class="teal--text" @click="changeRoute('Docs', 36)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 36}, 'item-title' ]">Docs</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="teal--text" @click="changeRoute('Operations', 37)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 37}, 'item-title' ]">Operations</v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="teal--text" @click="changeRoute('Permissions', 38)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 38}, 'item-title' ]">Permissions</v-list-tile-title>
        </v-list-tile>
     </v-list-group>
  </v-list-group>
    
    <v-list-tile class="teal--text" @click="changeRoute('Manage', 39)">
        <v-list-tile-action>
          <v-icon class="teal--text"></v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 39}, 'item-title' ]">Manage</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('Person', 40)">
        <v-list-tile-action>
          <v-icon class="teal--text">list_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 40}, 'item-title' ]">Person</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('EP', 41)">
        <v-list-tile-action>
          <v-icon class="teal--text">list_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 41}, 'item-title' ]">Exisiting Person</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('Supervisor', 42)">
        <v-list-tile-action>
          <v-icon class="teal--text">supervisor_account</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 42}, 'item-title' ]">Supervisor</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('Abslist', 43)">
        <v-list-tile-action>
          <v-icon class="teal--text">list_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 43}, 'item-title' ]">AbscandList</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('CL', 44)">
        <v-list-tile-action>
          <v-icon class="teal--text">list_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 44}, 'item-title' ]">Call list</v-list-tile-title>
      </v-list-tile>
 <v-list-tile class="teal--text" @click="changeRoute('SR', 45)">
        <v-list-tile-action>
          <v-icon class="teal--text">list_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 45}, 'item-title' ]">Screening Report</v-list-tile-title>
      </v-list-tile>

       <v-list-tile class="teal--text" @click="changeRoute('MR', 46)">
        <v-list-tile-action>
          <v-icon class="teal--text">list_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 46}, 'item-title' ]">Monthly Report</v-list-tile-title>
      </v-list-tile>
<v-list-group
 prepend-icon="enhanced_encryption"
 class="teal--text"
        >
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Authorization</v-list-tile-title>
        </v-list-tile>

        <v-list-tile  class="teal--text" @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">Login</v-list-tile-title>
        </v-list-tile>
    </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
        type: Boolean,
        required: false,
        default: true
    }
  },

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
  .toolbar {
    font-weight: lighter;
    font-size: 30px;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 15px;
    font-weight: 300;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 300;
  }

  .active {
    font-weight: lighter;
  }
  
</style>
