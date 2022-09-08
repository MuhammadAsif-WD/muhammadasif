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
			<div>
				<div className="grid 2xl:grid-cols-2 xl:xl:grid-cols-2 lg:xl:grid-cols-2 gap-20 py-10">
					<div>
						<h1 className="text-[72px] font_style font-bold leading-none mb-10 text-[#08fdd8]">
							Skills & <br />
							Experience
						</h1>
						<div className="flex flex-col gap-y-5 text-lg">
							<p>
								Since beginning my journey as a freelance developer nearly 1
								year ago, I’ve done remote work for agencies, consulted for
								startups, and collaborated with talented people to create web
								products for both business and consumer use.
							</p>

							<p>
								I create successful responsive websites that are fast, easy to
								use, and built with best practices. The main area of my
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
					<div className="mt-10 flex flex-col gap-8">
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
				</div>
			</div>
		</motion.div>
	)
}

export default Skills
