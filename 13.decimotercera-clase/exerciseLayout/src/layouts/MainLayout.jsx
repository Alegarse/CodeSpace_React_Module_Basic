import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import MenuComponent from "../components/MenuComponent";
import { Outlet } from "react-router";
import FooterLayout from "./FooterLayout";

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet/>
      <FooterLayout/>
    </>
  );
};

export default MainLayout;
