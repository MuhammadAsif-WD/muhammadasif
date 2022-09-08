import { motion } from 'framer-motion'
import React from 'react'

const Blogs = () => {
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{
				y: window.innerWidth,
				transition: { duration: 1 },
			}}
		>
			<div>
				<h1 className="text-6xl text-center font-bold">Blogs</h1>
				<h1 className="text-6xl text-center font-bold">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
					distinctio totam corporis aut magnam. Similique porro reprehenderit,
					sequi ipsam, blanditiis corporis est iusto odit impedit quasi earum
					vero officia veniam! Maxime sit fuga saepe facilis voluptas veniam
					adipisci consequuntur iure soluta, repellat et iusto, officiis nobis!
					Laborum doloremque voluptate fugiat ut unde, aut sunt id voluptatum
					praesentium voluptatibus? Commodi, enim. Beatae fugiat quia vel et
					voluptates magnam ipsam repellendus molestias, commodi expedita neque
					cumque iste ducimus quos soluta illo. Odit quasi dolor eos nisi atque
					velit explicabo architecto ut ab. Voluptatem provident autem quibusdam
					ducimus suscipit nostrum recusandae facere laudantium molestiae
					maxime. Odit recusandae ipsam vero molestiae ipsum, aliquam soluta
					quam labore voluptas aliquid, a, enim quod ratione? Veniam, sed.
					Fugiat aspernatur omnis deserunt voluptas vero a beatae aliquam
					quaerat dolores sunt, iusto amet sequi fuga? Obcaecati ullam similique
					odit, dolorem ducimus aliquam libero perferendis. Alias et laudantium
					corrupti eos. Magni numquam commodi officia, nostrum quos nulla nemo
					error modi cum non? Recusandae veritatis possimus vero! Delectus illo,
					error in, quisquam asperiores ratione excepturi adipisci at sint rerum
					dolore ullam! Architecto natus impedit neque, mollitia fuga
					dignissimos repudiandae! Culpa iure provident omnis, repellendus
					recusandae neque id incidunt temporibus tenetur, ut ratione ipsum
					corporis nostrum quia facere! Voluptate voluptas in iste. Sapiente
					adipisci quas quos amet quia? Nam eius cumque vitae maxime id.
					Tempora, magnam at consequuntur voluptatem harum sint amet commodi,
					deleniti ipsa temporibus dolorem, nihil necessitatibus consectetur.
					Commodi, numquam? Harum sint temporibus voluptatibus ipsum velit
					nesciunt qui minima quo, eaque blanditiis impedit dignissimos nostrum,
					quibusdam unde quaerat sit quas ea aperiam repellendus placeat?
					Accusamus placeat praesentium sequi itaque delectus? Iste suscipit
					numquam nisi temporibus esse. Voluptate odit necessitatibus autem!
					Tenetur placeat eveniet nesciunt quasi ducimus non dolore minima
					reiciendis accusantium itaque voluptate aspernatur accusamus optio
					repellendus, possimus voluptatibus provident!
				</h1>
			</div>
		</motion.div>
	)
}

export default Blogs
