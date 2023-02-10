import { motion } from "framer-motion";
import "../App.css";
import "../css/layout.css";
import { Divider, Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Divider as ADivider } from "antd";
import ChildrenSwim from "../assets/children-swim.jpg";

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

  return (
    <div id="servicii" className=" w-[100vw] h-[100vh]">
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
          {/* <Row></Row> */}
          <div className="flex justify-evenly ml-auto mr-auto w-[60%] h-[40px]">
            <center>
              <motion.p
                className="text-sm md:text-lg text-center"
                style={{ fontFamily: "Montserrat" }}
              >
                Condiții excelente
              </motion.p>
            </center>
            <ADivider
              type="vertical"
              style={{ background: "#ccc" }}
              className="h-full"
            ></ADivider>
            <p
              className="text-sm md:text-lg text-center"
              style={{ fontFamily: "Montserrat" }}
            >
              Bazine acoperite
            </p>
            <ADivider
              type="vertical"
              className="h-full"
              style={{ background: "#ccc" }}
            ></ADivider>
            <p
              className="text-sm md:text-lg text-center"
              style={{ fontFamily: "Montserrat" }}
            >
              Metode moderne
            </p>
          </div>
          <div className="contentHolder">
            <div className="grid">
              <Card css={{ w: "100%", h: "400px" }}>
                <Card.Header
                  css={{
                    position: "absolute",
                    zIndex: 1,
                  }}
                >
                  <Col>
                    <h3
                      className="uppercase"
                      style={{
                        color: "#fefefe",
                        fontSize: "28px",
                        strokeColor: "000",
                        strokeWidth: "2",
                      }}
                    >
                      Cursuri Inot Copii
                    </h3>
                    <p></p>
                  </Col>
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
                        Ajutam copiii sa invete despre frumusetea inotului!
                      </p>
                    </Col>
                    <div className="flex flex-col h-full">
                      <div className="flex-1" />
                      <Button color="gradient" auto>
                        Afla mai multe
                      </Button>
                      <div className="flex-1" />
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
