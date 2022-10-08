import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectsDetails = ({ work }) => {
	const navigate = useNavigate()
	const navigateToDetails = _id => {
		navigate(`/project_details/${_id}`)
	}

	const { img, name, _id, skills } = work
	return (
		<div className="animated__box">
			<div className="animate__animated animate__fadeInLeft animate__delay-1s z-[2] relative p-[2px]">
				<div className="box_shadow p-6 rounded-xl bg-[#212428]">
					<div
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: 'cover',
						}}
						className="box box_one w-full h-72 mx-auto"
					></div>

					<div className="flex flex-wrap justify-between">
						<button
							onClick={() => navigateToDetails(_id)}
							className="rounded-md mt-5 font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm  duration-700 ease-in-out hover:text-primary"
						>
							<div className="anchor w-[148px] h-[48px]">
								<i></i>
								<span className='font-mono'>{name}</span>
							</div>
						</button>
						<div>
							<p className="2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-xs mt-6 text-primary font-thin">
								{skills}
							</p>
						</div>
					</div>
					<div>
						<p className="hover:text-primary 2xl:text-4xl xl:text-3xl: lg:text-2xl md:text-xl sm:text-md pt-3 ease-in-out duration-700">
							Warehouse Management
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectsDetails
