
import './App.css';
import './slide.css'
import './fonts/Gilroy-Regular.ttf'
import Navigation from './components/Navigation/nav';
import Menu from './components/Navigation/menu'
import IntroSlide from './components/Presentation/present';


import { useEffect, useState } from 'react';
import {gsap} from 'gsap'

// styles of react-impressjs

function App() {
  
  const [show,setshow]=useState("");
  const [close,setclose]=useState("");
  const [page,setPage]=useState("");
 /* Scene 1','Scene 2','Management',
                'Pathogenesis','AI Diagnosis','About'*/
  useEffect(()=>{
    switch(page){
      case "Scene 1":
        window.location.replace("#/step-2");
        break;
      case "Scene 2":
        window.location.replace("#/step-9");
        break;
      case "Management":
        window.location.replace("#/step-13");
          break;  
      case "Pathogenesis":
        window.location.replace("#/step-16");
            break; 
      case "AI Diagnosis":
        window.location.replace("#/step-14");
              break;
      case "About":
        window.location.replace("#/step-17");
                break;       
        default:
          break;
    }

  },[page]);
  let render=true;
  if(window.innerWidth<1024){
    render=false;
    alert("Please use a PC to open the app");
  }
  useEffect(()=>{
    let tl=gsap.timeline();
    tl.to(".hint-intro",{duration:1.5,opacity:1,y:"10vh",ease:"back.out(1.9)"});
    tl.to(".hint-intro",{duration:1.5,opacity:0,y:"-100%",ease:"back.out(1.9)",delay:2});
    setTimeout(() => {
      window.location.replace("#/step-2");
    }, 2500);
  },[])

  return (
    <>
  
    {render && <Navigation  show={show} setshow={setshow} setpage={setPage} setclose={setclose} />}
    {render && <Menu show={show} setshow={setshow} close={close} setclose={setclose} />}
    {render && <IntroSlide />}
    {render && <div className='hint-intro'>You can use <strong>Spacebar</strong> or click the buttons to navigate</div>}
    
    </>
   
  );
}

export default App;
