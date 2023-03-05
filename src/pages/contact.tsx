import {motion} from 'framer-motion';
import {Divider} from "@nextui-org/react";
import '../css/contact.scss';
import viva_ss from '../assets/viva_ss.png';
// @ts-ignore
import {Map, Coordinates} from '../components/widgets/map';
import {GoogleMap} from '@react-google-maps/api';
import {useMemo, useState} from 'react';
import {Button, Modal} from "antd";


function Contact() {
	const [selectedId, setSelectedId] =
		useState<string | null>(null);

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

	const viva_location = useMemo(() => ({
		lat: 44.3930264371725,
		lng: 26.124782628868132
	}), []);

	const spa_location = useMemo(() => ({
		lat: 44.43341622122499,
		lng: 26.149366472423953
	}), []);

	return (
		<div
			id="contact"
			className="bg-[#f2f2f2] w-[100vw] min-h-[200vh] pt-10"
		>
			<div className="container-fluid">
				<motion.div
					variants={headerVariants}
					initial="initial"
					whileInView="inView"
					viewport={{once: true}}
					className="title-holder mb-0"
				>
					<h2>Contact</h2>
					<center>
						<motion.div
							transition={{
								delay: .5,
								type: "spring",
								stiffness: 400,
								damping: 20,
								duration: .5
							}}
							whileInView={{width: "40%"}}
							initial={{width: "0%"}}
							style={{width: "0%"}}
						>
							<Divider
								css={{background: "#000", height: 2}}
								className="mt-6"
							/>
						</motion.div>
					</center>
				</motion.div>
				<div className="mt-20">
					<div className="contact-area grid
					grid-cols-1 grid-rows-2 gap-y-10
					lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10
					h-[150vh] w-[75%]
					ml-auto mr-auto
					lg:h-[600px]">
						<div
							className="contact-card"
						>
							<h1>Unde ne găseşti</h1>
							<div className="mt-14">
								<h3>Locaţia VIVA</h3>
								<div onClick={() => {
									setSelectedId("1");
								}}>
									<img src={viva_ss} alt="loading..."
									     className="rounded-2xl ml-auto mr-auto lg:w-[90%]
									      hover:opacity-80 transition-opacity shadow-xl
									     "
									/>
									<h5 className="text-center text-gray-400 mt-2">
										Dati click pe hartă pentru mai multe informaţii!
									</h5>
								</div>
								{/*<Map location={viva_location}/>*/}
							</div>
						</div>
						<div
							className="contact-card"
						>
							<h1>Contactează-ne</h1>
						</div>
						<div className="contact-card__shadow"
						/>
						<div className="contact-card__shadow1"
						/>

						<Modal
							className="modal"
							title="Locaţia VIVA"
							open={selectedId === "1"}
							onCancel={() => setSelectedId(null)}
							footer={
								<Button onClick={() => setSelectedId(null)}
								        type="default"
								>
									Închide
								</Button>
							}
						>
							<div>
								<Map location={viva_location}
								     mapContainerClassName="w-[600px] h-[400px]"
								/>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
