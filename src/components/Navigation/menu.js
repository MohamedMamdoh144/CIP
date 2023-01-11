import './nav.css';
import {useRive,Fit,useStateMachineInput,Layout} from '@rive-app/react-canvas';
import React,{ useEffect, useState, Component } from 'react';

function Menu({show,setshow}){
    const [open,setOpen]=useState("closed");
     let  ManageState;


    const STATE_MACHINE_NAME="State Machine 1";
    
    const { rive, RiveComponent } = useRive({
        src: 'menu.riv',
        autoplay: true,
        layout:new Layout({
            fit:Fit.FitWidth
        }),
        stateMachines:STATE_MACHINE_NAME,
        onStateChange:(e)=>ManageState(e)

        
      });
     function toggleOpen(){
        if(open==="open"){
            setOpen("closed");
        }else if(open==="closed"){
            setOpen("open");
        }
        console.log("toggle",open,show);
     }
      const OnMouseClick=useStateMachineInput(rive,STATE_MACHINE_NAME,"click");
      const OnHover=useStateMachineInput(rive,STATE_MACHINE_NAME,"hover");
      const OnUnHover=useStateMachineInput(rive,STATE_MACHINE_NAME,"unhover");
      ManageState=(e)=>{
        const state=e.data[0]+"";
  
        if(state==="inactive"){
            setshow("inactive");
        }else if(state==="active"){
            setshow("active");
        }
       
      }
     
      useEffect(()=>{
        if(show==="inactive" && open==="open"){
            setOpen("closed")
            OnHover.fire();
            setTimeout(()=>{OnMouseClick.fire()},2000); 
            setTimeout(()=>{OnUnHover.fire()},3500); 
            return;     
            
        }
      },[show])
    
    return(
        <div className='menu' onMouseOver={()=>rive && OnHover.fire()} 
        onMouseOut={()=>rive && OnUnHover.fire()}
        onMouseDown={()=>{
                    rive && OnMouseClick.fire();
                            toggleOpen();
                            }} >
            <RiveComponent  />
            {console.log(rive)}
        </div>
    );
}
export default Menu;