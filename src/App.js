import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import ProductsContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CartContextProvider from "./contexts/cartContext";
import FavContextProvider from "./contexts/favoriteContext";
import { googleContext } from "./fire";
import AuthContextProvider from "./contexts/authContext";


function App() {
  return (
    <>
    <AuthContextProvider>
    <googleContext>
    <FavContextProvider>
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
      </CartContextProvider>
      </FavContextProvider>
      </googleContext>
      </AuthContextProvider>
    </>
  );
}

export default App;
