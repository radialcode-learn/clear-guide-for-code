import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FEATURED_CARD_DATA } from '../utils/Helper';

const Slider = () => {
    return (
        <div className='my-6'>
            <Swiper className='h-full'
                spaceBetween={24}
                slidesPerView="auto"
                loop={true}
                pagination={{ clickable: true }}
          
            >
                {FEATURED_CARD_DATA.map((obj, index) => (
                    <SwiperSlide key={index} className='!h-[312px] !w-[364px] me-5'>
                        <div className='bg-green-500 h-full rounded-lg mx-auto p-5 max-w-[364px] w-full'>
                            <p className='mt-3 mb-4 font-poppins font-normal leading-130 text-sm text-grey'>
                                <span className='text-blue-100 font-bold'>{obj.activePlayers} </span> Active Players
                                <span className='text-blue-100 font-bold'> {obj.visits} </span> Visits
                            </p>
                            <p className='text-white mb-3 font-bold leading-130 text-xl'>{obj.title}</p>
                            <p className='font-normal leading-160 font-poppins text-sm'>{obj.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider