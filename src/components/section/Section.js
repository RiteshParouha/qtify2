import React, { useEffect, useState } from 'react'
import styles from "./Section.module.css"
import Card from '../card/Card'
import Carousel from '../carousel/Carousel'
import BasicTabs from '../Tab/BasicTab'
const Section = ({sectionName,data,type,filterSong}) => {
  
  const [toggler,setToggler]= useState(false);
  const [value, setValue] = React.useState(0);

  const handleToggle=()=>{
    console.log("hello");
    setToggler(!toggler);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    if(type==="song"){
      if(value===0){
        filterSong("all")
        console.log(value);
      }
      if(value===1){
        filterSong("rock");
        console.log(value);
      }
      if(value===2)
        filterSong("pop");
      if(value===3)
        filterSong("jazz");
      if(value===4)
        filterSong("blues");
      }
  },[value])

  return (
    <div className={styles.section_wrapper}>
      <div className={styles.header}>
        <h3>{sectionName}</h3>
        {type!=="song"&&<h3 className={styles.toggler} onClick={handleToggle}>{!toggler? "Show All":"Collapse"}</h3>}
      </div>
      {type==="song" && <BasicTabs value={value} handleChange={handleChange}/>}
      <div className={styles.cardWrapper}> 
       {toggler?<div className={styles.wrapper}>{(data.map((element)=>{
            return <Card data={element} type={type}/>
          }))}</div>:
          <Carousel data={data} component={(data)=><Card data={data} type={type}/>}/>}
          </div>
        </div>
  )
}

export default Section;