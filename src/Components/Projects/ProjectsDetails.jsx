import { Icon } from '@iconify/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectsDetails = ({ work }) => {
	const navigate = useNavigate()
	const navigateToDetails = _id => {
		navigate(`/project_details/${_id}`)
	}

	const { img, name, _id, skills } = work
	return (
		<div>
			<div className="animate__animated animate__fadeInLeft animate__delay-1s">
				<div className=" box_shadow p-8 rounded-xl bg-[#212428]">
					<div
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: 'cover',
						}}
						className="box box_one w-full h-80 mx-auto"
					></div>

					<div className="flex">
						<button
							onClick={() => navigateToDetails(_id)}
							className="rounded-md mt-5 font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm  duration-700 ease-in-out hover:text-primary"
						>
							<div className="flex cursor-pointer font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm duration-700 ease-in-out hover:text-primary">
								{name}
								<Icon className="ml-2 mt-1" icon="charm:arrow-up-right" />
							</div>
						</button>
						<div>
							<p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm mt-6 ml-10 text-primary font-thin">
								{skills} web development
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
