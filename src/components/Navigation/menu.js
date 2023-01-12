import './nav.css';
import {useRive,Fit,useStateMachineInput,Layout} from '@rive-app/react-canvas';
import React,{ useEffect, useState, Component } from 'react';

function Menu({show,setshow,close,setclose}){
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
        console.log(close);
        if(close==="close"){
         
            OnHover.fire();
            setTimeout(()=>{OnMouseClick.fire()},1000); 
            setTimeout(()=>{OnUnHover.fire()},2500); 
            setclose("");
            
        }

     },[close])
     
    
    return(
        <div className='menu' onMouseOver={()=>rive && OnHover.fire()} 
        onMouseOut={()=>rive && OnUnHover.fire()}
        onMouseDown={()=>{
                    rive && OnMouseClick.fire();
                            }} >
            <RiveComponent  />
            {console.log(rive)}
        </div>
    );
}
export default Menu;