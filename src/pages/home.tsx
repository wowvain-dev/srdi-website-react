// import { Card, Container, Text } from "@nextui-org/react";
import { Anchor, Button, Card, Col, Row, Typography } from "antd";
import { blue, geekblue, gray } from "@ant-design/colors";
import AnchorLink from "react-anchor-link-smooth-scroll";

const { Text, Title, Paragraph } = Typography; 

import bg1 from '../assets/slide1.jpg';
import bg2 from '../assets/slide2.jpg';
import bg from '../assets/swimming_bg.jpg';
import '../css/waves.css';
import '../css/background.css';
import '../css/home.css';
import Wave from "react-wavify";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";

function Home() {
  const navigator = useNavigate();

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
    const homeObserver = new IntersectionObserver((entries) => {
      setHomeVisible(entries[0].isIntersecting);
    }, {threshold: .5});
    const aboutObserver = new IntersectionObserver((entries) => {
      setAboutVisible(entries[0].isIntersecting);
    }, {threshold: .5});
    const servicesObserver = new IntersectionObserver((entries) => {
      setServicesVisible(entries[0].isIntersecting);
    }, {threshold: .5});
    const pricesObserver = new IntersectionObserver((entries) => {
      setPricesVisible(entries[0].isIntersecting);
    }, {threshold: .5});
    const galleryObserver = new IntersectionObserver((entries) => {
      setGalleryVisible(entries[0].isIntersecting);
    }, {threshold: 0});
    const contactObserver = new IntersectionObserver((entries) => {
      setContactVisible(entries[0].isIntersecting);
    }, {threshold: .5});
    homeObserver.observe(homeRef.current as Element);
    aboutObserver.observe(aboutRef.current as Element);
    servicesObserver.observe(servicesRef.current as Element);
    pricesObserver.observe(pricesRef.current as Element);
    // galleryObserver.observe(galleryRef.current as Element);
    contactObserver.observe(contactRef.current as Element);
  }, []);

      console.log(galleryVisible)
  return (
    <div>
    <div style={{
    }} className="backgroundImage bg-fixed" id="acasa"
      ref={homeRef}
    >
    <div
      className="items-center align-center justify-center flex flex-col"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="flex-1"/>
      <Card
        className="w-[95%] md:w-[60%] p-10"
        bordered={true}
        style={{
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
        }}
      >
      <Paragraph
        
       className="gradientText font-['Montserrat'] font-medium text-center text-3xl md:text-4xl xl:text-5xl
       "
      >
        Şcoala Română de Înot
      </Paragraph>
      <Paragraph
      style={{color: gray[2]}}
       className="font-sans font-medium text-center text-1xl md:text-2xl xl:text-3xl" 
      >
        Îndrăgostiţi-vă de înot împreună cu noi!
      </Paragraph>

      </Card>
      <div className="flex-1"/>
    <Wave 
      style={{position: "absolute", zIndex: 97, bottom: 0, width: '100vw'}}
      // className="wave"
      fill="#003F7C"
      // fill="rgb(74, 144, 226)"
      z={0}
      opacity={0.8}
      paused={false}
      options={
        {
          height: 20,
          amplitude: 15,
          speed: .15,
          points: 5
        }
      }
      />
    <Wave 
      style={{position: "absolute", zIndex: 98, bottom: 0, width: '100vw'}}
      // fill="rgba(68, 136, 146, .7)"
      fill="#003F7C"
      // className="wave"
      paused={false}
      opacity={0.5}
      options={
        {
          height: 5,
          amplitude: 5,
          speed: .19,
          points: 5,
          
        }
      }
      />
    <Wave 
      style={{position: "absolute", zIndex: 99, bottom: 0, width: '100vw'}}
      // fill="rgba(0, 63, 92, .8)"
      fill="#003f5b"
      paused={false}
      // className="wave"
      opacity={1}
      z={2}
      options={
        {
          height: 5,
          amplitude: 20,
          speed: .17,
          points: 5
        }
      }
      />
      <AnchorLink href="#despre_noi">
      <Button 
        style={{zIndex:100, color: "#fff"}}
        type="default" size="large"
        className="mb-10"
      >
        SCUFUNDĂ-TE
      </Button>

      </AnchorLink>
       </div> 
    </div>
        <Col span={18}>
          <div id="despre_noi" className="bg-[#003f5b] pt-10 w-[100vw] h-[100vh]" ref={aboutRef}>
          </div>
          <div id="servicii" className=" w-[100vw] h-[100vh]" ref={servicesRef}>
          </div>
          <div id="tarife" className="bg-[#efefef] w-[100vw] h-[100vh]" ref={pricesRef}>
          </div>
          <InView threshold={.2}>
          {({inView, ref, entry}) => {
            if (inView) {
              intersectionHandler(entry);
            }
            return(
          <div ref={ref} id="galerie" className={`${inView ? 'section-active' : ''} w-[100vw] h-[100vh]`}>
              <p className={`text-5xl ml-auto mr-auto section-paragraph`}
              >GALERIE</p>
          </div>
          )}} 
          </InView>
          <div id="contact" className="bg-[#efefef] w-[100vw] h-[100vh]" ref={contactRef}>
          </div>
        </Col> 
    </div>
  );
}

function intersectionHandler(entry: IntersectionObserverEntry | undefined) {

}

export default Home;