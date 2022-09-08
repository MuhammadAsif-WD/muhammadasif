import 'animate.css'
import * as React from 'react'
import AnimatedRoutes from './Components/Animated/AnimatedRoutes'
import Navbar from './Components/Others/Navbar/Navbar'

function App() {
	return (
		<div className="duration-500 ease-in-out">
			<Navbar />
			<AnimatedRoutes />
		</div>
	)
}

export default App
