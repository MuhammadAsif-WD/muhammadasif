import { Icon } from '@iconify/react'
import { send } from 'emailjs-com'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
	const [sender_name, set_sender_name] = useState('')
	const [sender_email, set_sender_email] = useState('')
	const [sender_subject, set_sender_subject] = useState('')
	const [sender_phone, set_phone] = useState('')
	const [sender_message, set_message] = useState('')
	const handleNameChange = e => {
		set_sender_name(e.target.value)
	}
	const handleEmailChange = e => {
		set_sender_email(e.target.value)
	}
	const handleSubjectChange = e => {
		set_sender_subject(e.target.value)
	}
	const handleMessageChange = e => {
		set_message(e.target.value)
	}
	const handlePhoneChange = e => {
		set_phone(e.target.value)
	}
	const sendMail = e => {
		e.preventDefault()
		send(
			'service_kyyrsej',
			'template_su8hbei',
			{
				sender_name,
				sender_email,
				sender_message,
				sender_subject,
				sender_phone,
			},
			'WpMgcyC3aVAAi8KPa'
		)
			.then(response => toast.success('Send your massage'))

			.catch(err => toast.error('Failed send your mail', err))
	}

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{
				x: window.innerWidth,
				transition: { duration: 1 },
			}}
		>
			<div className="mb-10">
				<div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
					<div className="flex flex-col gap-5">
						<div
							className="
						2xl:w-96 xl:w-96 lg:w-96 md:w-full w-82 h-32 rounded-xl shadow-xl bg-black
						animate__animated animate__fadeInLeft animate__delay-1s
						"
						>
							<Icon
								className="w-10 h-10 mx-auto m-5 text-primary"
								icon="ant-design:message-outlined"
							/>
							<a
								href="https://wa.me/+8801830018193/?text=Hello!"
								target="_blank"
								rel="noreferrer"
								className="text-[#fff] hover:text-[#fff]/50 duration-300 ease-in-out"
							>
								<p className="text-center">Contact me on WhatsApp</p>
							</a>
						</div>
						<div
							className="
						2xl:w-96 xl:w-96 lg:w-96 md:w-full w-82 h-32 rounded-xl shadow-xl bg-black
						animate__animated animate__fadeInLeft animate__delay-2s"
						>
							<Icon
								className="w-10 h-10 mx-auto m-5 text-primary"
								icon="tabler:phone-calling"
							/>
							<a
								href="tel:+8801830018193"
								className="text-[#fff] hover:text-[#fff]/50 duration-300 ease-in-out"
							>
								<p className="text-center">+880 18300-18193</p>
							</a>
						</div>
						<div
							className="
						2xl:w-96 xl:w-96 lg:w-96 md:w-full w-82 h-32 rounded-xl shadow-xl bg-black
						animate__animated animate__fadeInLeft animate__delay-3s"
						>
							<Icon
								className="w-10 h-10 mx-auto m-5 text-primary"
								icon="ic:outline-email"
							/>
							<a
								href="mailto:muhammadasif2m@gmail.com"
								target="_blank"
								rel="noreferrer"
								className="text-[#fff] hover:text-[#fff]/50 duration-300 ease-in-out"
							>
								<p className="text-center">Contact me on G-mail</p>
							</a>
						</div>
						<div
							className="
						2xl:w-96 xl:w-96 lg:w-96 md:w-full w-82 h-32 rounded-xl shadow-xl bg-black
						animate__animated animate__fadeInLeft animate__delay-4s"
						>
							<Icon
								className="w-10 h-10 mx-auto m-5 text-primary"
								icon="line-md:confirm-circle"
							/>
							<a
								href="https://wa.me/+8801830018193/?text=Hello!"
								target="_blank"
								rel="noreferrer"
								className="text-[#fff] hover:text-[#fff]/50 duration-300 ease-in-out"
							>
								<p className="text-center">Freelance Available</p>
							</a>
						</div>
					</div>
					<div
						className="mt-10 animated__box__red 
					2xl:w-[65vw] xl:w-[60vw] lg:w-[50vw] md:w-full
					2xl:-ml-[18vw] xl:-ml-[14vw] lg:-ml-[5vw] 2xl:mt-0 xl:mt-0 
					lg:mt-0 p-[6px]"
					>
						<div
							className="bg-black flex flex-col 
					animate__animated animate__zoomIn animate__delay-1s
					relative z-[2] rounded-xl shadow-xl pb-10"
						>
							<form action="" onSubmit={sendMail}>
								<div className="grid grid-cols-2 mx-auto 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-10 gap-5 pt-16 p-10">
									<input
										type="text"
										name="text"
										id="1"
										placeholder="Your Name"
										required="true"
										value={sender_name}
										onChange={handleNameChange}
										className="outline-none rounded-md p-3 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs bg-black border border-primary"
									/>
									<input
										type="number"
										number="text"
										id="1"
										placeholder="Your Phone"
										required="true"
										value={sender_phone}
										onChange={handlePhoneChange}
										className="outline-none rounded-md p-3 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs bg-black border border-primary"
									/>
									<input
										type="mail"
										number="text"
										id="1"
										placeholder="Your G-mail"
										required="true"
										onChange={handleEmailChange}
										value={sender_email}
										className="outline-none rounded-md p-3 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs bg-black border border-primary"
									/>
									<input
										type="text"
										number="text"
										id="1"
										placeholder="Your Subject"
										required="true"
										onChange={handleSubjectChange}
										value={sender_subject}
										className="outline-none rounded-md p-3 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs bg-black border border-primary"
									/>
								</div>
								<textarea
									name="message"
									id="message"
									cols="40"
									rows="6"
									placeholder="Your Message"
									value={sender_message}
									onChange={handleMessageChange}
									className="outline-none rounded-md p-3 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs bg-black border border-primary 2xl:w-[54vw] xl:w-[54vw] lg:w-[45vw] md:w-[80vw] w-[70vw] mx-auto block"
								></textarea>

								<input
									type="submit"
									value="Send Message"
									className="
								2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-96 w-64 mx-auto block 2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-10 sm:mt-5 mt-5 
								border border-primary
								hover:bg-primary rounded-md p-3
								ease-in-out duration-500 cursor-pointer"
								/>
								<Icon
									className="
								w-5 h-5 mx-auto -mt-9 2xl:ml-[35vw] xl:ml-[35vw] lg:ml-[31vw] md:ml-[52vw] sm:ml-[54vw] ml-[63vw]"
									icon="mingcute:send-plane-line"
								/>
							</form>
						</div>
					</div>
				</div>
				<Toaster />
			</div>
		</motion.div>
	)
}

export default Contact
