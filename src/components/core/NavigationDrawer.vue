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

       <v-list-tile class="teal--text" @click="changeRoute('Calendar', 2)">
        <v-list-tile-action>
          <v-icon class="teal--text">calendar_today</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">Calendar</v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('CompanyPerf', 3)">
        <v-list-tile-action>
          <v-icon class="teal--text">question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">Company performance</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('AllCompanyPerformanceSummary', 4)">
        <v-list-tile-action>
          <v-icon class="teal--text">question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">All Company Performance Summary</v-list-tile-title>
      </v-list-tile>

 <v-list-tile class="teal--text" @click="changeRoute('AdminDb', 5)">
        <v-list-tile-action>
          <v-icon class="teal--text">gavel</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 5}, 'item-title' ]">Admin Dashboard</v-list-tile-title>
      </v-list-tile>

      <v-list-tile class="teal--text" @click="changeRoute('DailyAsummary', 6)">
        <v-list-tile-action>
          <v-icon class="teal--text">assignment</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Daily Allocation Summary</v-list-tile-title>
      </v-list-tile>

  <v-list-group
        prepend-icon="settings"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Configurations</v-list-tile-title>
   
    </v-list-tile>

      <v-list-group
      sub-group
        >
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Registration</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Industry', 6)">
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 6}, 'item-title' ]">Industry Park</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Companies', 7)">
          <v-list-tile-action>
            <v-icon>account_balance</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">Companies</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
  </v-list-group>
      <v-list-group
        sub-group>
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Adminstrations</v-list-tile-title>
        </v-list-tile>

      <v-list-tile @click="changeRoute('Users', 8)">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 8}, 'item-title' ]">Users</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Roles', 9)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 9}, 'item-title' ]">Roles</v-list-tile-title>
        </v-list-tile>
<v-list-tile @click="changeRoute('Docs', 10)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 10}, 'item-title' ]">Docs</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Operations', 11)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 11}, 'item-title' ]">Operations</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Permissions', 12)">
          <v-list-tile-action>
            <!-- <v-icon class='cyan'>account_balance</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 12}, 'item-title' ]">Permissions</v-list-tile-title>
        </v-list-tile>
     </v-list-group>

<v-list-group
 prepend-icon="enhanced_encryption"
        >
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Authorization</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
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
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
