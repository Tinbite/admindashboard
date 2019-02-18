import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Person from './views/Person.vue'
import ExsitingPerson from './views/ExsitingPerson.vue'
import Supervisor from './views/Supervisor.vue'
import Manage from './views/Manage.vue'
import AbscandList from './views/AbscandList.vue'
import CallList from './views/CallList.vue'
import MonthlyReport from './views/MonthlyReport.vue'
import ScreeningReport from './views/ScreeningReport.vue'
import CompanyPerf from './views/Companys/CompanyPerf.vue'
import AllCompanyPerformanceSummary from './views/Companys/AllCompanyPerformanceSummary.vue'
import AdminDashboard from './views/AdminDashboard.vue'
import IndustryPark from './views/Configurations/Registrations/IndustryPark.vue'
import Reasons from './views/Configurations/Registrations/Reasons.vue'
import Regions from './views/Configurations/Registrations/Regions.vue'
import Zones from './views/Configurations/Registrations/Zones.vue'
import newperiodsetting from './views/Configurations/newperiodsetting.vue'
import newuser from './views/Configurations/Adminstrations/newuser.vue'
import Category from './views/Configurations/Registrations/Category.vue'
import Woredas from './views/Configurations/Registrations/Woredas.vue'
import Cities from './views/Configurations/Registrations/Cities.vue'
import Kebeles from './views/Configurations/Registrations/Kebeles.vue'
import Locations from './views/Configurations/Registrations/Locations.vue'
import Companies from './views/Configurations/Registrations/Companies.vue'
import Users from './views/Configurations/Adminstrations/Users.vue'
import Roles from './views/Configurations/Adminstrations/Roles.vue'
import Docs from './views/Configurations/Adminstrations/Docs.vue'
import Operations from './views/Configurations/Adminstrations/Operations.vue'
import Permissions from './views/Configurations/Adminstrations/Permissions.vue'
import DailyAllocationSummary from './views/Allocations/DailyAllocationSummary.vue'
import newallocation from './views/Allocations/newallocation.vue'
import Allocation from './views/Allocations/Allocation.vue'
import ConfirmedAllocation from './views/Allocations/ConfirmedAllocation.vue'
import ManualAllocation from './views/Allocations/ManualAllocation.vue'
import AllocationResponse from './views/Allocations/AllocationResponse.vue'
import Company from './views/Companys/Company.vue'
import CompaniesMonthlyReport from './views/Companys/CompaniesMonthlyReport.vue'
import DetailMonthlyPlan from './views/Plans/DetailMonthlyPlan.vue'
import MonthlyPlanSummary from './views/Plans/MonthlyPlanSummary.vue'
import RampUpPlan from './views/Plans/RampUpPlan.vue'
import addingnewrequest from './views/Requests/addingnewrequest.vue'
import WeeklyRequest from './views/Requests/WeeklyRequest.vue'
import RequestList from './views/Requests/RequestList.vue'
import Pool from './views/Pools/Pool.vue'
import StagingPool from './views/Pools/StagingPool.vue'
import GradingLables from './views/Configurations/GradingLables.vue'
import PeriodSetting from './views/Configurations/PeriodSetting.vue'
import Test from './views/Configurations/Test.vue'



import Calendar from './Pages/Calendar.vue'
import Login from './Pages/core/Login.vue'
import Profile from './Pages/core/Profile.vue'


Vue.use(Router)

export default new Router({
//    mode: 'history',
//    base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          breadcrumb: [
            { name: 'Dashboard' }
          ]
        }
      },
      {
        path: '/CompanyPerf',
        name: 'CompanyPerf',
        component: CompanyPerf,
        meta: {
            breadcrumb: [
              { name: 'Dashboard', href: 'dashboard' },
              { name: 'Company performance' }
            ]
          }
      },
      {
        path: '/Company',
        name: 'Company',
        component: Company,
        meta: {
            breadcrumb: [
              { name: 'Dashboard', href: 'dashboard' },
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
              { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Industry' }
        ]
      }
    },
    {
      path: '/Reasons',
      name: 'Reasons',
      component: Reasons,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Reasons' }
        ]
      }
    },
    {
      path: '/Locations',
      name: 'Locations',
      component: Locations,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Locations' }
        ]
      }
    },
    {
      path: '/Zones',
      name: 'Zones',
      component: Zones,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Zones' }
        ]
      }
    },
    {
      path: '/Kebeles',
      name: 'Kebeles',
      component: Kebeles,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Kebeles' }
        ]
      }
    },
    {
      path: '/Woredas',
      name: 'Woredas',
      component: Woredas,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Woredas' }
        ]
      }
    },
    {
      path: '/pnew',
      name: 'pnew',
      component: newperiodsetting,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Adding new period setting' }
        ]
      }
    },
    {
      path: '/Cities',
      name: 'Cities',
      component: Cities,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Cities' }
        ]
      }
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: newuser,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'New user' }
        ]
      }
    },
    {
      path: '/Regions',
      name: 'Regions',
      component: Regions,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Regions' }
        ]
      }
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
          { name: 'Category' }
        ]
      }
    },
    {
      path: '/Companies',
      name: 'Companies',
      component: Companies,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
          { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
            { name: ' Allocation' }
          ]
        }
       
       },
       {
        path: '/newallocation',
        name: 'new',
        component: newallocation,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: ' Manual Allocation' }
          ]
        }
       
       },
       {
        path: '/CA',
        name: 'CA',
        component: ConfirmedAllocation,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Ramp-Up-Plan' }
          ]
        }
       
       },
       {
        path: '/addnewrequest',
        name: 'addnew',
        component: addingnewrequest,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'WR' },
            { name: 'Register new Labour request' }
          ]
        }
       
       },

       {
        path: '/WR',
        name: 'WR',
        component: WeeklyRequest,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
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
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'RequestList' }
          ]
        }
       
       },
       {
        path: '/Pool',
        name: 'Pool',
        component: Pool,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Pool' }
          ]
        }
       
       },
       {
        path: '/SP',
        name: 'SP',
        component: StagingPool,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'StagingPool' }
          ]
        }
       
       },
       {
        path: '/Person',
        name: 'Person',
        component: Person,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Person' }
          ]
        }
       
       },
       {
        path: '/EP',
        name: 'EP',
        component: ExsitingPerson,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Exsiting Person' }
          ]
        }
       
       },

       {
        path: '/GL',
        name: 'GL',
        component: GradingLables,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Grading Lables' }
          ]
        }
       
       },

       
       {
        path: '/PS',
        name: 'PS',
        component: PeriodSetting,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Period Setting' }
          ]
        }
       },
       
       {
        path: '/Test',
        name: 'Test',
        component: Test,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Test' }
          ]
        }
       
       },
       {
        path: '/Manage',
        name: 'Manage',
        component: Manage,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Manage' }
          ]
        }
       },

       {
        path: '/Supervisor',
        name: 'Supervisor',
        component: Supervisor,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Supervisor' }
          ]
        }
       },

       {
        path: '/Abslist',
        name: 'Abslist',
        component: AbscandList,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Supervisor' }
          ]
        }
       },
       {
        path: '/CL',
        name: 'CL',
        component: CallList,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'Call List' }
          ]
        }
       },
       {
        path: '/MR',
        name: 'MR',
        component: MonthlyReport,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'MonthlyReport' }
          ]
        }
       },
       {
        path: '/SR',
        name: 'SR',
        component: ScreeningReport,
        meta: {
          breadcrumb: [
            { name: 'Dashboard', href: 'dashboard' },
            { name: 'ScreeningReport' }
          ]
        }
       },
       {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
          breadcrumb: [
            { name: 'Profile', href: 'profile' },
           
          ]
        }
       }, 
  ]
})