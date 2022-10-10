import { motion } from 'framer-motion';
import React, { useState } from "react";
import Modal from "react-modal";


const BlogsDetails = (blog) => {
   const { name, img, details } = blog.details
   console.log(blog)
   const [isOpen, setIsOpen] = useState(false);
   function toggleModal() {
      setIsOpen(!isOpen);
   }

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
            <dispatchEvent>
               <Modal
                  isOpen={isOpen}
                  onRequestClose={toggleModal}
                  contentLabel="My dialog"
                  className="mymodal"
                  overlayClassName="myoverlay"
                  closeTimeoutMS={500}
               >
                  <button onClick={toggleModal}><span className='fixed scroll right-10 top-5 font-bold bg-black py-3 px-5 rounded-md'>X</span></button>
                  <div>
                     <h1 className="h-[100vh] break-words 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm">
                        {details}
                     </h1>
                  </div>
               </Modal>
            </dispatchEvent>
         </div>


         <div className="animated__box absolute z-0">
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
                     <h1 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold py-2">
                        {name}
                     </h1>

                     <button onClick={toggleModal}><button
                        className="rounded-md mt-5 font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm  duration-700 ease-in-out hover:text-primary"
                     >
                        <div className="anchor w-[148px] h-[48px]">
                           <i></i>
                           <span className='font-mono'>View</span>
                        </div>
                     </button>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
   )
}

export default BlogsDetails
