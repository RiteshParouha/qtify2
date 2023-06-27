
import './App.css';
import Card from './components/card/Card';
import HeroImage from './components/heroImage/HeroImage';
import NavBar from './components/navBar/NavBar';
import { fetchTopAlbum, fetchNewAlbum } from './api/api';
import {useState, useEffect } from 'react';
import Section from './components/section/Section';

function App() {
  
  const[data,setData]=useState([]);
  const[newData,setNewData]=useState([]);


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
  }
  
  useEffect(()=>{
     getApiData("top");
     getApiData("new"); 
  },[]);


  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
      <Section sectionName={"Top Albums"} data={data} type={"album"}/>
      <Section sectionName={"New Albums"} data={newData} type={"album"}/>
    </div>
  );
}

export default App;
