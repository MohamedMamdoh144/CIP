
import './App.css';
import './slide.css'
import './fonts/Gilroy-Regular.ttf'
import Navigation from './components/Navigation/nav';
import Menu from './components/Navigation/menu'
import IntroSlide from './components/Presentation/present';


import { useEffect, useState } from 'react';
import {gsap} from 'gsap'
import { Impress, Step } from 'react-impressjs';
// styles of react-impressjs

function App() {
  
  const [show,setshow]=useState("");
  const [page,setPage]=useState("");
 
  useEffect(()=>{
    switch(page){
      case "Start":
        window.location.replace("#/step-2");
        break;
      case "Clinical Picture":
        window.location.replace("#/step-7");
        break;
        default:
          break;
    }

  },[page]);

  useEffect(()=>{
    let tl=gsap.timeline();
    tl.to(".hint-intro",{duration:1.5,opacity:1,y:"10vh",ease:"back.out(1.9)"});
    tl.to(".hint-intro",{duration:1.5,opacity:0,y:"-100%",ease:"back.out(1.9)",delay:3});
  },[])

  return (
    <>
    <Navigation  show={show} setshow={setshow} setpage={setPage}/>
    <Menu show={show} setshow={setshow}  />
    <IntroSlide />
    <div className='hint-intro'>You can use Spacebar or click the buttons to navigate</div>
    </>
   
  );
}

export default App;
