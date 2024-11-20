import React from "react";
const SignUp=React.lazy(() => import("../pages/static/signup/SignUp"));
const Email = React.lazy(() => import("../pages/private/forgot/Email"));
const OTP = React.lazy(() => import("../pages/private/forgot/OTP"));
const NewPass = React.lazy(() => import("../pages/private/forgot/NewPass"));
const PassReset = React.lazy(() => import("../pages/private/forgot/PassReset"));
const Congrats = React.lazy(() => import("../pages/private/forgot/Congrats"));
const Admin = React.lazy(() => import("../pages/private/admin/admin"));
const PattrenBackground = React.lazy(() => import("../pages/private/admin/PattrenBackground"));
const Dashboard = React.lazy(() => import("../pages/private/dashboard/Dashboard"));
const Profile = React.lazy(() => import("../pages/private/Dashboard/UserMenue/Profile"));
const Settings = React.lazy(() => import("../pages/private/Dashboard/UserMenue/Settings"));
const Team=React.lazy(() => import("../pages/private/Team/Team"));
const MeetingSchedule=React.lazy(() => import('../pages/private/calander/MeetingSchedule'));
const Projects=React.lazy(() => import('../pages/private/projects/Projects'));
const Documentation=React.lazy(() => import('../pages/private/documentation/Documentation'));
const Reports=React.lazy(() => import("../pages/private/Reports/Reports"));

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
  },
  {
    id: "dashbord",
    path: "/admin/dashbord",
    protected: true,
    element: <Dashboard />,
  },
  {
    id: "profile",
    path: "/user-profile",
    protected: true,
    element: <Profile />,
  },
  {
    id: "settings",
    path: "/settings",
    protected: true,
    element: <Settings />,
  }
  ,{
    id: "team",
    path: "/team",
    protected: true,
    element: <Team />,
  },
  {
    id: "meeting",
    path: "/meeting-schedule",
    protected: true,
    element: <MeetingSchedule />,
  },
  {
    id: "projects",
    path: "/projects",
    protected: true,
    element: <Projects />,
  },
  {
    id: "documentation",
    path: "/documentation",
    protected: true,
    element: <Documentation />,
  },
  {
    id: "reports",
    path: "/reports",
    protected: true,
    element: <Reports />,
  },

];
