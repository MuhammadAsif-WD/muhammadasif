import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
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
				<div className="container grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-10 mb-10">
					<div className="animate__animated animate__fadeInLeft animate__delay-1s">
						<div className="box box_one w-full h-96 mx-auto">
							<Link to="/">
								<p className="text-center pt-32">
									<button className="w-32 hover:bg-primary duration-700 ease-in-out bg-primary/60 rounded-full p-10">
										SEE MORE
									</button>
								</p>
							</Link>
						</div>
					</div>
					<div className="animate__animated animate__zoomIn animate__delay-1s">
						<div className="box box_one w-full h-96 mx-auto">
							<Link to="/">
								<p className="text-center pt-32">
									<button className="w-32 hover:bg-primary duration-700 ease-in-out bg-primary/60 rounded-full p-10">
										SEE MORE
									</button>
								</p>
							</Link>
						</div>
					</div>
					<div className="animate__animated animate__fadeInRight animate__delay-1s">
						<div className="box box_one w-full h-96 mx-auto">
							<Link to="/">
								<p className="text-center pt-32">
									<button className="w-32 hover:bg-primary duration-700 ease-in-out bg-primary/60 rounded-full p-10">
										SEE MORE
									</button>
								</p>
							</Link>
						</div>
					</div>
					<div className="animate__animated animate__fadeInLeft animate__delay-1s">
						<div className="box box_one w-full h-96 mx-auto">
							<Link to="/">
								<p className="text-center pt-32">
									<button className="w-32 hover:bg-primary duration-700 ease-in-out bg-primary/60 rounded-full p-10">
										SEE MORE
									</button>
								</p>
							</Link>
						</div>
					</div>
					<div className="animate__animated animate__zoomIn animate__delay-1s">
						<div className="box box_one w-full h-96 mx-auto">
							<Link to="/">
								<p className="text-center pt-32">
									<button className="w-32 hover:bg-primary duration-700 ease-in-out bg-primary/60 rounded-full p-10">
										SEE MORE
									</button>
								</p>
							</Link>
						</div>
					</div>
					<div className="animate__animated animate__fadeInRight animate__delay-1s">
						<div className="box box_one w-full h-96 mx-auto">
							<Link to="/">
								<p className="text-center pt-32">
									<button className="w-32 hover:bg-primary duration-700 ease-in-out bg-primary/60 rounded-full p-10">
										SEE MORE
									</button>
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Projects
