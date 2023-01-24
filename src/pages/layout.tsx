import { Outlet, useNavigate, useLocation, Link as domLink } from "react-router-dom";
import logo from '../assets/srdi_logo.svg';
import { Menu, Button, Drawer, Typography } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AppstoreOutlined, BarsOutlined, BookOutlined, CameraOutlined, DollarOutlined, FileImageOutlined, MailOutlined } from "@ant-design/icons";
import { Button as Btn } from "flowbite-react";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import { Navbar, Button as NextBtn, Link} from "@nextui-org/react";
import AnchorLink from "antd/es/anchor/AnchorLink";

const { Text } = Typography;

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

  useEffect(() => {
      function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        }) 
      }
      window.addEventListener('resize', handleResize);

      return _ => {
        window.removeEventListener('resize', handleResize)
     }}
  );

    console.log(dimensions.width)
    return(
      <>
      <Header />
      <div style={{marginTop: -100}}>
      <Outlet />
      </div>
      </>
    );
  }

function hrefPath() {
  return location.href.slice(location.href.search('#'));
}


function Header() {
  const navigator = useNavigate();

  let [path, setPath] = useState(hrefPath());
  let [active, setActive] = useState([false, false, false, false , false]);

  return(
    <>
      <Navbar variant="floating" shouldHideOnScroll={false}
        css={{background:"$transparent"}}
      >
        <Navbar.Brand>
          <Link href="#acasa" onClick={() => setPath('#acasa')}>
            <img src={logo} 
              style={{width: 75, height: 60}}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content variant="default">
          <Navbar.Link href="#despre_noi" isActive={path==='#despre_noi'}
            onClick={() => setPath('#despre_noi')}
          >
              <Button
                type={path==="#despre_noi" ? "default" : "text"}
                icon={<BookOutlined />}
                style={
                 path==="#despre_noi" ? {
                  fontSize: 17,
                  fontWeight: 600,
                  borderWidth: 1,
                  borderColor: "#003f5b",
                  color: "#003f5b"
                } : {
                  fontSize: 17,
                  fontWeight: 400
                }}
              >
                Despre Noi
              </Button>
          </Navbar.Link>
          <Navbar.Link href="#servicii" isActive={path==='#servicii'}
            onClick={() => setPath('#servicii')}
          >
            <Button
            type={path==="#servicii" ? "link" : "text"}
            icon={<AppstoreOutlined />}
            style={
              path==="#servicii" ? {
                  fontSize: 17,
                  fontWeight: 600,
                  borderWidth: 1,
                  borderColor: "#003f5b",
                  color: "#003f5b"
              } : {
                fontSize: 17,
                fontWeight: 400
              }}
            >
              Servicii
            </Button>
          </Navbar.Link>
          <Navbar.Link href="#tarife" isActive={path==='#tarife'}
            onClick={() => setPath('#tarife')}
          >
            <Button
            type={path==="#tarife" ? "link" : "text"}
            icon={<DollarOutlined />}
            style={
              path==="#tarife" ? {
                  fontSize: 17,
                  fontWeight: 600,
                  borderWidth: 1,
                  borderColor: "#003f5b",
                  color: "#003f5b"
              } : {
                fontSize: 17,
                fontWeight: 400
              }}
            >
              Tarife
            </Button>
          </Navbar.Link>
          <Navbar.Link href="#galerie" isActive={path==="#galerie"}
            onClick={() => setPath('#galerie')}
          >
            <Button
            type={path==="#galerie" ? "link" : "text"}
            icon={<CameraOutlined />}
            style={
              path==="#galerie" ? {
                  fontSize: 17,
                  fontWeight: 600,
                  borderWidth: 1,
                  borderColor: "#003f5b",
                  color: "#003f5b"
              } : {
                fontSize: 17,
                fontWeight: 400
              }}
            >
              Galerie
            </Button>
          </Navbar.Link>
          <Navbar.Link href="#contact" isActive={path==="#contact"}
            onClick={() => setPath('#contact')}
          >
            <Button
            type={path==="#contact" ? "link" : "text"}
            icon={<MailOutlined />}
            style={
              path==="#contact" ? {
                  fontSize: 17,
                  fontWeight: 600,
                  borderWidth: 1,
                  borderColor: "#003f5b",
                  color: "#003f5b"
              } : {
                fontSize: 17,
                fontWeight: 400
              }}
            >
              Contact
            </Button>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
}

export default Layout;