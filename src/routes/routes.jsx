import React from "react";
const SignUp=React.lazy(() => import("../pages/static/signup/SignUp"));
const Email = React.lazy(() => import("../pages/private/forgot/Email"));
const OTP = React.lazy(() => import("../pages/private/forgot/OTP"));
const NewPass = React.lazy(() => import("../pages/private/forgot/NewPass"));
const PassReset = React.lazy(() => import("../pages/private/forgot/PassReset"));
const Congrats = React.lazy(() => import("../pages/private/forgot/Congrats"));
const Admin = React.lazy(() => import("../pages/private/admin/admin"));
const PattrenBackground = React.lazy(() => import("../pages/private/admin/PattrenBackground"));

export const routesWithoutLayout = [
  {
    id: "Signup",
    path: "/signup",
    protected: false,
    element: <SignUp />,
  },
  {
    id: "Forgot-Password",
    path: "/forgot-password",
    protected: true,
    element: <Email />,
  },
  {
    id: "OTP",
    path: "forgot-password/otp",
    protected: true,
    element: <OTP />,
  },
  {
    id: "Password-Reset",
    path: "/frogot-password/resetpass",
    protected: true,
    element: <PassReset />,
  },
  {
    id: "New-Password",
    path: "/frogot-password/new",
    protected: true,
    element: <NewPass />,
  },
  {
    id: "Updated",
    path: "/frogot-password/updated",
    protected: true,
    element: <Congrats />,
  },
];

export const appRoutes = [
  {
    id: "admin",
    path: "/admin",
    protected: true,
    element: <Admin />,
  },
  {
    id: "pattrenbackground",
    path: "/pattrenbackground",
    protected: true,
    element: <PattrenBackground />,
  }
];
