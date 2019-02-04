<template>

  <v-toolbar
    dark
    app
    class='blue-grey darken-4'>
    <v-toolbar-title>
      <v-toolbar-side-icon @click="toggleNavigationBar"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo-inverted
      append-icon="search"
      label="Search">
    </v-text-field>
    <v-spacer></v-spacer>

<v-dialog
      v-model="dialog"
      width="800"
      height="300">
      <v-btn icon slot="activator">
        <v-icon medium>fingerprint</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="card 'headline grey lighten-2' "
         >
          IDENTIFY
        </v-card-title>
        <v-divider></v-divider>
<v-radio-group v-model="row" row>
            <v-radio color="teal" label="Person" value="person"></v-radio>
            <v-radio color="teal" label="Supervisor" value="supervisor"></v-radio>
   </v-radio-group>
        <v-divider></v-divider>
        <v-card-text class="finger">
          <v-icon color="black" size="200">fingerprint</v-icon>
          <br>
          Finger Print
        </v-card-text>
       <div class="text-xs-center">
    <v-btn round color="teal" dark>Scan</v-btn>
  </div>
        <v-divider></v-divider>
    <v-checkbox label="Identify with ID?" v-model="checkbox1"></v-checkbox>
       <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

   
    <v-dialog
      v-model="dialogSettings"
      width="700">
      <v-card>
        <v-card-title class="headline"
          primary-title>
          Settings
        </v-card-title>
        <v-card-text>
          Set Up System User
          <v-form>
            <v-container>
              <v-layout row wrap>

                <v-flex xs12 xs6 md11>
                  <v-text-field
                    v-model="userEmail"
                    label="User Email"
                    hint="Set user email"/>
                </v-flex>

                <v-flex xs12 xs6 md1 />

                <v-flex xs12 sm6 md11>
                  <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                    :type="showPassword ? 'text' : 'password'"
                    label="New Password"
                    hint="Please choose a complex one.."
                    :error="error"
                    @click:append="showPassword = !showPassword" />
                </v-flex>

                <v-flex xs12 sm6 md1 />

                <v-flex xs12 sm6 md11>
                  <v-text-field
                    v-model="passwordConfirm"
                    :append-icon="showPasswordConfirm ? 'visibility_off' : 'visibility'"
                    :type="showPasswordConfirm ? 'text' : 'password'"
                    label="Confirm New Password"
                    hint="and confirm it."
                    :error="error"
                    @click:append="showPasswordConfirm = !showPasswordConfirm" />
                </v-flex>

                <v-flex xs12 sm6 md1 />

                <v-flex xs12 xs6 md11>
                  <v-switch
                    label="Email Notification"
                    color="success"
                    v-model="switchEmailNotification" />
                </v-flex>

                <v-flex xs12 xs6 md1 />

              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="setUpSettings">
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="showResult"
      :timeout="2000"
      top>
      {{ result }}
    </v-snackbar>

    <v-menu bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">

      <v-btn icon flat slot="activator" @click="notifications.map(x => x.isActive = false)">
        <v-badge color="error" overlap>
          <span slot="badge" v-if="notifications.filter(x => x.isActive).length > 0">
             {{ notifications.filter(x => x.isActive).length }}
          </span>
        <v-icon color="white">mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-card class="elevation-0">
        <v-toolbar card dense color="transparent">
          <v-toolbar-title><h5>You have {{ notifications.length }} new notification(s)</h5></v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-0">
          <v-list two-line class="pa-0">
          <template v-for="(item, index) in notifications">
            <v-divider :key="index" />
            <v-list-tile avatar :key="item.title">
            <v-list-tile-avatar :color="item.color">
              <v-icon dark>{{item.icon}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action class="caption">
              {{item.actionAt}}
            </v-list-tile-action>
            </v-list-tile>
          </template>
          </v-list>
          <v-divider></v-divider>
          <v-btn block flat v-if="false">See all notifications</v-btn>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </v-menu>

    <v-menu bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">
      <v-btn icon large flat slot="activator" :ripple="false">
        <v-avatar size="40px">
          <v-avatar color="blue-darken-grey">
      <v-icon dark>account_circle</v-icon>
    </v-avatar>
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item,index) in items"
          :key="index"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          @click="item.click">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>

export default {
  data() {
    return {
      checkbox1: false,
      row: null,
      dialog: false,
      dialogSettings: false,
      switchEmailNotification: true,
      showPassword: null,
      showPasswordConfirm: null,
      userEmail: null,
      password: null,
      passwordConfirm: null,
      error: false,
      showResult: false,
      result: '',
      items: [
        {
          icon: 'mdi-face',
          href: '#',
          title: 'Profile',
          click: () => {
            const vm = this;

            vm.$router.push({ name: 'profile' });
          }
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Settings',
          click: () => {
            const vm = this;

            vm.dialogSettings = true;
          }
        },
        {
          icon: 'exit_to_app',
          href: '#',
          title: 'Log Out',
          click: () => {
            const vm = this;

            vm.$router.push({ name: 'Login' });
          }
        }
      ],
      notifications:
      [
        {
          title: 'New mail from Adam Joe',
          color: 'light-blue',
          icon: 'email',
          actionAt: '12 min ago',
          isActive: true,
          onClick: () => {
            const vm = this;

            vm.$router.push({ name: 'Docs' });
          }
        },
        {
          title: 'Scheculed meeting',
          color: 'red',
          icon: 'calendar_today',
          actionAt: '46 min ago',
          isActive: true,
          onClick: () => {
            const vm = this;

            vm.$router.push({ name: 'Calendar' });
          }
        },
        {
          title: 'New mail from Github',
          color: 'light-blue',
          icon: 'email',
          isActive: true,
          timeLabel: '2 hour ago',
          onClick: () => {
            const vm = this;

            vm.$router.push({ name: 'Docs' });
          }
        }
      ]
    }
  },

  methods: {
    toggleNavigationBar() {
      const vm = this;

      vm.$emit('toggleNavigationBar');
    },

    setUpSettings() {
      const vm = this;

      if (vm.userEmail === null || vm.password === null || vm.passwordConfirm === null) {

        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      if (vm.password !== vm.passwordConfirm) {

        vm.error = true;
        vm.result = "Passwords does not match the confirm password.";
        vm.showResult = true;

        return;
      }

      vm.$root.userEmail = vm.userEmail;
      vm.$root.userPassword = vm.password;

      vm.result = "Email and password changed succesfully.";
      vm.showResult = true;

      vm.dialogSettings = false;
    }
  }
};
</script>
<style>
  #core-toolbar a {
    text-decoration: none;

  }
  .finger {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  
  }
  .btn{
    color: teal;
    
  }
  .card{
    text-align: left;
    font-size: 30px;
    font-weight: bold;
  }
 
</style>