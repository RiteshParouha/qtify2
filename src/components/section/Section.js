import React from 'react'
import styles from "./Section.module.css"
import Card from '../card/Card'
const Section = ({sectionName,data,type}) => {
  return (
    <div className={styles.section_wrapper}>
      <div className={styles.header}>
        <h3>{sectionName}</h3>
        <h3 className={styles.toggler}>Show All</h3>
      </div>
      <div className={styles.card_wrapper}>
        {
          data.map((element)=>{
            return <Card data={element} type="album"/>
          })
        }
      </div>
    </div>
  )
}

export default Section
