import React, {useRef, useEffect, useState} from 'react';
import '../../css/flashcard.scss';
import {motion} from 'framer-motion';


const cardVariants = {
	selected: {
		// rotateY: 180,
		scale: 1.1,
		transition: {duration: .35},
		zIndex: 10,
		boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
	},

	notSelected: (i: number) => ({
		rotateY: i * 15,
		scale: 1 - Math.abs(i * 0.15),
		x: i ? i * 50 : 0,
		opacity: 1 - Math.abs(i * .15),
		zIndex: 10 - Math.abs(i),
		boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
		transition: {duration: .35}
	})

}

const Flashcards = (props: { children: any; }) => {

	const cards = Array.from(props.children);

	const [selectedCard, setSelectedCard] = useState(null);
	console.log(props.children);
	const [{
		startX,
		startScrollLeft,
		isDragging
	}, setDragStart] = useState({
		startX: undefined,
		startScrollLeft: undefined,
		isDragging: false
	});

	const containerRef = useRef();

	const cardRefs = useRef(new Array());

	useEffect(() => {

		// @ts-ignore
		const {scrollWidth, clientWidth} = containerRef.current;

		const halfScroll = (scrollWidth - clientWidth) / 2;

		// @ts-ignore
		containerRef.current.scrollLeft = halfScroll;

	}, [containerRef.current]);

	// @ts-ignore
	const handleMouseDown = e => {

		setDragStart({
			// @ts-ignore
			startX: e.pageX - containerRef.current.offsetLeft,

			// @ts-ignore
			startScrollLeft: containerRef.current.scrollLeft,
			isDragging: true
		});

	}

	// @ts-ignore
	const handleMouseMove = e => {

		if (!isDragging || selectedCard) return;

		// @ts-ignore
		const x = e.pageX - containerRef.current.offsetLeft;
		// @ts-ignore
		const walk = x - startX;
		// @ts-ignore
		containerRef.current.scrollLeft = startScrollLeft - walk;

	}

	// @ts-ignore
	const selectCard = card => {
		setSelectedCard(selectedCard ? null : card);

		if (card && !selectedCard) {
			cardRefs.current[card - 1].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center'
			});
		}
	}

	// @ts-ignore
	const handleCardMouseUp = (e, card) => {
		if (isDragging) {
			// @ts-ignore
			const x = e.pageX - containerRef.current.offsetLeft;
			// @ts-ignore
			const walk = x - startX;
			if (Math.abs(walk) < 5) selectCard(card);
		} else selectCard(card);
	}
	// @ts-ignore
	return (
		<div
			className="flashcards"
			onMouseDown={handleMouseDown}
			onMouseUp={() => setDragStart(prev => ({...prev, isDragging: false}))}

			onMouseMove={handleMouseMove}
		>
			<div
				className="flashcards__container"
				// @ts-ignore
				ref={containerRef}
			>
				{cards.map((card, i) => (
					<motion.div
						className="card"
						key={i}
						ref={el => cardRefs.current.push(el)}
						onMouseUp={e => handleCardMouseUp(e, i + 1)}
						variants={cardVariants}
						animate={selectedCard === (i + 1) ? "selected" : "notSelected"}
						custom={selectedCard ? selectedCard - (i + 1) : 0}
					>
						<motion.div
							initial={{opacity: 0, x: -5}}
							whileInView={{
								opacity: 1,

								x: 0,
								transition: {
									duration: .4,
									delay: .2,
									ease: [.2, .65, .3, .9]
								}
							}}
							viewport={{once: true}}
							className="flashcards__selectable"
						>
							{card}
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Flashcards;