import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/static/login/Login";
import SpinerLoader from "./pages/error/loader/SpinerLoader";
import { appRoutes, routesWithoutLayout } from "./routes/routes";
import Layout from "./Layout/Layout";
import "./App.css";
import NotFound from "./pages/error/notFound/NotFound";
import { useSelector } from "react-redux";

function App() {
  const nextPage = useSelector(
    (e) => e.persistedReducer.collectUserInfo.nextPage
  );
  // console.log("nextPage", nextPage);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route without layout */}
          <Route path="/" element={<Login />} />
          {routesWithoutLayout.map((route) => (
            <Route
              key={route?.id}
              path={route?.path}
              element={
                <Suspense fallback={<SpinerLoader />}>
                  {route?.element}
                </Suspense>
              }
            />
          ))}

          {/* Routes within layout */}

          {nextPage ? (
            <Route path="/" element={<Layout />}>
              {appRoutes.map((route) => (
                <Route
                  key={route?.id}
                  path={route?.path}
                  element={
                    <Suspense fallback={<SpinerLoader />}>
                      {route?.element}
                    </Suspense>
                  }
                />
              ))}
            </Route>
          ) : null}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
