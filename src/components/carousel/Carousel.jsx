import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

const Controls = ({data})=>{
    const swiper = useSwiper();

    useEffect(()=>{
        swiper.slideTo(0,null);
    },[data]);
}

const Carousel = ({data,component}) => {
  return (
    <div>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data}/>
        <LeftNavigation/>
        <RightNavigation/>
        {data.map((item)=>{
           return (
            <SwiperSlide style={{width:"200px"}}>{component(item)}</SwiperSlide>
           ) 
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
