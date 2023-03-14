import {motion} from 'framer-motion';
import '../css/contact.scss';
import viva_ss from '../assets/viva_ss.png';
// @ts-ignore
import {Map, Coordinates} from '../components/widgets/map';
import {useEffect, useMemo, useState, useCallback} from 'react';
import {Button, Divider as ADivider, Form, Input, Space} from "antd";
import {Modal, Divider} from "@nextui-org/react";
import TextArea from "antd/lib/input/TextArea";
import { FormValues, sendContactForm } from '../server/contactApi';
// @ts-ignore
import {showNotification, NotificationType} from "../components/widgets/showNotification";
import { FacebookOutlined } from '@ant-design/icons';
import { FaFacebook } from 'react-icons/fa';
import { RiFacebookLine, RiInstagramLine } from 'react-icons/all';
import { Timetable, Hour, SessionDetails } from '../components/widgets/timetable';

const timeTableData: Hour[] = [
	{
		key: 1,
		ora: "8:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
	},
	{
		key: 2,
		ora: "9:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
		
	},
	{
		key: 3,
		ora: "10:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
	},
	{
		key: 4,
		ora: "11:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: {trainer: "Alexandru Samson", level: "Mediu & Avansaţi"},
		duminica: null
	},
	{
		key: 5,
		ora: "12:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
	},
	{
		key: 6,
		ora: "13:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
	},
	{
		key: 7,
		ora: "14:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
	},
	{
		key: 8,
		ora: "15:00",
		luni: null,
		marti: null,
		miercuri: null,
		joi: null,
		vineri: null,
		sambata: null,
		duminica: null
	},
	{
		key: 9,
		ora: "16:00",
		luni:	{level: "Începători", trainer: "Alexandru Samson"},
		marti:	null, 
		miercuri : {level: "Începători", trainer: "Alexandru Samson"},
		joi: null,
		vineri: {level: "Începători", trainer: "Alexandru Samson"},
		sambata: null, 
		duminica: null
	},
	{
		key: 10,
		ora: "17:00",
		luni:	{level: "Mediu", trainer: "Alexandru Samson"},
		marti:	{level: "Mediu", trainer: "Edward Vuculescu"},
		miercuri:	{level: "Mediu", trainer: "Alexandru Samson"},
		joi:	{level: "Mediu", trainer: "Edward Vuculescu"},
		vineri:	{level: "Mediu", trainer: "Alexandru Samson"},
		sambata:	null, 
		duminica: null
	},
	{
		key: 11,
		ora: "18:00",
		luni:	{level: "Mediu & Avansaţi", trainer: "Alexandru Samson"},
		marti:	{level: "Avansaţi", trainer: "Edward Vuculescu"},
		miercuri:	{level: "Mediu", trainer: "Alexandru Samson"},
		joi:	{level: "Avansaţi", trainer: "Edward Vuculescu"},
		vineri:	{level: "Mediu & Avansaţi", trainer: "Alexandru Samson"},
		sambata:	null, 
		duminica:	null
	},
	{
		key: 12,
		ora: "19:00",
		luni: 	{level: "Avansaţi", trainer: "Alexandru Samson"},
		marti:	{level: "Mediu", trainer: "Edward Vuculescu"},
		miercuri:	{level: "Avansaţi", trainer: "Alexandru Samson"},
		joi:	{level: "Mediu", trainer: "Edward Vuculescu"},
		vineri:	{level: "Avansaţi", trainer: "Alexandru Samson"},
		sambata:	null, 
		duminica: 	null
	}, 
	{
		key: 13,
		ora: "20:00",
		luni:	null,
		marti:	null,
		miercuri:	{level: "Avansaţi", trainer: "Alexandru Samson"},
		joi:	null,
		vineri:		null,
		sambata:	null, 
		duminica:	null
	}, 
	{
		key: 14,
		ora: "21:00",
		luni:	{level: "Grupa Adulţi", trainer: "Alexandru Samson"},
		marti:	null,
		miercuri:	{level: "Grupa Adulţi", trainer: "Alexandru Samson"},
		joi:	null,
		vineri:	{level: "Grupa Adulţi", trainer: "Alexandru Samson"},
		sambata:	null, 
		duminica: 	null
	}, 
];

function Contact() {
	const [form] = Form.useForm();
	const [selectedId, setSelectedId] =
		useState<string | null>(null);

	const handleSubmission = useCallback(
		(result: any) => {
			if (result.error) {
				showNotification("error", NotificationType.error);
				console.log("Submit error!");
			} else {
				showNotification("success", NotificationType.success);
				form.resetFields();
				console.log("resetted field");
			}
		},
		[form]
	);

	// https://dev.to/canonic/build-request-forms-using-react-ant-design-and-a-lowcode-backend-26oe

	const onSubmit = useCallback(async () => {
		let values;
		try {
			values = await form.validateFields();
		} catch (errorInfo) {
			return;
		}
		const result = await sendContactForm(values);
		handleSubmission(result);
	}, [form, handleSubmission]);

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

	const [isMd, setIsMd] = useState(window.matchMedia("(min-width: 768px)").matches);
	const [isLg, setIsLg] = useState(window.matchMedia("(min-width: 1024px").matches);

	useEffect(() => {
		window
			.matchMedia("(min-width: 768px)")
			.addEventListener('change', e => setIsMd(e.matches))
		window
			.matchMedia("(min-width: 1024px)")
			.addEventListener('change', e => setIsLg(e.matches))
	}, []);

	return (
		<div
			id="contact"
			className="bg-[#f2f2f2] w-[100vw] min-h-[200vh] md:min-h-[95vh] pt-10"
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
				<div className="mt-5">
					<div className="contact-area grid
					grid-cols-1 grid-rows-2 gap-y-10
					lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10
					h-[1500px] w-[90%]
					lg:h-[700px]
					ml-auto mr-auto
					lg:w-[75%]">
						<div
							className="contact-card"
						>
							<h1>Unde ne găseşti</h1>
							<div className="mt-14">
								<h3>Locaţia VIVA</h3>
								<div onClick={() => {
									setSelectedId("1");
								}}
								     className="mb-10">
									<img src={viva_ss} alt="loading..."
									     className="rounded-2xl ml-auto mr-auto lg:w-[90%]
									                          hover:opacity-80 transition-opacity shadow-xl"
									/>
									<h5 className="text-center text-gray-400 mt-2">
										Dati click pe hartă pentru mai multe informaţii!
									</h5>
								</div>

								<div className="contact-field">
									<h4>{isMd ? `E-Mail:` : `E-Mail`}</h4>
									<span>contact@scoalaromanadeinot.ro</span>
								</div>

								<div className="h-[10px]"/>

								<div className="contact-field">
									<h4>Telefon:</h4>
									<span> 0736 913 563
                                <ADivider
	                                type="vertical"
	                                style={{background: '#ccc'}}
                                />0736 913 563</span>
								</div>

								<div className="flex flex-1 justify-around mt-5">
        						<center>
									<a href="https://www.facebook.com/ScoalaRomanaDeInot" target="_blank">
									<Button shape="circle" size="large" className="mr-5">
										 <center>
											<RiFacebookLine size="1.3em"/>
										 </center>
									</Button>
									</a>

									<a href="https://www.instagram.com/scoalaromanadeinot" target="_blank">
									<Button shape="circle" size="large" className="ml-5">
										 <center>
											<RiInstagramLine size="1.3em"/>
										 </center>
									</Button>
									</a>
								</center>
								</div>

								<div className="flex flex-col">
									<Button type="default"
									        className="mt-5 mb-14 ml-auto mr-auto font-[Montserrat]"
									        size="large"
											onClick={() => setSelectedId("2")}
									>
										Program
									</Button>
								</div>
								{/*<Map location={viva_location}/>*/}
							</div>
						</div>
						<div
							className="contact-card"
						>
							<h1>Contactează-ne</h1>
							<div className="form-container">
								<Form
									name="basic"
									layout="vertical"
									labelCol={{span: 16}}
									initialValues={{remember: true}}
									autoComplete="off"
									style={{width: "85%"}}
									form={form}
								>
									<Form.Item
										label="Nume"
										name="name"
										rules={[{
											required: true,
											message: 'Introduceti numele dvs.'
										}]}
									>
										<Input placeholder="Ex: Alexandru Andrei"/>
									</Form.Item>

									<Form.Item
										label="E-Mail"
										name="email"
										rules={[{
											required: true,
											message: 'Introduceţi e-mailul dvs.'
										}]}
									>
										<Input placeholder="Ex: exemplu@domeniu.com"/>
									</Form.Item>
									<Form.Item
										label="Subiectul mesajului"
										name="subject"
										rules={[{
											required: true, 
											message: "Introduceţi subiectul mesajului dvs."
										}]}
									>
										<Input placeholder="Ex: Subiect"/>
									</Form.Item>
									<Form.Item
										label="Mesaj"
										name="message"
										rules={[{
											required: true,
											message: 'Introduceţi mesajul'
										}]}
									>
										<TextArea rows={4} placeholder="Ex: Aici puteţi să scrieţi ce neînţelegere aveţi cu privire la informaţiile de pe site"/>
									</Form.Item>
									<Form.Item
										className="flex justify-center"
									>
										<Button type="primary" htmlType="submit" size="large"
										        className="mt-3" onClick={onSubmit}
										>
											Trimite
										</Button>
									</Form.Item>
								</Form>
							</div>
						</div>
						<Modal
							closeButton
							blur 
							open={selectedId === "2"}
							onClose={() => setSelectedId(null)}
							css={{maxHeight: isMd ? "90vh" : "none", paddingLeft: 0}}
							fullScreen={isMd ? false : true}
						>
							<Modal.Header>
								<h1
									className="text-3xl">
										Program
								</h1>
							</Modal.Header>
							<Modal.Body>
								<Timetable values={timeTableData}/>
							</Modal.Body>
						</Modal>
						<Modal
							closeButton
							blur
							open={selectedId === "1"}
							onClose={() => setSelectedId(null)}
						>
							<Modal.Header>
								<h1
									className="text-3xl">
									Locatia VIVA
								</h1>
							</Modal.Header>
							<Modal.Body>
								{/*<Map location={viva_location}*/}
								{/*     mapContainerClassName="map-container"*/}
								{/*/>*/}
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5701.934987797255!2d26.124697!3d44.392789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fecde8809ff1%3A0xe619a6e9db88e74b!2zyJhjb2FsYSBSb23Dom7EgyBkZSDDjm5vdA!5e0!3m2!1sen!2sus!4v1677990112104!5m2!1sen!2sus"
									width="600" height="450" 
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									style={{marginLeft: "auto", marginRight: "auto"}}
									className="map-container"
								/>
								<Button
									type="default"
									className="w-[200px] ml-auto mr-auto"
									href="https://goo.gl/maps/BecgNWmthqoKNDyj8" target="_blank">
									Deschideti in Google Maps
								</Button>
							</Modal.Body>
							<Modal.Footer>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
