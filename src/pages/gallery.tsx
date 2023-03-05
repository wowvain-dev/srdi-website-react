import '../App.css';
import {motion} from 'framer-motion';
import {Divider} from '@nextui-org/react';
import {Button} from "antd";
import {Carousel} from "flowbite-react";
import gal1 from '../assets/gal-01.jpg';
import gal2 from '../assets/gal-02.jpg';
import gal3 from '../assets/gal-03.jpg';
import gal4 from '../assets/gal-04.jpg';
import gal5 from '../assets/gal-05.jpg';
import gal6 from '../assets/gal-06.jpg';
import gal8 from '../assets/gal-08.jpg';
import gal9 from '../assets/gal-09.jpg';
import gal10 from '../assets/gal-10.jpg';
import gal11 from '../assets/gal-11.jpg';

import Flashcards from "../components/widgets/flashcards";


function Gallery() {

	const galleryPhotos = [];
	galleryPhotos.push(gal1);
	galleryPhotos.push(gal2);
	galleryPhotos.push(gal3);
	galleryPhotos.push(gal4);
	galleryPhotos.push(gal5);
	galleryPhotos.push(gal6);
	galleryPhotos.push(gal8);
	galleryPhotos.push(gal9);
	galleryPhotos.push(gal10);
	galleryPhotos.push(gal11);

	const cardStyle = {
		borderRadius: '15px',
		height: '300px',
		width: '100%'
	};

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
			id="galerie"
			className="bg-[#fff] w-[100vw] min-h-[50vh] mb-20 pt-10">
			<div>
				<motion.div
					variants={headerVariants}
					initial="initial"
					whileInView="inView"
					viewport={{once: true}}
					className="title-holder mb-0 container-fluid ml-auto mr-auto"
				>
					<h2>Galerie</h2>
					<center>
						<motion.div
							transition={{
								delay: .5,
								type: "spring",
								stiffness: 400,
								damping: 20,
								duration: .5,
							}}
							whileInView={{width: "40%"}}
							initial={{width: "0%"}}
							style={{width: "0%"}}
						>
							<Divider css={{background: "#000", height: 2}} className="mt-6"/>
						</motion.div>
					</center>
				</motion.div>
				<motion.div>
					<Flashcards>
						{
							galleryPhotos.map((val, index) => (
								<div
									style={{
										backgroundImage: `url(${val})`,
										backgroundSize: `100%`,
										...cardStyle
									}}
								/>
							))
						}
					</Flashcards>
				</motion.div>
			</div>
		</div>
	);
}

export default Gallery;