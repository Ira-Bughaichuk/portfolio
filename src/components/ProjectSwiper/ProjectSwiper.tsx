"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import ProjectSlider from '../ProjectSlider/ProjectSlider';
import { projectsList } from '@/utils/Data/projectsList';

import 'swiper/css';
import 'swiper/css/pagination';
import './project.css';

export default function ProjectSwiper() {
  return (

    <>
      <Swiper
      className='swiper'
      grabCursor={true}
      speed={1500}
        modules={[ Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        pagination={{
          el: '.swiper-pagination__dots',
          clickable: true,
        }}
      breakpoints= {{
          744: {
            spaceBetween: '24px',
            slidesPerView: '1.5'
          },
          1440: { 
              slidesPerView: '2.5' 
            },
      }}
      >
        {projectsList && projectsList.map((item) => (
            <SwiperSlide key={item.id} className='slider'> 
              <ProjectSlider framework={item.framework} title={item.title} path={item.image} subTitle={item.subTitle} />
            </SwiperSlide>
          ))}
      </Swiper>
      <ul className="swiper-pagination__dots"></ul> 
    </>
    
  )
}