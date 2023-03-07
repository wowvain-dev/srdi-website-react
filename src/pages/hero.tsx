import {InView} from "react-intersection-observer";
import {Button, Card, Typography} from "antd";
import {gray} from "@ant-design/colors";
import Wave from "react-wavify";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useInView} from "framer-motion";

const {Text, Title, Paragraph} = Typography;


export default function AppHero() {

    const [buttonVisible, setButtonVisible] = useState(true);
    const [buttonClass, setButtonClass] = useState('dive-btn');

    const ref = useRef(null);
    const isInView = useInView(ref, {amount: .6});

    useEffect(() => {
        // console.log(isInView);
    }, [isInView]);

    return (
        // <InView threshold={.6}>
        //   {
        // ({inView, ref, entry}) => {

        // console.log(buttonVisible);
        // setButtonVisible(inView);
        <div className="backgroundImage bg-fixed" id="acasa" ref={ref}>
            <div
                className="items-center align-center justify-center flex flex-col"
                style={{
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <div className="flex-1"/>
                <Card
                    className="w-[80%] md:w-[60%] p-10 hero-card"
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
                <AnimatePresence>
                    {isInView &&
                        <motion.a href="#despre_noi"
                                  initial={{opacity: 0}}
                                  animate={{opacity: 1}}
                                  exit={{opacity: 0}}
                                  viewport={{amount: .6}}
                                  style={{zIndex: 999}}
                        >
                            {/*123*/}
                            <Button
                                className="mb-10 font-[Montserrat]"
                                style={{zIndex: 100, color: "#fff"}}
                                type="default" size="large"
                            >
                                SCUFUNDĂ-TE
                            </Button>
                        </motion.a>

                    }
                </AnimatePresence>
            </div>
        </div>
        //     }
        //   }
        // </InView>

    );
}