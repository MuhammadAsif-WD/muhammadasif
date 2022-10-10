import React from 'react'
import { NavLink } from 'react-router-dom'
import CV from '../../Assets/CV.pdf'

const NavbarMobile = () => {
	return (
		<div>
			<ul className="text-sm mt-[14px] uppercase 2xl:hidden xl:hidden lg:hidden block">
				<li className="mt-5 animate__animated animate__slideInRight">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li className="mt-5 animate__animated animate__slideInRight">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="skills"
					>
						Skills
					</NavLink>
				</li>
				<li className="mt-5 animate__animated animate__slideInRight">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="projects"
					>
						Projects
					</NavLink>
				</li>
				<li className="mt-5 animate__animated animate__slideInRight">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="contact"
					>
						Contact
					</NavLink>
				</li>
				<li className="mt-5 animate__animated animate__slideInRight">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'activeLink' : 'notActiveLink'
						}
						to="blogs"
					>
						Blogs
					</NavLink>
				</li>
				<li>
					<a download="CV" target="_blank" href={CV} rel="noreferrer">
						<button className="text-sm mt-5 animate__animated animate__slideInRight bg-primary text-white px-8 py-3 rounded-full w-full">
							Download CV
						</button>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default NavbarMobile
