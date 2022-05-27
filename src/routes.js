import { Navigate, useRoutes, Outlet } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

// Pages

// jasmin
import Jasmin from './pages/Jasmin';
import JasminGroups from './pages/JasminGroups';
import JasminUsers from './pages/JasminUsers';
// import { JasminUsers } from './pages/JasminUsers';
import SmppProviders from './pages/SmppProviders';

// routes
import Routes from './pages/Routes';
import RouteFilters from './pages/RouteFilters';
import MtRoutes from './pages/MtRoutes';
import Suppliers from './pages/Suppliers';

import CampaignManager from './pages/CampaignManager';
import Campaigns from './pages/Campaigns';
import Contacts from './pages/Contacts';
import ContactGroups from './pages/ContactGroups';
import MessageTemplates from './pages/MessageTemplates';
import Polls from './pages/Polls';
import OptOut from './pages/OptOut';
import CreateCampaigns from './pages/CreateCampaigns';

import MessagingCenter from './pages/MessagingCenter';
import SendMessage from './pages/SendMessage';
import SentMessage from './pages/SentMessage';
import SmsInbox from './pages/SmsInbox';

import Purchases from './pages/Purchases';
import Clients from './pages/Clients';
import Tools from './pages/Tools';
import SmppTools from './pages/SmppTools';
import Settings from './pages/Settings';
import MyAccount from './pages/MyAccount';
import ContactUs from './pages/ContactUs';
import DashboardApp from './pages/DashboardApp';
// import SmppTools from './sections/@dashboard/tools/SmppTools';
import HttpRequests from './pages/HttpRequests';
import AutoResponders from './pages/AutoResponders';
// import { SMPPProviders } from './sections/@dashboard/jasmin';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },

        {
          path: 'jasmin',
          element: <Jasmin />
        },
        { path: 'jasmin-groups', element: <JasminGroups /> },
        { path: 'jasmin-users', element: <JasminUsers /> },
        { path: 'smpp-providers', element: <SmppProviders /> },

        {
          path: 'routes',
          element: <Routes />,
        },
        { path: 'route-filters', element: <RouteFilters /> },
        { path: 'mt-routes', element: <MtRoutes /> },
        { path: 'suppliers', element: <Suppliers /> },

        { path: 'campaign-manager', element: <CampaignManager /> },
        { path: 'autoresponders', element: <AutoResponders /> },
        { path: 'campaigns', element: <Campaigns/> },
        { path: 'contact', element: <Contacts /> },
        { path: 'contact-groups', element: <ContactGroups /> },
        { path: 'templates', element: <MessageTemplates/> },
        { path: 'polls', element: <Polls /> },
        { path: 'opt-out', element: <OptOut /> },
        { path: 'create-campaigns', element: <CreateCampaigns/> },


        {
          path: 'messaging-center',
          element: <MessagingCenter />,
        },
        { path: 'send-message', element: <SendMessage /> },
        { path: 'sent-messages', element: <SentMessage /> },
        { path: 'sms-inbox', element: <SmsInbox /> },

        { path: 'purchases', element: <Purchases /> },
        { path: 'clients', element: <Clients /> },

        {
          path: 'tools',
          element: <Tools />,
        },
        { path: 'smpp-tools', element: <SmppTools /> },
        { path: 'http-requests', element: <HttpRequests /> },



        { path: 'settings', element: <Settings /> },
        { path: 'my-account', element: <MyAccount /> },
        { path: 'contact-us', element: <ContactUs /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

  // children: [
          //   // { path: '/', element: <Jasmin /> },
          //   { path: 'jasmin-groups', element: <JasminGroups /> },
          //   { path: 'jasmin-users', element: <JasminUsers /> },
          //   { path: 'smpp-providers', element: <SmppProviders /> }
          // ]

           // children: [
          // //   { path: '/', element: <Routes /> },
          //   { path: 'route-filters', element: <RouteFilters /> },
          //   { path: 'mt-routes', element: <MtRoutes /> },
          //   { path: 'suppliers', element: <Suppliers /> },
          // ]

           // children: [
          //   // { path: 'messaging-center', element: <MessagingCenter /> },
          //   { path: 'send-message', element: <SendMessage /> },
          //   { path: 'sent-messages', element: <SentMessage /> },
          //   { path: 'sms-inbox', element: <SmsInbox /> },
          // ]

          // children: [
          //   // { path: '/', element: <Tools /> },
          //   { path: 'smpp-tools', element: <SmppTools /> },
          //   { path: 'http-requests', element: <HttpRequests /> },
          // ]


