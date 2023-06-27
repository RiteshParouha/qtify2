import React, { useEffect, useState } from 'react';
import { useSwiper,useSwiperSlide } from 'swiper/react';
import styles from "./RightNavigation.module.css";
import {ReactComponent as RightArrow} from "../../assets/rightNavigation.svg"
const RightNavigation = () => {
    const swiper = useSwiper();
    const[isEnd,setIsEnd]=useState(swiper.isEnd);
    useEffect(()=>{
     swiper.on("slideChange",function(){
        setIsEnd(swiper.isEnd);
     })
    },[]);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={()=> swiper.slideNext()}/>}
    </div>
  )
}

export default RightNavigation;
