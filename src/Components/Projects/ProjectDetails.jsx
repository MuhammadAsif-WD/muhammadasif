import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
	const { id } = useParams()
	const [projectsData, setProjectsData] = useState([])
	const { img, name } = projectsData
	useEffect(() => {
		fetch(`http://localhost:5000/data/${id}`)
			.then(res => res.json())
			.then(data => setProjectsData(data))
	}, [id])
	return (
		<div className="container pb-10 pt-10">
			<div className=" box_shadow grid grid-cols-2 gap-16 p-10 bg-[#212529] rounded-xl">
				<div
					style={{
						backgroundImage: `url(${img})`,
						backgroundSize: 'cover',
					}}
					className="box box_one w-full h-[75vh] mx-auto"
				></div>
				<div className="flex flex-wrap gap-10">
					<h1 className="text-6xl">{name}</h1>
					<h1 className="text-6xl">{name}</h1>
					<h1 className="text-6xl">{name}</h1>
					<h1 className="text-6xl">{name}</h1>
					<h1 className="text-6xl">{name}</h1>
					<h1 className="text-6xl">{name}</h1>
					<h1 className="text-6xl">{name}</h1>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
