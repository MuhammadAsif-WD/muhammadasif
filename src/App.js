import 'animate.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import * as React from 'react'
import { useEffect } from 'react'
import AnimatedRoutes from './Components/Animated/AnimatedRoutes'
import Navbar from './Components/Others/Navbar/Navbar'

function App() {
	// AOS Function
	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div>
			<Navbar />
			<AnimatedRoutes />
		</div>
	)
}

export default App
