import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import Layout from "./pages/layout";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Services from "./pages/services";
import Prices from "./pages/prices";
import Gallery from "./pages/gallery";
import { ConfigProvider } from 'antd';

import { NextUIProvider, createTheme } from '@nextui-org/react';

const nextuiTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#003f5b'
    }
  }
});

export default function App() {
  // const pathContext = createContext(location.pathname);
  return(
     
     <NextUIProvider theme={nextuiTheme}>
     <ConfigProvider
      theme={{
        token: {
          "colorPrimary": "#003f5b",
          "wireframe": true,
          "colorLink": "#003f5b"
        }
      }}
     >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="despre_noi" element={<About />}/>
            <Route path="servicii" element={<Services />}/>
            <Route path="tarife" element={<Prices />} />
            <Route path="galerie" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
     </ConfigProvider> 
     </NextUIProvider>
  );
}
