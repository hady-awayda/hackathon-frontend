import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
