import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import CompanyPerf from './views/Companys/CompanyPerf.vue'
import AllCompanyPerformanceSummary from './views/Companys/AllCompanyPerformanceSummary.vue'
import AdminDashboard from './views/AdminDashboard.vue'
import IndustryPark from './views/Configurations/Registrations/IndustryPark.vue'
import Companies from './views/Configurations/Registrations/Companies.vue'
import Users from './views/Configurations/Adminstrations/Users.vue'
import Roles from './views/Configurations/Adminstrations/Roles.vue'
import Docs from './views/Configurations/Adminstrations/Docs.vue'
import Operations from './views/Configurations/Adminstrations/Operations.vue'
import Permissions from './views/Configurations/Adminstrations/Permissions.vue'
import DailyAllocationSummary from './views/Allocations/DailyAllocationSummary.vue'
import Allocation from './views/Allocations/Allocation.vue'
import ConfirmedAllocation from './views/Allocations/ConfirmedAllocation.vue'
import ManualAllocation from './views/Allocations/ManualAllocation.vue'
import AllocationResponse from './views/Allocations/AllocationResponse.vue'
import Company from './views/Companys/Company.vue'
import CompaniesMonthlyReport from './views/Companys/CompaniesMonthlyReport.vue'
import DetailMonthlyPlan from './views/Plans/DetailMonthlyPlan.vue'
import MonthlyPlanSummary from './views/Plans/MonthlyPlanSummary.vue'
import RampUpPlan from './views/Plans/RampUpPlan.vue'
import WeeklyRequest from './views/Requests/WeeklyRequest.vue'
import RequestList from './views/Requests/RequestList.vue'


import Calendar from './Pages/Calendar.vue'
import Login from './Pages/core/Login.vue'


Vue.use(Router)

export default new Router({
//    mode: 'history',
//    base: process.env.BASE_URL,
  routes: [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          breadcrumb: [
            { name: 'Dashboard' }
          ]
        }
      },
      {
        path: '/CompanyPerfs',
        name: 'CompanyPerfs',
        component: CompanyPerf,
        meta: {
            breadcrumb: [
              { name: 'Dashboard', href: 'Dashboard' },
              { name: 'CompanyPerf' }
            ]
          }
      },
      {
        path: '/Company',
        name: 'Company',
        component: Company,
        meta: {
            breadcrumb: [
              { name: 'Dashboard', href: 'Dashboard' },
              { name: 'Company' }
            ]
          }
      },
      {
        path: '/CMR',
        name: 'CMR',
        component: CompaniesMonthlyReport,
        meta: {
            breadcrumb: [
              { name: 'Dashboard', href: 'Dashboard' },
              { name: 'Companies Monthly Report' }
            ]
          }
      },
  
      {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Calendar' }
          ]
        }
      },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/Industry',
      name: 'Industry',
      component: IndustryPark,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Industry' }
        ]
      }
    },
    {
      path: '/Companies',
      name: 'Companies',
      component: Companies,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Companies' }
        ]
      }
    },
   
    {
      path: '/AllCompPerf',
      name: 'AllCompPerf',
      component: AllCompanyPerformanceSummary,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'AllCompPerf' }
        ]
      }
     
     },
    
     {
      path: '/AdminDb',
      name: 'AdminDb',
      component: AdminDashboard,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'AdminDb' }
        ]
      }
     
     },
     {
      path: '/Users',
      name: 'Users',
      component: Users,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Users' }
        ]
      }
     
     },
     {
      path: '/Roles',
      name: 'Roles',
      component: Roles,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Roles' }
        ]
      }
     
     },
     {
      path: '/Docs',
      name: 'Docs',
      component: Docs,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Docs' }
        ]
      }
     
     },
     {
      path: '/Operations',
      name: 'Operations',
      component: Operations,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Operations' }
        ]
      }
     
     },
     {
      path: '/Permissions',
      name: 'Permissions',
      component: Permissions,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Permissions' }
        ]
      }
     
     },
     {
        path: '/DailyAsummary',
        name: 'DailyAsummary',
        component: DailyAllocationSummary,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: ' Daily Allocation Summary' }
          ]
        }
       
       },
       {
        path: '/Allocation',
        name: 'Allocation',
        component: Allocation,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: ' Allocation' }
          ]
        }
       
       },
       {
        path: '/CA',
        name: 'CA',
        component: ConfirmedAllocation,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Confirmed Allocation' }
          ]
        }
       
       },
       {
        path: '/MA',
        name: 'MA',
        component: ManualAllocation,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Manual Allocation' }
          ]
        }
       
       },
       {
        path: '/AR',
        name: 'AR',
        component: AllocationResponse,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Allocation Response' }
          ]
        }
       
       },
       {
        path: '/DMP',
        name: 'DMP',
        component: DetailMonthlyPlan,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Detail Monthly Plan' }
          ]
        }
       
       },
       {
        path: '/MPS',
        name: 'MPS',
        component: MonthlyPlanSummary,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Monthly Plan Summary' }
          ]
        }
       
       },
       {
        path: '/RUP',
        name: 'RUP',
        component: RampUpPlan,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Ramp-Up-Plan' }
          ]
        }
       
       },

       {
        path: '/WR',
        name: 'WR',
        component: WeeklyRequest,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'Weekly Request' }
          ]
        }
       
       },

       {
        path: '/RL',
        name: 'RL',
        component: RequestList,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'Dashboard' },
            { name: 'RequestList' }
          ]
        }
       
       },
  ]
})