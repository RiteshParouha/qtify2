
import './App.css';
import Card from './components/card/Card';
import HeroImage from './components/heroImage/HeroImage';
import NavBar from './components/navBar/NavBar';
import { fetchTopAlbum } from './api/api';
import {useState, useEffect } from 'react';
import Section from './components/section/Section';

function App() {
  
  const[data,setData]=useState([]);


  const getApiData=async()=>{
    try {
      let res= await fetchTopAlbum();
      console.log(res,"app");
      setData(res);
      } catch (err) {
      console.error(err); 
      }
  }
  
  useEffect(()=>{
     getApiData(); 
  },[]);


  return (
    <div className="App">
      <NavBar/>
      <HeroImage/>
      <Section sectionName={"Top Albums"} data={data} type={"album"}/>
    </div>
  );
}

export default App;
