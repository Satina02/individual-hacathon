import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge, Menu, Dropdown } from "antd"; 
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { DownOutlined } from '@ant-design/icons';

import "./Header.css";
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  // const {
  //   user: { email },
  // } = useAuth();

const location = useLocation();
const NAV_ITEMS = [
    {
      title: "Home",
      link: "/",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Contact",
      link: "/contacts",
      id: 4,
    },
    {
      title: "Flavors",
      link: "/flavors",
      id: 5,
    },
    {
      title: "Shop",
      link: "/shop",
      id: 6,
    }
  ];
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/flavors">Flavors</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/contacts">Contact</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <header>
          <div className="header">
            <Link to="/" className="nav-logo">
              <img src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/logo.png" alt="logo"/>
            </Link>
          </div>
        <div className="navbar">
            {NAV_ITEMS.map((item) => (
              <Link
                to={item.link}
                className={
                  location.pathname === item.link
                    ? "navbar__item-active"
                    : "navbar__item"
                }
              >
                {item.title}
              </Link>
            ))}
        </div>

        <div className="nav-icons">
        <Link to="/wish">
         <img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/512/4379/4379608.png" alt="" />
        </Link>
        <Link to="/cart">
          <Badge
            // count={+cartLength}
            size={"small"}
            style={{ backgroundColor: "white" }}
          >
            <img style={{width:"20px"}} src="https://cdn-icons-png.flaticon.com/512/4379/4379818.png" alt="" />
            
          </Badge>
        </Link>
        {/* {email ? (
          <button className="navbar-login">Log Out</button>
        ) : null} */}
        {/* {email ? null : ( */}
          <Link to="/login" className="navbar-login">
          <div className="navbar-login">Log In</div>
        {/* )}  */}
      </Link>
        {/* )} */}
        

         <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <img  style={{width:"20px"}}  src="https://cdn-icons-png.flaticon.com/512/3388/3388788.png" alt="" />
          </a>
        </Dropdown>  
      </div>
        </header>
  );
};

export default Header;
