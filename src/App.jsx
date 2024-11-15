import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/static/login/Login";
import SpinerLoader from "./pages/error/loader/SpinerLoader";
import { appRoutes, routesWithoutLayout } from "./routes/routes";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route without layout */}
          <Route path="/" element={<Login />} />

          {routesWithoutLayout.map((route) => (
          
            <Route
              key={route?.id} // Use `key` to ensure each route is unique
              path={route?.path}
              element={
                <Suspense fallback={<SpinerLoader />}>
                  {route?.element}
                </Suspense>
              }
            />
          ))}

          {/* Routes within layout */}
          {/* <Route path="/" element={<Layout />}>
            {appRoutes.map((route) => (
              <Route
                key={route?.id} // Use `key` to ensure each route is unique
                path={route?.path}
                element={route?.element}
              />
            ))} 
          </Route>*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
