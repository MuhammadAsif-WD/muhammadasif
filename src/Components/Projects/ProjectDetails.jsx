import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
	const { id } = useParams()
	const [projectsData, setProjectsData] = useState([])
	const { img, name, skills, details, client, server, live, backend, frontend } = projectsData
	useEffect(() => {
		fetch(`http://localhost:5000/data/${id}`)
			.then(res => res.json())
			.then(data => setProjectsData(data))
	}, [id])
	return (
		<div className="container pb-10 pt-10">
			<div className="box_shadow grid grid-cols-2 gap-16 p-10 bg-[#212529] rounded-xl">
				<div className="animated__box__red p-[4px]">
					<div
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: 'cover',
							borderRadius: '12px',
						}}
						className="box box_one w-full h-[75vh] mx-auto z-[2] relative"
					></div>
				</div>
				<div className="flex flex-col gap-y-4">
					<h1 className="text-6xl text-secondary font-serif">{name}</h1>
					<h1 className="text-xl">
						<span className='text-sm uppercase font-serif'>
							{" "}{skills}
						</span>
					</h1>
					<h1 className="text-xl text-secondary mt-4">Projects Details : <br />
						<span className='text-sm text-[#fff]'>
							{details}
						</span>
					</h1>
					<h1 className="text-xl flex mt-5"><p className="w-[156px] text-secondary">See Live Site</p> <a href="https://g-store-asif.web.app/" target={'_blank'} rel="noreferrer"> <span className='hover:text-primary ease-in duration-300 drop-shadow-xl text-sm mt-2 text-[#fff]'>
						{": "}{live}
					</span></a></h1>
					<h1 className="text-xl flex"><p className='w-[156px] text-secondary'>Frontend use</p> <span className='hover:text-primary ease-in duration-300 drop-shadow-xl text-sm mt-2 uppercase text-[#fff]'>
						{": "}{frontend[0]}{" "}{frontend[1]}
					</span></h1>
					<h1 className="text-xl flex"><p className='w-[156px] text-secondary'>Backend use</p> <span className='hover:text-primary ease-in duration-300 drop-shadow-xl text-sm mt-2 uppercase text-[#fff]'>
						{": "}{backend}
					</span></h1>
					<h1 className="text-xl flex"><p className='w-[156px] text-secondary'>Frontend Code</p>
						<span className='hover:text-primary ease-in duration-300 drop-shadow-xl text-sm mt-2 text-[#fff]'><a href="https://github.com/MuhammadOAsif/Goodies-Client" target={'_blank'} rel="noreferrer">{": "}{client}</a></span>
					</h1>
					<h1 className="text-xl flex"><p className='w-[156px] text-secondary'>Backend Code</p> <span className='hover:text-primary ease-in duration-300 drop-shadow-xl text-sm mt-2 text-[#fff]'><a href="https://github.com/MuhammadOAsif/Goodies-Server" target={'_blank'} rel="noreferrer">{": "}{server}</a></span></h1>


				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
