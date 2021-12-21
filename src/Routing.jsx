import React from "react";
import { Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import ProductList from './components/ProductList/ProductList';
import HomePage from "./pages/Home/HomePage";
import AdminPage from "./pages/AdminPage";


import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";

import ProductCart from "./components/Cart/ProductCart";
import CheckOut from "./components/CheckOut/CheckOut";
import PaymentCard from "./components/CheckOut/PaymentCard";
import Favorite from "./components/Favorite/Favorite";
import Contacts from "./components/Contacts/Contacts";
import Flavor from "./components/Flavor/Flavor";
import Registr from "./components/Registr/Registr";


const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage /> ,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 2,
    },
    {
      link: "/shop",
      element: <ProductList />,
      id: 7,
    },
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 8,
    },
    {
      link: "/login",
      element: <Registr />,
      id: 9,
    },
    {
      link:"/cart",
      element: <ProductCart/>,
    },
    {
      link:"/check-out",
      element: <CheckOut/>,
    },{
      link:"/payment-card",
      element: <PaymentCard />
    },{
      link:"/favorite",
      element: <Favorite/>
    },
    {
      link: "/contacts",
      element: <Contacts/>
    },
    {
      link: "/flavors",
      element: <Flavor/>
    }
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct /> ,
      id: 2,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      {ADMIN_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default Routing;
