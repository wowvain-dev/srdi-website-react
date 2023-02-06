import { motion } from 'framer-motion';
import '../App.css';
import '../css/layout.css';
import { Divider } from '@nextui-org/react';

function Services() {
  const headerVariants = {
    initial: {
      opacity: 0
    },
    inView: {
      opacity: 1,
      transition: {
        duration: .5,
        delay: .25,
        ease: "easeIn"
      }
    }
  };

  return(
          <div id="servicii" className=" w-[100vw] h-[100vh]" >
            <div className="pt-10 w-[100vw] min-h-[85vh]">
              <div className="container-fluid">
                <motion.div 
                variants={headerVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={{once: true}}
                  className="title-holder"
                >
                  <h2>Servicii</h2>
                <center>
                  <motion.div
                    transition={{delay: .5, type: "spring", stiffness: 400, damping: 20, duration: .5}}
                                    // stiffness: 400, damping: 10, duration: .4
                    whileInView={{width: '40%'}}
                    initial={{width: '0%'}}
                    style={{width: '0%'}}
                    // viewport={{once: true}}
                  >
                    <Divider css={{background: '#000', height: 2}} className="mt-6 mb-6"/>
                  </motion.div>
                </center>
                </motion.div>
              </div>
            </div>
          </div>
  );
}

export default Services;