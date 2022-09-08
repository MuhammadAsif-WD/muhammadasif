import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<div className="mt-[16vh]">
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="skills" element={<Skills />} />
					<Route path="services" element={<Services />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />
					<Route path="blogs" element={<Blogs />} />
				</Routes>
			</AnimatePresence>
		</div>
	)
}

export default AnimatedRoutes
