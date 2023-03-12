import { Outlet, useNavigate, useLocation, Link as domLink, useHref } from "react-router-dom";
import logo from '../assets/srdi_logo.svg';
import {Menu, Button, Drawer, Typography, Anchor, Layout as AntdLayout} from "antd";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { usePathContext } from "../helpers/context";
import AppHeader from "../components/common/header";
import '../App.css';

const { Text } = Typography;
const { Link } = Anchor;
const { Header, Content, Footer } = AntdLayout;

function AppFooter() {
  return null;
}

function Layout() {
  const location = useLocation();


  const collapseItems = [
    {"name": "Acasă", "path": "/"},
    {"name": "Despre Noi", "path": "/despre_noi"},
    {"name": "Servicii", "path": "/servicii"},
    {"name": "Tarife", "path": "/tarife"},
    {"name": "Galerie", "path": "/galerie"},
    {"name": "Contact", "path": "/contact"},
  ];

  // let navbarCSS = {{}};
  const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth
  });
  const [visible, setVisible] = useState(false);


  
  function showDrawer() {
    setVisible(true); 
  }

  function hideDrawer(){
    setVisible(false);
  }

  // @ts-ignore
  useEffect(() => {
      function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        }) 
      }
      window.addEventListener('resize', handleResize);

      return (_) => {
        window.removeEventListener('resize', handleResize)
     }}
  );

    return(
      <AntdLayout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
      </AntdLayout>
    );
  }

// function AppHeader(){
//   const navigator = useNavigate();
//
//   let [active, setActive] = useState([false, false, false, false , false]);
//
//   const { path, setPath } = usePathContext();
//
//
//   return(
//     <>
//       {/*<Navbar variant="floating" shouldHideOnScroll={false}*/}
//       {/*  css={{background:"$transparent"}}*/}
//       {/*>*/}
//       <div className="header--logo">
//         <Button onClick={() => {
//           const link = document.createElement('a');
//           // link.target = "_blank";
//           link.rel = 'noopener noreferrer';
//           link.href = `#despre_noi`;
//           link.click();
//           link.remove();
//           setPath('#despre_noi');
//         }}>
//           <img src={logo}
//                style={{width: 75, height: 60}}
//           />
//         </Button>
//
//       </div>
//         <Menu mode="horizontal" defaultSelectedKeys={['home']}>
//           <Menu.Item key="acasa">Acasa</Menu.Item>
//           <Menu.Item key="despre_noi">Despre Noi</Menu.Item>
//           <Menu.Item key="servicii">Servicii</Menu.Item>
//           <Menu.Item key="tarife">Tarife</Menu.Item>
//           <Menu.Item key="galerie">Galerie</Menu.Item>
//           <Menu.Item key="contact">Contact</Menu.Item>
//           {/*<Navbar.Link isActive={path==='#despre_noi'}*/}
//           {/*  // onClick={() => setPath('#despre_noi')}*/}
//           {/*  onClick={() => refs[1].current.scrollIntoView()}*/}
//           {/*>*/}
//           {/*    <Button*/}
//           {/*      type={path==="#despre_noi" ? "default" : "text"}*/}
//           {/*      icon={<BookOutlined />}*/}
//           {/*      style={*/}
//           {/*       path==="#despre_noi" ? {*/}
//           {/*        fontSize: 17,*/}
//           {/*        fontWeight: 600,*/}
//           {/*        borderWidth: 1,*/}
//           {/*        borderColor: "#003f5b",*/}
//           {/*        color: "#003f5b"*/}
//           {/*      } : {*/}
//           {/*        fontSize: 17,*/}
//           {/*        fontWeight: 400*/}
//           {/*      }}*/}
//           {/*    >*/}
//           {/*      Despre Noi*/}
//           {/*    </Button>*/}
//           {/*</Navbar.Link>*/}
//           {/*<Navbar.Link  isActive={path==='#servicii'}*/}
//           {/*  // onClick={() => setPath('#servicii')}*/}
//           {/*  onClick={() => refs[2].current.scrollIntoView()}*/}
//           {/*>*/}
//           {/*  <Button*/}
//           {/*  type={path==="#servicii" ? "link" : "text"}*/}
//           {/*  icon={<AppstoreOutlined />}*/}
//           {/*  style={*/}
//           {/*    path==="#servicii" ? {*/}
//           {/*        fontSize: 17,*/}
//           {/*        fontWeight: 600,*/}
//           {/*        borderWidth: 1,*/}
//           {/*        borderColor: "#003f5b",*/}
//           {/*        color: "#003f5b"*/}
//           {/*    } : {*/}
//           {/*      fontSize: 17,*/}
//           {/*      fontWeight: 400*/}
//           {/*    }}*/}
//           {/*  >*/}
//           {/*    Servicii*/}
//           {/*  </Button>*/}
//           {/*</Navbar.Link>*/}
//           {/*<Navbar.Link href="#tarife" isActive={path==='#tarife'}*/}
//           {/*  // onClick={() => setPath('#tarife')}*/}
//           {/*  onClick={() => refs[3].current.scrollIntoView()}*/}
//           {/*>*/}
//           {/*  <Button*/}
//           {/*  type={path==="#tarife" ? "link" : "text"}*/}
//           {/*  icon={<DollarOutlined />}*/}
//           {/*  style={*/}
//           {/*    path==="#tarife" ? {*/}
//           {/*        fontSize: 17,*/}
//           {/*        fontWeight: 600,*/}
//           {/*        borderWidth: 1,*/}
//           {/*        borderColor: "#003f5b",*/}
//           {/*        color: "#003f5b"*/}
//           {/*    } : {*/}
//           {/*      fontSize: 17,*/}
//           {/*      fontWeight: 400*/}
//           {/*    }}*/}
//           {/*  >*/}
//           {/*    Tarife*/}
//           {/*  </Button>*/}
//           {/*</Navbar.Link>*/}
//           {/*<Navbar.Link href="#galerie" isActive={path==="#galerie"}*/}
//           {/*  // onClick={() => setPath('#galerie')}*/}
//           {/*  onClick={() => refs[4].current.scrollIntoView()}*/}
//           {/*>*/}
//           {/*  <Button*/}
//           {/*  type={path==="#galerie" ? "link" : "text"}*/}
//           {/*  icon={<CameraOutlined />}*/}
//           {/*  style={*/}
//           {/*    path==="#galerie" ? {*/}
//           {/*        fontSize: 17,*/}
//           {/*        fontWeight: 600,*/}
//           {/*        borderWidth: 1,*/}
//           {/*        borderColor: "#003f5b",*/}
//           {/*        color: "#003f5b"*/}
//           {/*    } : {*/}
//           {/*      fontSize: 17,*/}
//           {/*      fontWeight: 400*/}
//           {/*    }}*/}
//           {/*  >*/}
//           {/*    Galerie*/}
//           {/*  </Button>*/}
//           {/*</Navbar.Link>*/}
//           {/*<Navbar.Link href="#contact" isActive={path==="#contact"}*/}
//           {/*  onClick={() => refs[5].current.scrollIntoView()}*/}
//           {/*  // onClick={() => setPath('#contact')}*/}
//           {/*>*/}
//           {/*  <Button*/}
//           {/*  type={path==="#contact" ? "link" : "text"}*/}
//           {/*  icon={<MailOutlined />}*/}
//           {/*  style={*/}
//           {/*    path==="#contact" ? {*/}
//           {/*        fontSize: 17,*/}
//           {/*        fontWeight: 600,*/}
//           {/*        borderWidth: 1,*/}
//           {/*        borderColor: "#003f5b",*/}
//           {/*        color: "#003f5b"*/}
//           {/*    } : {*/}
//           {/*      fontSize: 17,*/}
//           {/*      fontWeight: 400*/}
//           {/*    }}*/}
//           {/*  >*/}
//           {/*    Contact*/}
//           {/*  </Button>*/}
//           {/*</Navbar.Link>*/}
//         </Menu>
//       <Anchor className="flex-1">
//         <Link href="#despre_noi" title="Despre Noi"/>
//         <Link href="#servicii" title="Servicii"/>
//         <Link href="#tarife" title="Tarife"/>
//         <Link href="#galerie" title="Galerie"/>
//         <Link href="#contact" title="Contact"/>
//       </Anchor>
//       {/*</Navbar>*/}
//     </>
//   );
// }

export default Layout;