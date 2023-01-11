import './nav.css';
import {useRive,Fit,useStateMachineInput,Layout,Alignment} from '@rive-app/react-canvas';
import {useState,useEffect, useRef} from 'react'
import {gsap} from 'gsap'
function NavBtn({width,height,text,setshow,setpage,id,hover,sethover}){
    const STATE_MACHINE_NAME="State Machine 1";
    const { rive, RiveComponent } = useRive({
        src: 'nav_btn.riv',
        autoplay: true,
        layout:new Layout({
            fit:Fit.Cover
        }),
        stateMachines:STATE_MACHINE_NAME
        
      });

      const Hover=useStateMachineInput(rive,STATE_MACHINE_NAME,"hover");
      const unHover=useStateMachineInput(rive,STATE_MACHINE_NAME,"unhover");
      const Click=useStateMachineInput(rive,STATE_MACHINE_NAME,"click");

      useEffect(()=>{
        if(hover!==id && unHover){
            unHover.fire();
        }
      })

   
    return(
        <div className='nav-btn' key={id} id={"btn-"+id} style={{width:width,height:height}} 
            onMouseEnter={()=>{Hover.fire();sethover(id);}}
            onMouseLeave={()=>{unHover.fire()}}
            onMouseDown={()=>{
                setTimeout(()=>{setpage(text)},2000);
                Click.fire();
                setTimeout(()=>{setshow("inactive");},500);
                
                

                }}>
            <RiveComponent  />
            <span className='nav-btn-text'>{text}</span>
        </div>
        
    )
}

function NavElements({show,setshow,setpage}){
    const elms=['Start','Clinical Picture','Anatomy & Pathophysiology',
                'Investigations','Management','End'];
    const [hovered,setHovered]=useState(-1);

    window.addEventListener('mousemove',(e)=>{
      
        if(e.target.closest(".nav-btn")){
            //setHovered(parseInt(e.target.closest(".nav-btn").id.split("-")[1]));
            //console.log(e.target.closest(".nav-btn").id);
        }
    })
    function render(){
        return(
            elms.map((el,i)=><NavBtn width={(250)+"px"} height={"100px"} text={el} setshow={setshow} setpage={setpage} id={i} hover={hovered} sethover={setHovered}/>)
        )
    }
    return(
        <div className='nav-elements'>
            {render()}
        </div>
    );
}

function Navigation({show,setshow,setpage}){
    const STATE_MACHINE_NAME="State Machine 1";
    const { rive, RiveComponent } = useRive({
        src: 'back.riv',
        autoplay: true,
        layout:new Layout({
            fit:Fit.Cover
        }),
        stateMachines:STATE_MACHINE_NAME
        
      });
      const Switch=useStateMachineInput(rive,STATE_MACHINE_NAME,"switch");
      const ref=useRef(null);
      useEffect(()=>{
        let tl=gsap.timeline();
        if(show==="active"){
           tl.set(".nav-container>div",{height:"100vh"});
           tl.set(".nav-container",{display:"flex"});
           tl.set(".nav-elements",{display:"grid",height:"90vh",delay:0.7});
           tl.fromTo(".nav-btn",{opacity:0,scale:0.7},{duration:0.4,opacity:1,scale:1,delay:0.1,stagger:0.1,ease:gsap.power4});
            Switch.fire();
        }else if(show==="inactive"){
            tl.fromTo(".nav-btn",{opacity:1,scale:1},{duration:0.4,opacity:0,scale:0.7,stagger:0.1,ease:gsap.power4});
            tl.set(".nav-elements",{display:"none",delay:0.2});
            tl.set(".nav-container>div",{height:"0vh",delay:0.5});
            tl.set(".nav-container",{display:"none",delay:0.5});
            
            Switch.fire();
        }
        
      })
    return(
        <div className='nav-container' ref={ref}>
            
            <RiveComponent style={{position:"fixed",top:0,left:0,width:"100vw",height:"0vh"}} />
            <NavElements show={show} setshow={setshow} setpage={setpage} />
            
        </div>
    );
}



export default Navigation;


