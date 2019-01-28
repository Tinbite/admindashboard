// import Vue from 'vue'
// import Router from 'vue-router'

// import Dashboard from './views/Dashboard.vue'
// import CompanyPerf from './views/CompanyPerf.vue'
// import AllCompanyPerformanceSummary from './views/AllCompanyPerformanceSummary.vue'
// import AdminDashboard from './views/AdminDashboard.vue'
// import IndustryPark from './views/IndustryPark.vue'
// import Companies from './views/Companies.vue'
// import Users from './views/Users.vue'
// import Roles from './views/Roles.vue'
// import Docs from './views/Docs.vue'
// import Operations from './views/Operations.vue'
// import Permissions from './views/Permissions.vue'

// import Calendar from './Pages/Calendar.vue'
// import Login from './Pages/core/Login.vue'


// Vue.use(Router)

// export default new Router({
// //    mode: 'history',
// //    base: process.env.BASE_URL,
//   routes: [
//     {
//         path: '/dashboard',
//         name: 'dashboard',
//         component: Dashboard,
//         meta: {
//           breadcrumb: [
//             { name: 'Dashboard' }
//           ]
//         }
//       },
//       {
//         path: '/CompanyPerfs',
//         name: 'CompanyPerfs',
//         component: CompanyPerf,
//         meta: {
//             breadcrumb: [
//               { name: 'Dashboard', href: 'Dashboard' },
//               { name: 'CompanyPerf' }
//             ]
//           }
//       },
//       {
//         path: '/calendar',
//         name: 'Calendar',
//         component: Calendar,
//         meta: {
//           breadcrumb: [
//             { name: 'Dashboard', href: 'Dashboard' },
//             { name: 'Calendar' }
//           ]
//         }
//       },
//     {
//       path: '/Login',
//       name: 'Login',
//       component: Login,
//       meta: {
//         allowAnonymous: true
//       }
//     },
//     {
//       path: '/Industry',
//       name: 'Industry',
//       component: IndustryPark,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Industry' }
//         ]
//       }
//     },
//     {
//       path: '/Companies',
//       name: 'Companies',
//       component: Companies,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Companies' }
//         ]
//       }
//     },
   
//     {
//       path: '/AllCompPerf',
//       name: 'AllCompPerf',
//       component: AllCompanyPerformanceSummary,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'AllCompPerf' }
//         ]
//       }
     
//      },
    
//      {
//       path: '/AdminDb',
//       name: 'AdminDb',
//       component: AdminDashboard,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'AdminDb' }
//         ]
//       }
     
//      },
//      {
//       path: '/Users',
//       name: 'Users',
//       component: Users,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Users' }
//         ]
//       }
     
//      },
//      {
//       path: '/Roles',
//       name: 'Roles',
//       component: Roles,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Roles' }
//         ]
//       }
     
//      },
//      {
//       path: '/Docs',
//       name: 'Docs',
//       component: Docs,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Docs' }
//         ]
//       }
     
//      },
//      {
//       path: '/Operations',
//       name: 'Operations',
//       component: Operations,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Operations' }
//         ]
//       }
     
//      },
//      {
//       path: '/Permissions',
//       name: 'Permissions',
//       component: Permissions,
//       meta: {
//         breadcrumb: [
//           { name: 'Dashboard', href: 'Dashboard' },
//           { name: 'Permissions' }
//         ]
//       }
     
//      },
//   ]
// })