import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
	const { id } = useParams()
	const [projectsData, setProjectsData] = useState([])
	const { img, name, skills, details } = projectsData
	useEffect(() => {
		fetch(`http://localhost:5000/data/${id}`)
			.then(res => res.json())
			.then(data => setProjectsData(data))
	}, [id])
	return (
		<div className="container pb-10 pt-10">
			<div className="box_shadow grid 2xl:grid-cols-2 xl:grid-cols-2 gap-16 p-10 bg-[#212529] rounded-xl">
				<div className="animated__box__red p-[4px]">
					<div
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: 'cover',
							borderRadius: '12px',
						}}
						className="box box_one w-full h-[75vh] mx-auto z-[2] relative hover:-mb-2"
					></div>
				</div>
				<div className="flex flex-col gap-y-4">
					<p className="text-6xl text-secondary font-serif">{name}</p>
					<div className="text-xl">
						<span className='text-lg uppercase font-serif'>
							{" "}{skills}
						</span>
					</div>
					<div className="text-xl text-secondary mt-3">Projects Details : <br />
						<span className='text-sm text-[#fff]'>
							{details}
						</span>
					</div>
					<div>
						<div className="text-xl text-secondary font-mono flex">
							<p className='w-[148px]'>Frontend use:</p>
							<p className='text-lg text-[#fff]'>React JS, React router, React package</p>
						</div>


						<div className="text-xl text-secondary font-mono flex">
							<p className='w-[148px]'>
								Backend use{" "}:
							</p>
							<p className='text-lg text-[#fff]'>Node JS, Express JS, package</p>
						</div>
					</div>
					<div className="text-xl flex gap-4 mt-3">
						<a className='anchor w-[248px] h-[48px]' href="https://g-store-asif.web.app/" target={'_blank'} rel="noreferrer">
							<i></i>
							<span className='font-mono'>Live</span>
						</a>
						<a className='anchor w-[248px] h-[48px]' href="https://g-store-asif.web.app/" target={'_blank'} rel="noreferrer">
							<i></i>
							<span className='font-mono'>Frontend</span>
						</a>
						<a className='anchor w-[248px] h-[48px]' href="https://g-store-asif.web.app/" target={'_blank'} rel="noreferrer">
							<i></i>
							<span className='font-mono'>Backend</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
