import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import bannerImage from '../Assets/svg/bannerImage.svg'

const Home = () => {
	var ReactRotatingText = require('react-rotating-text')
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{
				x: window.innerWidth,
				transition: { duration: 1 },
			}}
		>
			<div className="grid 2xl:grid-cols-2 xl:xl:grid-cols-2 lg:xl:grid-cols-2 gap-5">
				<div>
					<div>
						<h1 className="text-3xl font-bold leading-tight animate__animated animate__bounceInLeft">
							Hello, <span className="text-primary">I'm</span>
						</h1>
						<h1 className="2xl:text-[62px] xl:text-[62px] lg:text-[62px] md:text-[62px] text-[52px] font-extrabold mt-8 mb-2 leading-none pb-3 animate__animated animate__bounceInLeft animate__delay-1s">
							Muhammad Asif
						</h1>
						<h1 className="text-4xl landing-relaxed animate__animated animate__bounceInLeft animate__delay-2s">
							<ReactRotatingText items={['Web Designer', 'Web Developer']} />
						</h1>
						<div className="leading-relaxed flex flex-col gap-y-5 mt-10 animate__animated animate__bounceInLeft animate__delay-3s">
							<p>
								I’m a Front-End Developer located in Dhaka, Bangladesh. I am
								passionate about UI effects, animations, and creating intuitive,
								dynamic user experiences.
							</p>
							<p>
								Well-organized person, problem solver, independent employee with
								great attention to detail. Fan of TV series, English literature,
								Cricket, Football, and any outdoor activities.
							</p>
							<p>
								Interested in the entire frontend spectrum and working on
								ambitious projects with positive people.
							</p>
						</div>
					</div>
					<div>
						<h1 className="text-md uppercase font-bold mt-10 animate__animated animate__bounceInLeft animate__delay-4s">
							Find Me On
						</h1>
						<div
							name="button"
							className="gap-x-3 flex flex-wrap mt-10 animate__animated animate__bounceInLeft animate__delay-5s"
						>
							<a
								href="https://www.linkedin.com/in/muhammadoasif/"
								target="_blank"
								rel="noreferrer"
							>
								<button className="bg-black hover:bg-primary ease-in duration-300 rounded p-3">
									<Icon className="w-5 h-5" icon="eva:linkedin-outline" />
								</button>
							</a>
							<a
								href="https://www.facebook.com/Muhammad0Asif"
								target="_blank"
								rel="noreferrer"
							>
								<button className="bg-black hover:bg-primary ease-in duration-300 rounded p-3">
									<Icon className="w-5 h-5" icon="eva:facebook-outline" />
								</button>
							</a>
							<a
								href="https://github.com/MuhammadOAsif"
								target="_blank"
								rel="noreferrer"
							>
								<button className="bg-black hover:bg-primary ease-in duration-300 rounded p-3">
									<Icon className="w-5 h-5" icon="eva:github-outline" />
								</button>
							</a>
							<a
								href="https://dev.to/muhammadoasif"
								target="_blank"
								rel="noreferrer"
							>
								<button className="bg-black hover:bg-primary ease-in duration-300 rounded p-3">
									<Icon
										className="w-5 h-5"
										icon="material-symbols:logo-dev-outline"
									/>
								</button>
							</a>
						</div>
						<div name="count" className="mt-16 flex gap-x-6">
							<VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
								{({ isVisible }) => (
									<div
										className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-2xl"
										style={{ height: 100 }}
									>
										{isVisible ? <CountUp end={1} /> : null} +
										<h1 className="text-sm mt-3">Year of experience</h1>
									</div>
								)}
							</VisibilitySensor>
							<VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
								{({ isVisible }) => (
									<div
										className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-2xl"
										style={{ height: 100 }}
									>
										{isVisible ? <CountUp end={85} /> : null} %
										<h1 className="text-sm mt-3">Web Development</h1>
									</div>
								)}
							</VisibilitySensor>
							<VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
								{({ isVisible }) => (
									<div
										className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-2xl"
										style={{ height: 100 }}
									>
										{isVisible ? <CountUp end={90} /> : null} %
										<h1 className="text-sm mt-3">Web Design</h1>
									</div>
								)}
							</VisibilitySensor>
						</div>
					</div>
				</div>
				<div>
					<img
						className="w-10/12 mx-auto my-auto animate__animated animate__fadeInRight animate__delay-1s"
						src={bannerImage}
						alt=""
					/>
				</div>
			</div>
		</motion.div>
	)
}

export default Home
