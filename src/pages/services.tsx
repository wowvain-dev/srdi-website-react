import { motion } from "framer-motion";
import "../App.css";
import "../css/layout.css";
import { Divider, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Divider as ADivider } from "antd";
import ChildrenSwim from "../assets/children-swim.jpg";
import AdultSwim from "../assets/adult-swim.jpg";
import BabySwim from "../assets/baby-swim.jpg";
import AquaGym from "../assets/aqua-gym.jpg";
import AquaRecovery from "../assets/aqua-recovery.jpg";
import SwimmingMasters from "../assets/masters-swim.jpg";



function Services() {
  
  
  const headerVariants = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25,
        ease: "easeIn",
      },
    },
  };

  const serviceCard1 = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: .4,
        delay: .4,
        ease: [.2, .65, .3, .9]
      }
    }
  };

  const serviceCard2 = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: .4,
        delay: .4,
        ease: [.2, .65, .3, .9]
      }

    }
  };

  const serviceCard3 = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: .4,
        delay: .4,
        ease: [.2, .65, .3, .9]
      }

    }
  };

    const serviceCard4 = {
      initial: {
        opacity: 0,
      },
      inView: {
        opacity: 1,
        transition: {
          duration: .4,
          delay: .4,
          ease: [.2, .65, .3, .9]
        }

      }
    };


  const serviceCard5 = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: .4,
        delay: .4,
        ease: [.2, .65, .3, .9]
      }

    }
  };

  const serviceCard6 = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        duration: .4,
        delay: .4,
        ease: [.2, .65, .3, .9]
      }

    }
  };

  return (
    <div id="servicii" className=" w-[100vw] min-h-[100vh] mb-20">
      <div className="pt-10 w-[100vw] min-h-[85vh]">
        <div className="container-fluid">
          <motion.div
            variants={headerVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true }}
            className="title-holder mb-0"
          >
            <h2>Servicii</h2>
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
                  css={{ background: "#000", height: 2 }}
                  className="mt-6"
                />
              </motion.div>
            </center>
          </motion.div>

          <div className="flex justify-evenly ml-auto mr-auto w-[60%] h-[40px]">
            <center>
              <motion.p
                className="text-sm md:text-lg text-center"
                style={{ fontFamily: "Montserrat" }}
                viewport={{once: true}}
                initial={{opacity: 0, y: -8}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [.2, .65, .3, .9]
                }}
              >
                Condiții excelente
              </motion.p>
            </center>
            <motion.div
              initial={{height: 0}}
              whileInView={{height: 40}}
              transition={{
                delay: 1.5,
                duration: .4,
                ease: [.2, .65, .3, .9]
              }}
            >
              <ADivider
                type="vertical"
                style={{ background: "#ccc" }}
                className="h-full"
              ></ADivider>
            </motion.div>
            <motion.p
              className="text-sm md:text-lg text-center"
              style={{ fontFamily: "Montserrat" }}
              viewport={{once: true}}
              initial={{opacity: 0, y: -8}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                delay: 1.15,
                duration: 1,
                ease: [.2, .65, .3, .9]
              }}
            >
              Bazine acoperite
            </motion.p>
            <motion.div
              initial={{height: 0}}
              whileInView={{height: 40}}
              transition={{
                delay: 1.5,
                duration: .4,
                ease: [.2, .65, .3, .9]
              }}
            >
              <ADivider
                type="vertical"
                className="h-full"
                style={{ background: "#ccc" }}
              ></ADivider>
            </motion.div>
            <motion.p
              className="text-sm md:text-lg text-center"
              style={{ fontFamily: "Montserrat" }}
              viewport={{once: true}}
              initial={{opacity: 0, y: -8}}
              whileInView={{opacity: 1, y: 0}}
              transition={{
                delay: 1.3,
                duration: 1,
                ease: [.2, .65, .3, .9]
              }}
            >
              Metode moderne
            </motion.p>
          </div>
          <div className="contentHolder">
            <div className="grid gap-y-10 lg:grid-cols-2">
              <motion.div
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                variants={serviceCard1}
              >
              <Card  
              className="w-[75%] md:w-[90%]"
              css={{h: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    bg: '#fff',
                    zIndex: 1,
                    borderBottom: "$borderWeights$light solid $gray800",
                    justifyContent: 'center',
                  }}
                >
                    <h3
                      // className="uppercase"
                      style={{
                        color: "#2a2b2a",
                        fontSize: "28px",
                        strokeWidth: "2",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Cursuri Înot Copii
                    </h3>
                    <p></p>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={ChildrenSwim}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <p
                        className="text-md sm:text-lg md:text-2xl"
                        style={{
                          color: "#d1d1d1",
                          textAlign: "left",
                        }}
                      >
                        Ajutăm copiii să înveţe despre frumuseţea înotului
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto style={{fontFamily: 'Montserrat', borderColor: '#fff'}}
                      >
                        Află mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
              </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="inView"
                  viewport={{ once: true }}
                  variants={serviceCard2}
                >
              <Card
              className="w-[75%] md:w-[90%]"
              css={{ h: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    bg: '#fff',
                    zIndex: 1,
                    borderBottom: "$borderWeights$light solid $gray800",
                    justifyContent: 'center',
                  }}
                >
                    <h3
                      // className="uppercase"
                      style={{
                        color: "#2a2b2a",
                        fontSize: "28px",
                        strokeWidth: "2",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Cursuri Înot Adulţi
                    </h3>
                    <p></p>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={AdultSwim}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <p
                        className="text-md sm:text-lg md:text-2xl"
                        style={{
                          color: "#d1d1d1",
                          textAlign: "left",
                        }}
                      >
                        Poţi începe studiul înotului de la orice vârstă
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto style={{fontFamily: 'Montserrat', borderColor: '#fff'}}
                      >
                        Află mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
              </motion.div>


              <motion.div
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                variants={serviceCard3}
              >
              <Card
              className="w-[75%] md:w-[90%]"
              css={{ h: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    bg: '#fff',
                    zIndex: 1,
                    borderBottom: "$borderWeights$light solid $gray800",
                    justifyContent: 'center',
                  }}
                >
                    <h3
                      // className="uppercase"
                      style={{
                        color: "#2a2b2a",
                        fontSize: "28px",
                        strokeWidth: "2",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Cursuri Înot Bebeluşi
                    </h3>
                    <p></p>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={BabySwim}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <p
                        className="text-md sm:text-lg md:text-2xl"
                        style={{
                          color: "#d1d1d1",
                          textAlign: "left",
                        }}
                      >
                        Bebeluşii pot începe să înveţe a înoata încă din primele luni
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto style={{fontFamily: 'Montserrat', borderColor: '#fff'}}
                      >
                        Află mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                variants={serviceCard4}
              >
              <Card
              className="w-[75%] md:w-[90%]"
              css={{ h: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    bg: '#fff',
                    zIndex: 1,
                    borderBottom: "$borderWeights$light solid $gray800",
                    justifyContent: 'center',
                  }}
                >
                    <h3
                      // className="uppercase"
                      style={{
                        color: "#2a2b2a",
                        fontSize: "28px",
                        strokeWidth: "2",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Gimnastică Acvatică
                    </h3>
                    <p></p>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={AquaGym}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <p
                        className="text-md sm:text-lg md:text-2xl"
                        style={{
                          color: "#d1d1d1",
                          textAlign: "left",
                        }}
                      >
                        Tonifiază-ţi musculatura folosindu-te de rezistenţa apei
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto style={{fontFamily: 'Montserrat', borderColor: '#fff'}}
                      >
                        Află mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                variants={serviceCard5}
              >
              <Card
              className="w-[75%] md:w-[90%]"
              css={{ h: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    bg: '#fff',
                    zIndex: 1,
                    borderBottom: "$borderWeights$light solid $gray800",
                    justifyContent: 'center',
                  }}
                >
                    <h3
                      // className="uppercase"
                      style={{
                        color: "#2a2b2a",
                        fontSize: "28px",
                        strokeWidth: "2",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Recuperare Medicală
                    </h3>
                    <p></p>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={AquaRecovery}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <p
                        className="text-md sm:text-lg md:text-2xl"
                        style={{
                          color: "#d1d1d1",
                          textAlign: "left",
                        }}
                      >
                        Ne folosim de tehnici de hidrokinetoterapie pentru a vă îmbunătăţi recuperarea medicală
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto style={{fontFamily: 'Montserrat', borderColor: '#fff'}}
                      >
                        Află mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                variants={serviceCard6}
              >
              <Card
              className="w-[75%] md:w-[90%]"
              css={{h: "400px", marginLeft: 'auto', marginRight: 'auto' }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    bg: '#fff',
                    zIndex: 1,
                    borderBottom: "$borderWeights$light solid $gray800",
                    justifyContent: 'center',
                  }}
                >
                    <h3
                      // className="uppercase"
                      style={{
                        color: "#2a2b2a",
                        fontSize: "28px",
                        strokeWidth: "2",
                        fontFamily: "Montserrat",
                      }}
                    >
                      Maeştrii Înotului
                    </h3>
                    <p></p>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={SwimmingMasters}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                  ></Card.Image>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <p
                        className="text-md sm:text-lg md:text-2xl"
                        style={{
                          color: "#d1d1d1",
                          textAlign: "left",
                        }}
                      >
                        Ajutăm pasionaţii să atingă nivelul de performanță la care visează
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto style={{fontFamily: 'Montserrat', borderColor: '#fff'}}
                      >
                        Afla mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
