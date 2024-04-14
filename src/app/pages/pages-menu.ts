import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Patients',
    icon: 'person-outline',
    children: [
      {
        title: 'Reservations',
        link: '/pages/patients/reservations',
      },
      {
        title: 'Patients',
        link: '/pages/patients',
      }
    ]
  },
  {
    title: 'Clinics',
    icon: 'people-outline',
    children: [
      {
        title: 'Table',
        link: '/pages/clinics/clinics-list',
      }
    ]
  },

  {
    title: 'Doctors',
    icon: 'person-add-outline',
    children: [
      {
        title: 'Table',
        link: '/pages/doctors/doctor-table',
      }
    ]
  },
  {
    title: 'Schedule',
    icon: 'calendar-outline',
    children: [
      {
        title: 'Table',
        link: '/pages/schedule/schedule-table',
      },
      {
        title: 'View',
        link: '/pages/schedule/view',
      }
    ]
  },
  {
    title: 'Vacation',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Table',
        link: '/pages/vacation/vacation-table',
      } 
    ]
  },
  {
    title: 'User',
    icon: 'person-outline',
    children: [
      {
        title: 'Role',
        link: '/pages/user',
      }
    ]
  },  
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },

 
];

