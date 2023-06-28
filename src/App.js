
import './App.css';
import Card from './components/card/Card';
import HeroImage from './components/heroImage/HeroImage';
import NavBar from './components/navBar/NavBar';
import { fetchTopAlbum, fetchNewAlbum, fetchSong } from './api/api';
import {useState, useEffect } from 'react';
import Section from './components/section/Section';
import SimpleAccordion from './components/Facts/SimpleAccordion';

function App() {
  
  const[data,setData]=useState([]);
  const[newData,setNewData]=useState([]);
  const[songData,setSongData]=useState([]);
  const[filteredSong,setFilteredSong]=useState([]);


  const getApiData=async(apiFor)=>{
    if(apiFor==="top"){
      try {
        let res= await fetchTopAlbum();
        setData(res);
        } catch (err) {
        console.error(err); 
        }
      }
      else if(apiFor==="new"){
        try {
          let res= await fetchNewAlbum();
          console.log(res,"app");
          setNewData(res);
          } catch (err) {
          console.error(err); 
          }
      }
      else if(apiFor==="song"){
        try {
          let res= await fetchSong();
          console.log(res,"app");
          setSongData(res);
          setFilteredSong(res);
          } catch (err) {
          console.error(err); 
          }
      }
  }

  const filterSong=(key)=>{
     if(key==="all")
     setFilteredSong(songData)
     else{
      let res;
      res=songData.filter((element)=>{
        if(element.genre.key===key)
        return element;
      });
      setFilteredSong(res);
     }
  }
  
  useEffect(()=>{
     getApiData("top");
     getApiData("new"); 
     getApiData("song")
  },[]);


  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
      <Section sectionName={"Top Albums"} data={data} type={"album"}/>
      <Section sectionName={"New Albums"} data={newData} type={"album"}/>
      <Section sectionName={"Songs"} data={filteredSong} type={"song"} filterSong={filterSong}/>
      <SimpleAccordion/>

    </div>
  );
}

export default App;
