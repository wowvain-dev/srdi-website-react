import "../App.css";
import "../css/layout.css";
import "../css/flashcards.css";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";
import { useRef, useEffect, useState } from "react";

const cards = [1, 2, 3];

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: { duration: 0.35 },
    zIndex: 10,
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
  },
  notSelected: (i) => ({
    rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * 0.3),
    zIndex: 10 - Math.abs(i),
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`,
    transition: { duration: 0.35 },
  }),
};

const Flashcards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: undefined,
    startScrollLeft: undefined,
    isDragging: false,
  });

  const containerRef = useRef();

  const cardRefs = useRef(new Array());

  useEffect(() => {
    const { scrollWidth, clientWidth } = containerRef.current;

    const halfScroll = (scrollWidth - clientWidth) / 2;

    containerRef.current.scrollLeft = halfScroll;
  }, [containerRef.current]);

  const handleMouseDown = (e) => {
    setDragStart({
      startX: e.pageX - containerRef.current.offsetLeft,

      startScrollLeft: containerRef.current.scrollLeft,

      isDragging: true,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || selectedCard) return;

    const x = e.pageX - containerRef.current.offsetLeft;

    const walk = x - startX;

    containerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const selectCard = (card) => {
    setSelectedCard(selectedCard ? null : card);

    if (card && !selectedCard) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: "smooth",

        block: "nearest",

        inline: "center",
      });
    }
  };

  const handleCardMouseUp = (e, card) => {
    if (isDragging) {
      const x = e.pageX - containerRef.current.offsetLeft;

      const walk = x - startX;

      if (Math.abs(walk) < 5) selectCard(card);
    } else selectCard(card);
  };

  return (
    <div
      className="flashcards"
      onMouseDown={handleMouseDown}
      onMouseUp={() => setDragStart((prev) => ({ ...prev, isDragging: false }))}
      onMouseMove={handleMouseMove}
    >
      <div className="flashcards__container" ref={containerRef}>
        {cards.map((card, i) => (
          <motion.div
            className="card"
            key={card}
            ref={(el) => cardRefs.current.push(el)}
            onMouseUp={(e) => handleCardMouseUp(e, card)}
            variants={cardVariants}
            animate={selectedCard === card ? "selected" : "notSelected"}
            custom={selectedCard ? selectedCard - card : 0}
          >
            <div style={{ backfaceVisibility: "hidden" }}>test</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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
      <div className="containerFluid">
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
          <Flashcards />
        </div>
      </div>
    </div>
  );
}

export default Prices;
