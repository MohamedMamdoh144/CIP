import './cp.css';
import {useRive,Fit,useStateMachineInput,Layout,Alignment} from '@rive-app/react-canvas';
import {useState,useEffect, useRef,Component} from 'react';
import React from 'react';
import {gsap} from 'gsap'
import { Impress, Step } from 'react-impressjs';
import TypeIt from "typeit-react";

function MainBtn({call}){
    const STATE_MACHINE_NAME="State Machine 1";
    const { rive, RiveComponent } = useRive({
        src: 'intro_main_btn.riv',
        autoplay: true,
        layout:new Layout({
            fit:Fit.FitHeight
        }),
        stateMachines:STATE_MACHINE_NAME
        
      });
      const Click=useStateMachineInput(rive,STATE_MACHINE_NAME,"click");
      return(
        <>
        <div className='intro-main-btn' onMouseDown={(current)=>{
            Click.fire();
            call();
             }}>
           <RiveComponent style={{height:"80px",width:"15vw",position:'absolute',top:0,left:0}}/>
            <span className='intro-main-btn-text'>Let's Start</span>
        </div>
        </>
      )
}

class CPSlide extends Component{
    constructor(){
        super();
        this.defaults = {
            width: 1024,
            height: 768,
            maxScale: 1,
            minScale: 0,
            perspective: 1000,
            transitionDuration: 1000
        };
        this.ref=React.createRef();
        this.startPage=React.createRef();
        this.state={clicked:false};
        this.handler = this.handler.bind(this);
    }
    componentDidMount(){
        this.startPage.current.dispatchEvent(new MouseEvent('click',{
            bubbles:true,
            cancelable:true,
            view:window
        }))
        console.log(this.ref.current)
    }
    componentDidUpdate(){
        if(this.state.clicked){
            
            setTimeout(()=>{
              this.ref.current.next()},500);
                this.setState({clicked:false})
        }
    }
    handler() {
        this.setState({
          clicked: true
        })
      }
    render(){return(
        <>
         <Impress 
    progress={false}
    fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
    data={this.defaults}
    hint={false}
    ref={this.ref}>
            <Step duration={600}
                className={"intro"}
                data={{
                    x:-1000
                }}>
                <h1 className='intro-h1' ref={this.startPage}>
                    <TypeIt getBeforeInit={(instance) => {
                    instance.pause(200).type("Clinical").pause(750).type(" Picture").pause(2000);
                    return instance;
                    }}
                   
                    />
                </h1>
                <MainBtn call={this.handler}/>
                
            </Step>
            <Step duration={600}
                className={"incidence"}
                data={{
                    x:-1000,
                    y:1920,
                    z:-60,
                    rotateZ:90
                }}

           >
                <h1 className='incidence-h1'  >Incidence</h1>

                
            </Step>
            <Step duration={600}
                className={"incidence"}
                data={{
                    x:900,
                    y:1000,
                    z:60,
                    rotateZ:180,
                    rotateX:180
                }}>
                <h1 className='incidence-h1'>More Facts</h1>

                
            </Step>

            </Impress>
        </>
    )
}
}

export default CPSlide;

