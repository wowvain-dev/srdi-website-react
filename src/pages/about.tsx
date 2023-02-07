import "../App.css";
import "../css/about.css";
import "../css/layout.css";
import { LayoutGroup, motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Button, Modal, Row } from "antd";
import { Card, Divider, Spacer } from "@nextui-org/react";

import { CiMedal, CiTrophy } from "react-icons/ci";
import { HiOutlineHeart } from "react-icons/hi";
import {
  BsPeople,
  BsWater,
  FaSwimmer,
  GrGroup,
  IoHappyOutline,
  IoIosHeartEmpty,
  TbFileCertificate,
} from "react-icons/all";

function About() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const header = useRef(null);
  const description1 = useRef(null);
  const description2 = useRef(null);
  const description3 = useRef(null);
  const content = useRef(null);

  const characterAnimation = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const qualifIconAnimation = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const qualifTextAnimation = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const qualifDivAnimation = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const qualifDivAnimation1 = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        delay: 0.6,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const qualifDivAnimation2 = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        duration: 1,
        delay: 0.9,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const qualifDivAnimation3 = {
    initial: {
      opacity: 0,
      x: `-5em`,
    },
    whileInView: {
      opacity: 1,
      x: `0em`,
      transition: {
        duration: 1,
        delay: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const textTransition = {
    duration: 0.75,
    delay: 0.5,
    default: { ease: "easeIn" },
  };

  const headerTransition = {
    duration: 0.5,
    delay: 0.25,
    default: { ease: "easeIn" },
  };

  return (
    <div id="despre_noi">
      <div
        className="bg-[#003f5b] pt-10
            w-[100vw] min-h-[85vh]"
      >
        <div className="container-fluid">
          <motion.div
            ref={header}
            transition={{ ...headerTransition }}
            // animate={{opacity: headerView ? 1 : 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ opacity: 0 }}
            className="title-holder"
          >
            <h2>Despre Noi</h2>
            <center>
              <motion.div
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  duration: 0.5,
                }}
                // stiffness: 400, damping: 10, duration: .4
                whileInView={{ width: "40%" }}
                initial={{ width: "0%" }}
                style={{ width: "0%" }}
                // viewport={{once: true}}
              >
                <Divider
                  css={{ background: "#fefefe", height: 2 }}
                  className="mt-6"
                />
              </motion.div>
            </center>
          </motion.div>

          <div className="contentHolder" ref={content}>
            <motion.p
              transition={{ ...textTransition }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ opacity: 0 }}
              ref={description1}
              className=""
            >
              Suntem <b>Şcoala Română de Înot</b> şi ne lăsăm conduşi de
              pasiunea pentru înot, de dorința de a face totul cât mai bine
              astfel încât, la finalul fiecărui antrenament, cursanții noștri să
              fie fericiți că ne-au întâlnit.
            </motion.p>
            <motion.p
              transition={{ ...textTransition }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ opacity: 0 }}
              ref={description2}
              className=""
            >
              Indiferent dacă sunteți la primul contact cu bazinul de înot, și
              poate vă este teamă de apă, dacă înotați pentru sănătate, dacă
              doriți să vă perfecționați tehnica de înot sau să vă pregătiți
              pentru competiții sportive, la <b>Școala Română de Înot</b> veți
              găsi cursurile de înot potrivite pentru dumneavoastră sau copiii
              dumneavoastră.
            </motion.p>
            <motion.p
              transition={{ ...textTransition }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ opacity: 0 }}
              ref={description3}
              className=""
            >
              Vă așteptăm în locații moderne, cu o atmosferă prietenoasă și
              antrenori pasionați, cu experiență solidă în domeniul natației și
              în predarea acestei discipline către copii și adulți.
            </motion.p>
          </div>

          {/*TODO(wowvain-dev): add transition types & viewport once to all components*/}

          <center>
            <motion.div
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
              whileInView={{ width: "100%" }}
              style={{ width: "0%" }}
              viewport={{ once: true }}
            >
              <Divider
                css={{ background: "#fefefe" }}
                className="mt-10 mb-10"
              />
            </motion.div>
          </center>

          <div className="columnsHolder">
            <center>
              <motion.p
                style={{ fontSize: "18px", marginBottom: "10px", opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={textTransition}
              >
                Antrenamentele sunt concepute de <b>Edward Vuculescu</b>,
                antrenor coordonator şi preşedinte al Şcolii Române de Înot.
              </motion.p>
            </center>
            <Row className="flex flex-col md:flex-row items-center justify-evenly mt-10">
              {/* <LayoutGroup> */}
              <motion.div
                layoutId="1"
                onClick={() => setSelectedId("1")}
                initial={{ x: "-2em", opacity: 0 }}
                whileInView={{
                  x: `0em`,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4, type: "easeInOut" }}
                className="flex flex-col w-[30%] justify-center items-center pl-10 pr-10"
              >
                <motion.div
                  className="mb-5 md:mb-0"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 1, transition: { duration: 0.2 } }}
                >
                  <Card
                    css={{
                      h: "200px",
                      w: "200px",
                      borderWidth: 1,
                      bgColor: "transparent",
                    }}
                  >
                    <Card.Body
                      className="flex items-center"
                      css={{
                        bgColor: "rgba(0, 0, 0, 0)",
                      }}
                    >
                      {/*<i className="fa-solid fa-medal fa-6x" style={{color: '#668c9d'}}></i>*/}
                      <CiMedal size={100} color="#c8d6dc" />
                    </Card.Body>
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        // bgBlur: "#ffffff66",
                        // bgColor: "#c8d6dc",
                        bgColor: "transparent",
                        bottom: 0,
                        zIndex: 1,
                        h: "60px",
                        paddingBottom: "0px",
                      }}
                      className="flex justify-center align-center items-center"
                    >
                      <p
                        className="text-center text-sm"
                        //  style={{color: '#2a2b2a'}}
                        style={{ color: "#c8d6dc" }}
                      >
                        Experienţă
                      </p>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </motion.div>
              <motion.div
                layoutId="2"
                onClick={() => setSelectedId("2")}
                initial={{ x: "-2em", opacity: 0 }}
                whileInView={{
                  x: `0em`,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.75, duration: 0.4, type: "easeInOut" }}
                className="flex flex-col w-[30%] justify-center items-center pl-10 pr-10"
              >
                <motion.div
                  className="mb-5 md:mb-0"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, delay: 0 },
                  }}
                  whileTap={{
                    scale: 1,
                    transition: { duration: 0.2, delay: 0 },
                  }}
                >
                  <Card
                    css={{
                      h: "200px",
                      w: "200px",
                      // bgBlur: "#ffffff66",
                      borderWidth: 1,
                      bgColor: "transparent",
                    }}
                  >
                    <Card.Body className="flex items-center">
                      {/*<i className="fa-solid fa-graduation-cap fa-6x" style={{color: '#efefef'}}></i>*/}
                      <TbFileCertificate
                        size={100}
                        strokeWidth={1.1}
                        color="#c8d6dc"
                      />
                    </Card.Body>
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        // bgBlur: "#ffffff66",
                        // bgColor: "#c8d6dc",
                        bgColor: "transparent",
                        bottom: 0,
                        zIndex: 1,
                        h: "60px",
                        paddingBottom: "0px",
                      }}
                      className="flex justify-center align-center items-center"
                    >
                      <p
                        className="text-center text-sm"
                        //  style={{color: '#2a2b2a'}}
                        style={{ color: "#c8d6dc" }}
                      >
                        Certificare
                      </p>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </motion.div>
              <motion.div
                layoutId="3"
                onClick={() => setSelectedId("3")}
                initial={{ x: "-2em", opacity: 0 }}
                whileInView={{
                  x: `0em`,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  duration: 0.4,
                  type: "easeInOut",
                  // stiffness: 100, damping: 10, duration: .4
                }}
                className="flex flex-col w-[30%] justify-center items-center
                        pl-10 pr-10
                      "
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, delay: 0 },
                  }}
                  whileTap={{
                    scale: 1,
                    transition: { duration: 0.2, delay: 0 },
                  }}
                  className="mb-5 md:mb-0"
                >
                  <Card
                    css={{
                      h: "200px",
                      w: "200px",
                      bgColor: "transparent",
                      // bgBlur: "#ffffff66",
                      borderWidth: 1,
                    }}
                  >
                    <Card.Body className="flex items-center">
                      {/*<i className="fa-solid fa-hand-holding-heart fa-6x" style={{color: '#efefef'}}></i>*/}
                      {/*<RiHandHeartLine size={100} color='#c8d6dc'/>*/}
                      {/*<HiOutlineHeart*/}
                      {/*  strokeWidth={.3}*/}
                      {/*  size={100} color='#c8d6dc'/>*/}
                      <IoIosHeartEmpty size={100} color="#c8d6dc" />
                    </Card.Body>
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        // bgBlur: "#ffffff66",
                        bgColor: "transparent",
                        bottom: 0,
                        zIndex: 1,
                        h: "60px",
                        paddingBottom: "0px",
                      }}
                      className="flex justify-center align-center items-center"
                    >
                      <p
                        className="text-center text-sm"
                        style={{ color: "#c8d6dc" }}
                      >
                        Vechime
                      </p>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </motion.div>
            </Row>
          </div>

          <div className="contentHolder pb-10">
            <motion.p
              style={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...textTransition }}
            >
              În cadrul cursurilor, <b>Edward</b> pune în aplicare atât
              cunoștințele acumulate, cât și experiența de sportiv de
              performanță, și reușește să transmită pasiunea sa pentru înot și
              cursanților săi, copii sau adulți. Scopul său ca antrenor este
              să-și provoace cursanții să-și depășească limitele.
            </motion.p>
          </div>

          <Modal
            className="modal"
            title="Experienţă"
            open={selectedId === "1"}
            onCancel={() => setSelectedId(null)}
            footer={
              <Button onClick={() => setSelectedId(null)} type="default">
                Închide
              </Button>
            }
          >
            <p>
              Peste 20 titluri de campion național de junior, tineret și înot
              masters. Medaliat internațional în disciplina polo pe apă.
            </p>
          </Modal>

          <Modal
            className="modal"
            title="Certificare"
            open={selectedId === "2"}
            onCancel={() => setSelectedId(null)}
            footer={
              <Button onClick={() => setSelectedId(null)} type="default">
                Închide
              </Button>
            }
          >
            <p>
              Master cu specializarea Natație din cadrul Facultății de Științe
              ale Mișcării, Sportului și Sănătății. Absolvent al Centrului de
              Formare și Perfecționare a Antrenorilor, București, specializarea
              Natație.
            </p>
          </Modal>

          <Modal
            className="modal"
            title="Vechime"
            open={selectedId === "3"}
            onCancel={() => setSelectedId(null)}
            footer={
              <Button onClick={() => setSelectedId(null)} type="default">
                Închide
              </Button>
            }
          >
            <p>
              Peste 15 ani experiență în predarea înotului către adulți și
              copii.
            </p>
          </Modal>
        </div>
      </div>
      {/*<div className="w-[100vw] h-[20vh] finishGradient" />*/}
      <div
        className="flex flex-col 
								justify-between items-center pt-10 pb-10
								w-100vw bg-[#005f7b]"
        style={{ minHeight: "12rem" }}
      >
        <div
          className="
									gap-20
									grid grid-cols-1 
									sm:grid-cols-2 
									md:grid-rows-2 
									lg:grid-cols-4 lg:grid-rows-1
									max-w-full
                  md:max-w-7xl
									// auto-cols-max
									gap-x-30
									m-auto
									"
        >
          <motion.div
            variants={qualifDivAnimation}
            whileInView="whileInView"
            initial="initial"
            viewport={{ once: true }}
            className="flex flex-col justify-content items-center qualification"
          >
            <motion.div
            // variants={qualifIconAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              <BsWater size={40} color={"#c8d6dc"} />
            </motion.div>

            <motion.h1
            // variants={qualifTextAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              12
            </motion.h1>
            <motion.h3
            // variants={characterAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              Ani de Experienţă
            </motion.h3>
          </motion.div>
          <motion.div
            variants={qualifDivAnimation1}
            whileInView="whileInView"
            initial="initial"
            viewport={{ once: true }}
            className="flex flex-col justify-content items-center qualification"
          >
            <motion.div
            // variants={qualifIconAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              <IoHappyOutline size={40} color={"#c8d6dc"} />
            </motion.div>
            <motion.h1
            // variants={qualifTextAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              7 000
            </motion.h1>
            <motion.h3
            // variants={characterAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              Cursanţi Fericiţi
            </motion.h3>
          </motion.div>
          <motion.div
            variants={qualifDivAnimation2}
            whileInView="whileInView"
            initial="initial"
            viewport={{ once: true }}
            className="flex flex-col justify-content items-center qualification"
          >
            <motion.div
            // variants={qualifIconAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              <CiTrophy size={40} color={"#c8d6dc"} strokeWidth={0.8} />
            </motion.div>
            <motion.h1
            // variants={qualifTextAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              30
            </motion.h1>
            <motion.h3
            // variants={characterAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              Premii la Concursuri
            </motion.h3>
          </motion.div>
          <motion.div
            variants={qualifDivAnimation3}
            whileInView="whileInView"
            initial="initial"
            viewport={{ once: true }}
            className="flex flex-col justify-content items-center qualification"
          >
            <motion.div
            // variants={qualifIconAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              <BsPeople size={40} color={"#c8d6dc"} />
            </motion.div>
            <motion.h1
            // variants={qualifTextAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              48
            </motion.h1>
            <motion.h3
            // variants={characterAnimation}
            // whileInView="whileInView"
            // initial="initial"
            // viewport={{ once: true }}
            >
              Cantonamente
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
