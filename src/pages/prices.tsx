import "../App.css";
import "../css/layout.css";
import "../css/flashcards.css";
import "../css/prices.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";
import { useRef, useEffect, useState } from "react";
import {Card, Col, Row } from "antd";
import {HiOutlineUserGroup, HiOutlineUsers, HiUser, HiUserGroup, HiUsers} from "react-icons/hi";


function Prices() {
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
    <div
      id="tarife"
      className="bg-[#efefef] w-[100vw] min-h-[100vh] mb-20 pt-10"
    >
      <div className="container-fluid">
        <motion.div
          variants={headerVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true }}
          className="title-holder mb-0"
        >
          <h2>Tarife</h2>
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
        <div>
          <div className="grid grid-cols-3 gap-16 mr-auto ml-auto">
            <div className="price-card">
              <div className="box">
                <div className="content">
                  <h2><HiUser /></h2>
                  <h3>Lecţii de Înot cu Antrenor Personal</h3>
                  <h4><b>1 cursant</b></h4>
                  <Row>
                    <Col span={6}>
                      <p><b>1</b></p>
                    </Col>
                    <Col span={18}>
                      <p>şedinţă înot: 160.00 LEI</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <p><b>4</b></p>
                    </Col>
                    <Col span={18}>
                      <p>şedinţe înot: 520.00 LEI</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <p><b>6</b></p>
                    </Col>
                    <Col span={18}>
                      <p>şedinţe înot: 750.00 LEI</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <p><b>8</b></p>
                    </Col>
                    <Col span={18}>
                      <p>şedinţe înot: 920.00 LEI</p>
                    </Col>
                  </Row>
                  <a>Află mai multe</a>
                </div>

              </div>

            </div>
            <div className="price-card">
              <div className="box">
                <div className="content">
                  <h2><HiUsers /></h2>
                  <h3>Lecţii de Înot cu Antrenor Personal</h3>
                  <h4><b>2 cursanţi</b></h4>
                  <p>
                    Lorem Ipsum deez nuts
                  </p>
                  <a>Află mai multe</a>
                </div>

              </div>

            </div>
            <div className="price-card">
              <div className="box">
                <div className="content">
                  <h2><HiUserGroup /></h2>
                  <h3>Lecţii de Înot în Grupe</h3>
                  <h4><b>copii & adulţi</b></h4>
                  <p>
                    Lorem Ipsum deez nuts
                  </p>
                  <a>Află mai multe</a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
