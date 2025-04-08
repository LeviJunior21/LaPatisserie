import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { useEffect, useState } from "react";
import { Provider } from "./Provider";
import { getToken } from "./pages/Account/Cookie";
import axios from "axios";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/loja" element={<Shop />}></Route>
        <Route path="/sobre" element={<About />}></Route>
        <Route path="/contato" element={<Contact />}></Route>
        <Route path="/noticia" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/oferta" element={<Offer />}></Route>
        <Route path="/produto/:_id" element={<ProductDetails />}></Route>
        <Route path="/carrinho" element={<Cart />}></Route>
        <Route path="/metodo_de_pagamento" element={<Payment />}></Route>
      </Route>
      <Route path="/cadastrar" element={<SignUp />}></Route>
      <Route path="/entrar" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  const [token, setToken] = useState("");
  const [usuario, setUsuario] = useState({
    name: "", 
    username: "", 
    id: "", 
    password: "", 
    cpf: "", 
    email: "", 
    phone: "", 
    address: "", 
    city: "", 
    state: "", 
    cep: ""
});

  useEffect(() => {
    setToken(getToken());
    if (token) {
      axios.get("http://localhost:3000/api/clients/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data)
        setUsuario(res.data)
      })
      .catch((err) => {
        console.error("Erro ao buscar perfil:", err);
      });    }
  }, [setToken, token])

  return (
    <Provider.Provider value={{token, setToken, usuario, setUsuario}}>
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </Provider.Provider>
  );
}

export default App;
