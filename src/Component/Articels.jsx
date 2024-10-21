import React from 'react'
import Container from './Container'
import BlogCard from '../Component/BlogCard'
import Button from './Button'
import Blog_one from '../assets/blog_one.jpg'
import Burger from '../assets/burger.jpg'
const Articels = () => {
  return (
     <section className='py-20'>
         <Container className={``}>
                <div className="flex justify-between">
                     <h3 className='text-[55px] text-prh2 font-serif leading-[60px] font-medium  w-[550px]'>Our Blog & Articles</h3>
                     <Button text={"More About Us"} className={`bg-[#C31C1E] border-btn text-white  hover:text-[#C31C1E] hover:bg-white duration-500 border-2`} />
                </div>
               <div className=" mt-12 flex gap-x-10">
                    <div className="h-[732px] w-[636px] bg-white rounded-xl shadow-xl">
                        <img src={Burger} alt="blog_one.jpg"  className='rounded-t-xl'/>
                        <p className={`text-[14px] text-prh2 font-montserrat font-medium leading-5 pt-6 pb-3 ml-3`}>January 3, 2023</p>
                        <h3 className={`text-2xl text-prh2 font-serif leading-6 font-medium ml-3`}>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                        <p className='text-[14px] text-prh2 font-montserrat font-medium leading-5 pt-6 pb-3 ml-3'>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <BlogCard 
                          src={Blog_one}
                          ptext={`January 3, 2023`}
                          headding={`How to prepare a delicious gluten free sushi`}
                        
                        />
                        <BlogCard 
                          src={Blog_one}
                          ptext={`January 3, 2023`}
                          headding={`How to prepare a delicious gluten free sushi`}
                        
                        />
                        <BlogCard 
                          src={Blog_one}
                          ptext={`January 3, 2023`}
                          headding={`How to prepare a delicious gluten free sushi`}
                        
                        />
                        <BlogCard 
                          src={Blog_one}
                          ptext={`January 3, 2023`}
                          headding={`How to prepare a delicious gluten free sushi`}
                        
                        />
                    </div>
               </div>
         </Container>
     </section>
  )
}

export default Articels