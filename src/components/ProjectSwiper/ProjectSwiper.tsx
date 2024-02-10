"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import { projectsList } from '@/utils/Data/projectsList';


export default function ProjectSwiper() {
  return (
    <Swiper
    //   modules={[ Pagination]}
      spaceBetween={16}
      slidesPerView={2}
      pagination={{type:'fraction'}}
    //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    breakpoints= {{
        744: {
          spaceBetween: '24px',
          slidesPerView: '1.5'
        },
        1320: {
            slidesPerView: '2.5'
          },
    }}
    >
      {projectsList && projectsList.map((item) => (
          <SwiperSlide key={item.id}> 
             <ProjectSlider framework={item.framework} title={item.title} path={item.image} subTitle={item.subTitle} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
// framework={item.framework} title={item.title} path={item.image} description={item.description} 