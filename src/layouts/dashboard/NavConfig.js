// component
import { Groups } from '@mui/icons-material';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
// const jasmin

const navConfig = [
  // links:[
  {
    id: 1,
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    id: 2,
    title: 'jasmin',
    path: '/dashboard/jasmin',
    icon: getIcon('eva:shopping-bag-fill'),
    values: [{
      title: 'jasmin groups',
      path: '/dashboard/jasmin-groups',
      // icon: getIcon('eva:shopping-bag-fill'),
    },
    {
      title: 'jasmin users',
      path: '/dashboard/jasmin-users',
      // icon: getIcon('eva:shopping-bag-fill'),
    },
    {
      title: 'smpp providers',
      path: '/dashboard/smpp-providers',
      // icon: getIcon('eva:shopping-bag-fill'),
    },
  ]
  },
  {
    id: 6,
    title: 'routes',
    path: '/dashboard/routes',
    icon: getIcon('material-symbols:alt-route'),
    values: [
      {
        title: 'route filters',
        path: '/dashboard/route-filters',
        // icon: getIcon('material-symbols:alt-route'),
      },
      {
        title: 'MO/MT routes',
        path: '/dashboard/mt-routes',
        // icon: getIcon('material-symbols:alt-route'),
      },
      {
        title: 'suppliers',
        path: '/dashboard/suppliers',
        // icon: getIcon('material-symbols:alt-route'),
      },
    ]
  },
 

  {
    id: 7,
    title: 'campaign manager',
    path: '/dashboard/campaign-manager',
    icon: getIcon('ic:baseline-campaign'),
    values: [
      {
        title: 'campaigns',
        path: '/dashboard/campaigns',
        // icon: getIcon('eva:file-text-fill'),
      },
      {
        title: 'contact',
        path: '/dashboard/contact',
        // icon: getIcon('eva:file-text-fill'),
      },
      {
        title: 'contact groups',
        path: '/dashboard/contact-groups',
        // icon: getIcon('eva:file-text-fill'),
      },
      {
        title: 'templates',
        path: '/dashboard/templates',
        // icon: getIcon('eva:file-text-fill'),
      },
    ]
  },
  // {
  //   title: 'auto responders',
  //   path: '/dashboard/autoresponders',
  //   // icon: getIcon('eva:file-text-fill'),
  // },
  
  
  
  // {
  //   title: 'polls',
  //   path: '/dashboard/polls',
  //   // icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'opt out list',
  //   path: '/dashboard/opt-out',
  //   // icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   // id: 8,
  //   title: 'create campaigns',
  //   path: '/dashboard/create-campaigns',
  //   icon: getIcon('ant-design:message-filled'),
  // },
  {
    id: 8,
    title: 'messaging center',
    path: '/dashboard/messaging-center',
    icon: getIcon('ant-design:message-filled'),
    values: [
      {
        title: 'send message',
        path: '/dashboard/send-message',
        // icon: getIcon('ant-design:message-filled'),
      },
      {
        title: 'SMS inbox',
        path: '/dashboard/sms-inbox',
        // icon: getIcon('ant-design:message-filled'),
      },
      {
        title: 'sent messages',
        path: '/dashboard/sent-messages',
        // icon: getIcon('ant-design:message-filled'),
      },
    ]
  },
  {
    id: 9,
    title: 'purchases',
    path: '/dashboard/purchases',
    icon: getIcon('ant-design:dollar-circle-filled'),
  },
  {
    id: 10,
    title: 'clients',
    path: '/dashboard/clients',
    icon: getIcon('eva:people-fill'),
  },
  // {
  //   id: 11,
  //   title: 'tools',
  //   path: '/dashboard/tools',
  //   icon: getIcon('fa-solid:tools'),
  // },
  // {
  //   title: 'SMPP tools',
  //   path: '/dashboard/smpp-tools',
  //   // icon: getIcon('fa-solid:tools'),
  // },
  // {
  //   title: 'send HTTP request',
  //   path: '/dashboard/http-requests',
  //   // icon: getIcon('fa-solid:tools'),
  // },

  {
    id: 12,
    title: 'settings',
    path: '/dashboard/settings',
    icon: getIcon('ci:settings-filled'),
  },
  {
    id: 13,
    title: 'my account',
    path: '/dashboard/my-account',
    icon: getIcon('bi:person-fill'),
  },
  {
    id: 14,
    title: 'contact us',
    path: '/dashboard/contact-us',
    icon: getIcon('fluent:contact-card-group-20-filled'),
  },


];

export default navConfig;

// {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },

 // values: [
    //   {
    //     title: 'jasmin groups',
    //     path: '/dashboard/jasmin/jasmin-groups',
    //     // icon: getIcon('eva:shopping-bag-fill'),
    //   },
    //   {
    //     title: 'jasmin users',
    //     path: '/dashboard/jasmin/jasmin-users',
    //     // icon: getIcon('eva:shopping-bag-fill'),
    //   },
    //   {
    //     title: 'SMPP providers',
    //     path: '/dashboard/jasmin/smpp-providers',
    //     // icon: getIcon('eva:shopping-bag-fill'),
    //   },
    // ]

    // values: [
    //   {
    //     title: 'route filters',
    //     path: '/dashboard/routes/route-filters',
    //     // icon: getIcon('material-symbols:alt-route'),
    //   },
    //   {
    //     title: 'mT routes',
    //     path: '/dashboard/routes/mt-routes',
    //     // icon: getIcon('material-symbols:alt-route'),
    //   },
    //   {
    //     title: 'suppliers',
    //     path: '/dashboard/routes/suppliers',
    //     // icon: getIcon('material-symbols:alt-route'),
    //   },
    // ]

     // values: [{
    //   title: 'auto responders',
    //   path: '/dashboard/campaign-manager/autoresponders',
    //   icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //   title: 'campaigns',
    //   path: '/dashboard/campaign-manager/campaigns',
    //   // icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //   title: 'contact',
    //   path: '/dashboard/campaign-manager/contact',
    //   // icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //   title: 'contact groups',
    //   path: '/dashboard/campaign-manager/contact-groups',
    //   // icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //   title: 'templates',
    //   path: '/dashboard/campaign-manager/templates',
    //   // icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //   title: 'polls',
    //   path: '/dashboard/campaign-manager/polls',
    //   // icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //   title: 'opt out list',
    //   path: '/dashboard/campaign-manager/opt-out',
    //   // icon: getIcon('eva:file-text-fill'),
    // },
    // ]

    // values: [
    //   {
    //     title: 'send message',
    //     path: '/dashboard/messaging-center/send-message',
    //     // icon: getIcon('ant-design:message-filled'),
    //   },
    //   {
    //     title: 'SMS inbox',
    //     path: '/dashboard/messaging-center/sms-inbox',
    //     // icon: getIcon('ant-design:message-filled'),
    //   },
    //   {
    //     title: 'sent messages',
    //     path: '/dashboard/messaging-center/sent-messages',
    //     // icon: getIcon('ant-design:message-filled'),
    //   },
    // ]

    // values: [
    //   {
    //     title: 'SMPP tools',
    //     path: '/dashboard/tools/smpp-tools',
    //     // icon: getIcon('fa-solid:tools'),
    //   },
    //   {
    //     title: 'send HTTP request',
    //     path: '/dashboard/tools/http-requests',
    //     // icon: getIcon('fa-solid:tools'),
    //   },
    // ]