import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ServicesSwiper () {
  const [slideNumber, setSlideNumber] = useState(0);
  let [swipers, setSwipers] = useState({})

  function onSwiperCallback (swiper, swiperName: string) {
    let newSwipers = {
      ...swipers
    }
    newSwipers[swiperName] = swiper;

    setSwipers(newSwipers) 
  }

  function slideToCallback (index) {
    setSlideNumber(index);
    // console.trace(index);
    console.log(index);
    
    if(swipers['navSwiper']?.activeIndex != index) {
      swipers['navSwiper']?.slideTo(index, 500)
    }
    if(swipers['contentSwiper']?.activeIndex != index) {
      swipers['contentSwiper']?.slideTo(index, 500)
    }
  }

  const slides = [
    {
      name: "Faucets",
      header: "Faucets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta dignissimos incidunt culpa eligendi, tempora harum necessitatibus repellat quasi. Perspiciatis sit corporis ipsa quasi nihil ab aperiam doloremque eveniet tempora!"
    },
    {
      name: "Showers",
      header: "Showers",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta dignissimos incidunt culpa eligendi, tempora harum necessitatibus repellat quasi. Perspiciatis sit corporis ipsa quasi nihil ab aperiam doloremque eveniet tempora!"
    },
    {
      name: "Water Heaters",
      header: "Water Heaters",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta dignissimos incidunt culpa eligendi, tempora harum necessitatibus repellat quasi. Perspiciatis sit corporis ipsa quasi nihil ab aperiam doloremque eveniet tempora!"
    },
    {
      name: "Other cool things",
      header: "Other cool things",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta dignissimos incidunt culpa eligendi, tempora harum necessitatibus repellat quasi. Perspiciatis sit corporis ipsa quasi nihil ab aperiam doloremque eveniet tempora!"
    },
  ]

  return (
    <div>
      <Swiper 
        slidesPerView={2.7}
        spaceBetween={30}
        loop={false} 
        onSwiper={s => onSwiperCallback(s, 'navSwiper')}
        id="services-nav-swiper"
      >
        {
          slides.map((slide, i) => {
            return (
              <SwiperSlide key={slide.name + "|" + i} onClick={_ => slideToCallback(i)}>
                <p className={`${slideNumber === i ? 'text-accent-2' : ''} text-lg mb-4 active:bg-accent-2 rounded-md text-center p-1 active:text-main-1`}>{slide.name}</p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoHeight={true}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        onSwiper={s => onSwiperCallback(s, 'contentSwiper')}
        onSlideChange={swiper => slideToCallback(swiper.realIndex)}
        modules={[Pagination, Navigation]}
        className="h-[60vh]"
        id="services-content-swiper"
      >
        {
          slides.map((slide, i) => {
            return (
              <SwiperSlide key={`${slide.name}|${i}|slide`}>
                <img className="object-cover" src="https://images.pexels.com/photos/6256/water-kitchen-black-design.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                <p key={`${slide.name}|${i}|header`} className="my-4 text-lg font-bold">{slide.header}</p>
                <p key={`${slide.name}|${i}|description`} className="">{slide.description}</p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}