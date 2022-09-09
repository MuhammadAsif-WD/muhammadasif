import React from 'react'
import { NavLink } from 'react-router-dom'
import CV from '../../Assets/CV.pdf'

const NavbarDesktop = () => {
	return (
		<div className="flex">
			<ul className="text-sm mt-5 gap-8 uppercase 2xl:flex xl:flex lg:flex hidden animate__animated animate__fadeInDown">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="home"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="skills"
					>
						Skills
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="projects"
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="contact"
					>
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="blogs"
					>
						Blogs
					</NavLink>
				</li>
			</ul>
			<a
				className="desk_nav_button"
				download="CV"
				target="_blank"
				href={CV}
				rel="noreferrer"
			>
				<button className="text-sm bg-primary 2xl:block xl:block lg:block hidden text-white px-8 py-3 rounded-full">
					Download CV
				</button>
			</a>
		</div>
	)
}

export default NavbarDesktop
