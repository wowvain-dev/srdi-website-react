// import { Card, Container, Text } from "@nextui-org/react";
import '../App.css';
import { Anchor, Button, Card, Col, Row, Typography } from "antd";
import { blue, geekblue, gray } from "@ant-design/colors";

const { Text, Title, Paragraph } = Typography; 

import bg1 from '../assets/slide1.jpg';
import bg2 from '../assets/slide2.jpg';
import bg from '../assets/swimming_bg.jpg';
import '../css/waves.css';
import '../css/background.css';
import '../css/home.css';
import Wave from "react-wavify";
import { useNavigate } from "react-router-dom";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { usePathContext } from "../helpers/context";

import AppHero from './hero';
import About from "./about";
import Services from './services';
import Prices from "./prices";
import Gallery from './gallery';
import Contact from './contact';

function inViewHandler(entry: IntersectionObserverEntry | undefined, s: string, {path, setPath}: {path: string, setPath: (c: string) => void}) {
  if (path !== s) {
    const link = document.createElement('a');
    link.rel = 'noopener noreferrer';
    link.href = `${s}`;
    link.click();
    link.remove();
    setPath(s);
  }
}

function Home() {
  const navigator = useNavigate();

  const { path, setPath } = usePathContext();

  const homeRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);
  const servicesRef = useRef<HTMLInputElement>(null);
  const pricesRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const [homeVisible, setHomeVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [pricesVisible, setPricesVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);


  useEffect(() => {
  }, []);

  return (
    <div>
        <AppHero />
        <About />
        <Services />
        <Prices />
        <Gallery />
        <Contact />
    </div>
  );
}

function intersectionHandler(entry: IntersectionObserverEntry | undefined) {

}

export default Home;