import { MutableRefObject, createContext, useState } from 'react'
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
import {PathContext} from './helpers/context'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const nextuiTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#003f5b'
    }
  }
});

class PathManager {
  private path: string = '';
  
  
  public set setPath(v : string) {
    this.path = v;
  }

  public get getPath() : string {
    return this.path;
  }
  
  
  hrefPath() {
    return location.href.slice(location.href.search('#')); 
  }
}


export default function App() {
  const [path, setPath] = useState<string>('#');
  const sectionRefs = new Array<MutableRefObject<HTMLInputElement>>(6);
  return(
    <PathContext.Provider value={{ path, setPath }}>
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home  />}/>
          </Route>
        </Routes>
      </BrowserRouter>
     </ConfigProvider> 
     </NextUIProvider>
      </PathContext.Provider>
  );
}
