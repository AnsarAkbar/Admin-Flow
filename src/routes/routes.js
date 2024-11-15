import Login from "../pages/static/login/Login";
import SignUp from "../pages/static/signup/SignUp";
// const Email = React.lazy(() => import("../pages/private/forgot/Email"));
// const OTP = React.lazy(() => import("../pages/private/forgot/OTP"));
// const NewPass = React.lazy(() => import("../pages/private/forgot/NewPass"));
// const PassReset = React.lazy(() => import("../pages/private/forgot/PassReset"));
// const Congrats = React.lazy(() => import("../pages/private/forgot/Congrats"));
// const Admin = React.lazy(() => import("../pages/private/admin/admin"));
// const NotFound = React.lazy(() => import("../pages/error/notFound/NotFound"));


export const routesWithoutLayout = [
    {
        id: 'Signup',
        path: '/signup',
        protected: false,
        element: <Login />
    }
    // {
    //     id: 'Forgot-Password',
    //     path: '/forgot-password',
    //     protected: true,
    //     element: <Email />,
    // },
    // {
    //     id: 'OTP',
    //     path: '/frogot-password/otp',
    //     protected: true,
    //     element: <OTP />,
    // },
    // {
    //     id: 'Password-Reset',
    //     path: '/frogot-password/resetpass',
    //     protected: true,
    //     element: <PassReset />,
    // },
    // {
    //     id: 'New-Password',
    //     path: '/frogot-password/new',
    //     protected: true,
    //     element: <NewPass />,
    // },
    // {
    //     id: 'Updated',
    //     path: '/frogot-password/updated',
    //     protected: true,
    //     element: <Congrats />,
    // },
    // {
    //     id: '404',
    //     path: '*',
    //     element: <NotFound />,
    // },
];

export const appRoutes = [
    {
      id: 'admin',
      path: '/admin',
      protected: true,
      element: ""
    //   <Admin />
    }
  ];