import React from 'react'
import Container from './Container'
import f_bg_left from '../assets/f_bg_left.png'
import Button from './Button'

 

const HealthyFood = () => {
  return (
    <section className='bg-f_bg bg-no-repeat py-96 bg-right relative'>
      <div className="absolute top-24">
           <img src={f_bg_left} alt="" />
      </div>
        <Container className={``}>
            <div className="mt-24">
                <h3 className='text-[55px] text-prh2 font-serif leading-[60px] font-medium  w-[550px]'>We provide healthy food for your family.</h3>
                <p className='text-[18px] text-prh2  font-montserrat font-medium pt-4 w-[600px]'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
           
                <p className='text-base text-prh2 font-montserrat font-normal pt-5 w-[600px]'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                 
                <Button text={"More About Us"} className={`bg-[#C31C1E] border-btn text-white mt-10 hover:text-[#C31C1E] hover:bg-white duration-500 border-2`} />

            </div>
             
        </Container>
    </section>
  )
}

export default HealthyFood