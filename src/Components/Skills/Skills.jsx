import ProgressBar from '@ramonak/react-progress-bar'
import { motion } from 'framer-motion'
import React from 'react'
const Skills = () => {
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{
				x: window.innerWidth,
				transition: { duration: 1 },
			}}
		>
			<div className="-mt-10 mb-10">
				<div>
					<div>
						<section className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
							<div className="animate__animated animate__fadeInLeft animate__delay-1s">
								<h1 className="2xl:text-[72px] xl:text-[72px] lg:text-[72px] md:text-[72px] text-[62px] font_style font-bold leading-none mb-10 text-[#08fdd8]">
									Skills & <br />
									Experience
								</h1>
								<div className="flex flex-col gap-y-5 text-lg">
									<p>
										Since beginning my journey as a freelance developer nearly 1
										year ago, I’ve done remote work for agencies, consulted for
										startups, and collaborated with talented people to create
										web products for both business and consumer use.
									</p>

									<p>
										I create successful responsive websites that are fast, easy
										to use, and built with best practices. The main area of my
										expertise is front-end development, HTML, CSS, JS, building
										small and medium web apps, features, animations, and coding
										interactive layouts.
									</p>

									<p>
										Visit my {''}
										<a
											href="https://www.linkedin.com/in/muhammadoasif/"
											target="_blank"
											rel="noreferrer"
											className="text-secondary hover:text-secondary/50 duration-200 ease-in-out"
										>
											LinkedIn
										</a>{' '}
										profile for more details or just{' '}
										<a
											href="https://wa.me/+8801830018193/?text=Hello!"
											target="_blank"
											rel="noreferrer"
											className="text-secondary hover:text-secondary/50 duration-200 ease-in-out"
										>
											Whats Up
										</a>{' '}
										me.
									</p>
								</div>
							</div>
							{/* use react npm Progress bar */}
							<div className="mt-[184px] flex flex-col gap-10 animate__animated animate__fadeInRight animate__delay-1s">
								<div className="text-xl font_style flex flex-col">
									<h1 className="pb-2 font-bold">Front-end</h1>
									<ProgressBar
										completed={90}
										bgColor="#02c7b0"
										height="3px"
										customLabel=" "
									/>
								</div>
								<div className="text-xl font_style flex flex-col">
									<h1 className="pb-2 font-bold">Back-end</h1>
									<ProgressBar
										completed={80}
										bgColor="#ff2253"
										height="3px"
										customLabel=" "
									/>
								</div>
								<div className="text-xl font_style flex flex-col">
									<h1 className="pb-2 font-bold">React JS</h1>
									<ProgressBar
										completed={88}
										bgColor="#d26cd5"
										height="3px"
										customLabel=" "
									/>
								</div>
								<div className="text-xl font_style flex flex-col">
									<h1 className="pb-2 font-bold">Full-stack</h1>
									<ProgressBar
										completed={70}
										bgColor="#02c7b0"
										height="3px"
										customLabel=" "
									/>
								</div>
							</div>
						</section>

						<div className="mt-16 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
							<div className="animated__box p-[2px]">
								<div className="bg-black p-3 animate__animated animate__fadeInLeft animate__delay-1s z-[2] relative rounded-[12px]">
									<h1 className="text-2xl font-bold">Frontend developer</h1>
									<div className="text-[#b3aca2] pt-3">
										<p>To The End</p>
										<small>2020-2021</small>
										<ul className="pt-3 list-disc p-5 flex flex-col gap-y-2">
											<li>
												We design websites by converting all types of websites
												from
											</li>
											<li>
												Figma, PSD, JPEG, and png files. All types of websites
												are
											</li>
											<li>
												made with React. Besides, HTML, CSS, and JS are also
												done if
											</li>
											<li>
												someone wants. tailwind is my main framework and if
												anyone wants to do it with bootstrap then that can be
												done too.
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="animated__box p-[2px]">
								<div className="bg-black p-4 animate__animated animate__fadeInRight animate__delay-1s rounded-[12px] z-[2] relative">
									<h1 className="text-2xl font-bold">Full stack developer</h1>
									<div className="text-[#b3aca2] pt-3">
										<p>To The End</p>
										<small>2021-2022</small>
										<ul className="pt-3 list-disc p-5 flex flex-col gap-y-2">
											<li>
												I use node js as the backend And use the MongoDB
												database.
											</li>
											<li>
												Experienced in creating a school website, doctor
												website, e-commerce website, warehouse website,
												manufacturing website, and many more websites.
											</li>
											<li>Also, have experience in creating an admin panel.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Skills
