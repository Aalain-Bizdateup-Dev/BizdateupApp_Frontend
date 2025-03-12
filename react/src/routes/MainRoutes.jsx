import { lazy } from 'react';

import AdminLayout from 'layouts/AdminLayout';
import GuestLayout from 'layouts/GuestLayout';
import Create_Dept from '../views/Create-Dept/Create_Dept.jsx';
import Main_Dashboard from "../views/Main-Dashboard/dashboard.jsx"
import Second_User from '../views/Main-Dashboard/second-user.jsx';
import Create_Department from '../views/Create Departments/Create_Department.jsx';
import Departments from '../views/Departments/Departments.jsx';
import Add_Employee from '../views/Add_Employee/Add_Employee.jsx';
import Select_Employee from '../dasboard-main-components/select-employee/Select_Employee.jsx';
import Upload_Kpi from '../views/Upload Kpi/Upload_Kpi.jsx';
import Enter_kpi from '../views/Enter Kpi/Enter_kpi.jsx';
const DashboardSales = lazy(() => import('../views/dashboard/DashSales/index'));

const Typography = lazy(() => import('../views/ui-elements/basic/BasicTypography'));
const Color = lazy(() => import('../views/ui-elements/basic/BasicColor'));

const FeatherIcon = lazy(() => import('../views/ui-elements/icons/Feather'));
const FontAwesome = lazy(() => import('../views/ui-elements/icons/FontAwesome'));
const MaterialIcon = lazy(() => import('../views/ui-elements/icons/Material'));

const Login = lazy(() => import('../views/auth/login'));
const Register = lazy(() => import('../views/auth/register'));

const Sample = lazy(() => import('../views/sample'));

const Profile = lazy(() => import('../views/profile/profile'));
const Employee = lazy(() => import('../views/Employee/Employee'));
const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        // {
        //   path: '/create-depts',
        //   element: <Create_Dept />
        // },
        {
          path: '/dashboard/sales',
          element: <DashboardSales />
        },
        
          {
            path: '/create-depts',
            element: <Create_Department />
          },
          {
            path: '/departments',
            element: <Departments />
          },
          {
            path: '/upload-kpi',
            element: <Upload_Kpi />
          },
          {
            path: '/enter-kpi',
            element: <Enter_kpi />
          },
        {
          path: '/typography',
          element: <Typography />
        },
        {
          path: '/dashboard_main',
          element: <Main_Dashboard />
        },
        {
          path: '/employee/:id',
          element: <Select_Employee />
        },
        {
          path: '/second-step',
          element: <Second_User />
        },
        {
          path: '/profile',
          element: <Profile />
        },
       
        {
          path: '/employee',
          element: <Employee />
        },
        {
          path: '/add-employee',
          element: <Add_Employee />
        },
        {
          path: '/icons/Feather',
          element: <FeatherIcon />
        },
        {
          path: '/icons/font-awesome-5',
          element: <FontAwesome />
        },
        {
          path: '/icons/material',
          element: <MaterialIcon />
        },

        {
          path: '/sample-page',
          element: <Sample />
        }
      ]
    },
    {
      path: '/',
      element: <GuestLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ]
};

export default MainRoutes;
