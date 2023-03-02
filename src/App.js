import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import Account from "./pages/Account";
import ItemsPage from "./pages/ItemsPage";
import ItemPage from "./pages/ItemPage";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import React, { useEffect, useState, useRef } from "react";
import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import CartPage from "./pages/CartPage";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       FOG({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         highlightColor: 0x4fbcde,
  //         midtoneColor: 0xa4a4a4,
  //         lowlightColor: 0xf7f7f7,
  //         baseColor: 0xfafafa,
  //         blurFactor: 0.43,
  //         speed: 0.8,
  //         zoom: 0.5,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div className="App" ref={vantaRef}>
      
      <AuthContextProvider>
        <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route
              path="account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
            <Route path="items" element={<ItemsPage />} />
            <Route path="items/:id" element={<ItemPage />} />
            <Route path="cart" element={<Protected><CartPage /></Protected>} />
          </Route>
        </Routes>
        </div>
      </AuthContextProvider>
      <div class="blob">
  <svg link="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
  </div>
    </div>
  );
}

export default App;
