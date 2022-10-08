import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ProjectsDetails from './ProjectsDetails'

const Projects = () => {
	const [works, setWorks] = useState([])

	useEffect(() => {
		const url = 'http://localhost:5000/data'
		fetch(url)
			.then(res => res.json())
			.then(data => setWorks(data))
	}, [])
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{
				y: window.innerWidth,
				transition: { duration: 1 },
			}}
		>
			<div className="container grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-5 mb-10">
				{works.map(work => (
					<ProjectsDetails work={work} key={work._id}></ProjectsDetails>
				))}
			</div>
		</motion.div>
	)
}

export default Projects
