import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import logo from '../../Assets/svg/logo.svg'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
	// Function Show Menu
	const [showMenu, setShowMenu] = useState(false)
	const menuChangeButton = () => {
		setShowMenu(!showMenu)
	}
	return (
		<main className="2xl:flex xl:flex lg:flex justify-between">
			{/* Navbar Logo */}
			<section className="flex justify-between">
				<div className="flex gap-x-3 justify-start font-bold text-4xl uppercase animate__animated animate__fadeInLeft">
					<img className="w-8" src={logo} alt="" />
					<h1 className="pt-[1vh] -ml-2">sif</h1>
				</div>
				{showMenu ? (
					<button
						className="text-sm mt-[20px] uppercase 2xl:hidden xl:hidden lg:hidden block"
						onClick={menuChangeButton}
					>
						<Icon
							className="hover:text-primary ease-in-out duration-300 w-6 h-6"
							icon="akar-icons:circle-x-fill"
						/>
					</button>
				) : (
					<button
						className="text-sm mt-[10px] uppercase 2xl:hidden xl:hidden lg:hidden block"
						onClick={menuChangeButton}
					>
						<Icon className="hover:text-primary w-8 h-10" icon="gg:menu" />
					</button>
				)}
			</section>

			{showMenu ? <NavbarMobile /> : <NavbarDesktop />}
		</main>
	)
}

export default Navbar
