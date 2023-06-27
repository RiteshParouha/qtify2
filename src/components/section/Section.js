import React, { useState } from 'react'
import styles from "./Section.module.css"
import Card from '../card/Card'
import Carousel from '../carousel/Carousel'
const Section = ({sectionName,data,type}) => {
  
  const [toggler,setToggler]= useState(false);

  const handleToggle=()=>{
    console.log("hello");
    setToggler(!toggler);
  }

  return (
    <div className={styles.section_wrapper}>
      <div className={styles.header}>
        <h3>{sectionName}</h3>
        <h3 className={styles.toggler} onClick={handleToggle}>{!toggler? "Show All":"Collapse"}</h3>
      </div>
      <div className={styles.cardWrapper}> 
       {toggler?<div className={styles.wrapper}>{(data.map((element)=>{
            return <Card data={element} type="album"/>
          }))}</div>:
          <Carousel data={data} component={(data)=><Card data={data} type={type}/>}/>}
          </div>
        </div>
  )
}

export default Section;