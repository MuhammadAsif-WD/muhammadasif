import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import BlogsDetails from './BlogsDetails';


const Blogs = () => {
	const [blogsDetails, setBlogsDetails] = useState([])
	console.log(blogsDetails)
	useEffect(() => {
		const url = "blog.json"
		fetch(url)
			.then(res => res.json())
			.then(data => setBlogsDetails(data))

	}, [])

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{
				y: window.innerWidth,
				transition: { duration: 1 },
			}}
		>
			<div className="container grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 mx-auto gap-5 mb-10">
				{blogsDetails.map(blog => (
					<BlogsDetails details={blog} key={blog._id}></BlogsDetails>
				))}
			</div>
		</motion.div>
	)
}

export default Blogs
