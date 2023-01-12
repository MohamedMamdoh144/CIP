import '../Intro/intro.css';
import {useRive,Fit,useStateMachineInput,Layout,Alignment} from '@rive-app/react-canvas';
import {useState,useEffect, useRef} from 'react';
import React from 'react';
import {gsap} from 'gsap'
import { Impress, Step } from 'react-impressjs';
import parse from 'html-react-parser';
import TypeIt from "typeit-react";
import Quiz from 'react-quiz-component';
import ReactPlayer from 'react-player'
import { quiz_1,quiz_2 } from './quiz';

const slideGroups={
    first:["step-2","step-3","step-4","step-5","step-6","step-7"],
    second:["step-9","step-10","step-11","step-12","step-13"],
    third:["step-14","step-15","step-16","step-17"],
}

function MainBtn({call,text}){
    const STATE_MACHINE_NAME="State Machine 1";
    const { rive, RiveComponent } = useRive({
        src: 'intro_main_btn.riv',
        autoplay: true,
        layout:new Layout({
            fit:Fit.Cover,
            alignment:Alignment.Center
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
           <RiveComponent style={{height:"8rem",width:"15vw",position:'absolute',top:0,left:0}}/>
            <span className='intro-main-btn-text'>{text}</span>
        </div>
        </>
      )
}
function ListItem({id,text,radius,description,width,height}){
    return(
        <div className='uni-list-item' style={{width:radius+"px",height:radius+"px"}}>
            <span className='uni-list-item-id' style={{width:(radius*0.25)+"px",height:(radius*0.25)+"px"}}>{id}</span>
            <span className='uni-list-item-text'>{text}</span>
            
            {description && <span className='uni-list-item-description'>{parse(description)}</span>}
                
        </div>
    )
}

function DiagnosisItem({id,text,width=40,height=12}){
    return(
        <div className='diag-list-item' style={{width:width+"vw",height:height+"vh"}}>
            <div className='diag-list-item-id' style={{width:"px",height:"px"}}>{id}</div>
            <div className='diag-list-item-text'>{text}</div>
                
        </div>
    )
}

function IntroSlide() {

        let defaults = {
            width: 1024,
            height: 768,
            maxScale: 1,
            minScale: 0,
            perspective: 1000,
            transitionDuration: 1000
        };
        const ref=useRef();
        const video1=useRef();
        const video2=useRef();
        

    function handler(){
        setTimeout(()=>{
            ref.current.next();
        },600)
    }
    // Manage TypeIt instances here

    const [step1_h1,setStep1_h1]=useState(null);
    const [step1_h3,setStep1_h3]=useState(null);
    const [step1_h4,setStep1_h4]=useState(null);

    const [step4_h1,setStep4_h1]=useState(null);

    const [step6_h1,setStep6_h1]=useState(null);

    const [step7_h1,setStep7_h1]=useState(null);
    const [step7_h3,setStep7_h3]=useState(null);
    const [step7_h4,setStep7_h4]=useState(null);

    const [step10_h1,setStep10_h1]=useState(null);

    const [step12_h1,setStep12_h1]=useState(null);
    const [step12_h3,setStep12_h3]=useState(null);
    const [step12_h4,setStep12_h4]=useState(null);

    const [step13_h1,setStep13_h1]=useState(null);
    const [step13_h3,setStep13_h3]=useState(null);
    const [step13_h4,setStep13_h4]=useState(null);

    const [step14_h1,setStep14_h1]=useState(null);
    const [step14_h3,setStep14_h3]=useState(null);
    const [step14_h4,setStep14_h4]=useState(null);
    const [step14_ai,setStep14_ai]=useState(null);

    const [step15_h1,setStep15_h1]=useState(null);

    const [step16_h1,setStep16_h1]=useState(null);

    const [step17_h1,setStep17_h1]=useState(null);

    window.addEventListener("hashchange",(e)=>{
        let step=e.newURL.split('#/')[1];
        let step_num=parseInt(step.split("-")[1]);
        let player1=video1.current.player.player.player;
        let player2=video2.current.player.player.player;


       if( step==="step-8"){
            setTimeout(() => {
                ref.current.next();
            }, 800);
        }
        else if(step==="step-2"){
            
            step1_h1.unfreeze();
            
        }
        else if(step==="step-3"){
                console.log(video1.current);
                player1.src="anim.mp4";
            
        }
        else if(step==="step-4"){
            
             step4_h1.unfreeze();
            
         } 
         else if(step==="step-6"){
            
            step6_h1.unfreeze();
           
        } 
        else if(step==="step-7"){

            step7_h1.unfreeze();
           
        }
        else if(step==="step-9"){
            player2.src="cog.mp4";
        
    }
        else if(step==="step-10"){
            
             step10_h1.unfreeze();
         }
         else if(step==="step-12"){
  
            step12_h1.unfreeze();
           
        }
        else if(step==="step-13"){
           
            step13_h1.unfreeze();
           
        }
        else if(step==="step-14"){
            
            step14_h1.unfreeze();
           
        }
        else if(step==="step-15"){
           
            step15_h1.unfreeze();
            
           
        }
        else if(step==="step-16"){
           
            step16_h1.unfreeze();
            
           
        }
        else if(step==="step-17"){
           
            step17_h1.unfreeze();
            
           
        }


        //Logic for unHiding groups
        if(step_num>=2 && step_num<=7){
            slideGroups.first.forEach((el)=>{gsap.set("#"+el+">*:not(.intro-main-btn, .list-hint, .AI, h3,h4)",{opacity:1,delay:0.6})});
        }
        else  if(step_num>=9 && step_num<=13){
            slideGroups.second.forEach((el)=>{gsap.set("#"+el+">*:not(.intro-main-btn, .list-hint, .AI, h3,h4)",{opacity:1,delay:0.6})});
        }
        else  if(step_num>=14 && step_num<=17){
            slideGroups.third.forEach((el)=>{gsap.set("#"+el+">*:not(.intro-main-btn, .list-hint, .AI, h3,h4)",{opacity:1,delay:0.6})});
        }


        //pause videos after slide
        if(step!=="step-3" && player1){
            player1.pause();
        }
        if(step!=="step-9" && player2){
            player2.pause();
            
        }
    })


    return(
        <>
         <Impress 
    progress={true}
    fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
    data={defaults}
    ref={ref}>

        {/* STEP-1 */}


         <Step duration={600}
               
                data={{
                    z:6100,
                    y:1500
                }}>
               
                
            </Step>

                 {/* STEP-2 */}


            <Step duration={600}
                className={"intro"}
                data={{
                    x:-3500
                }}>
                    
                <h1 className='intro-h1'>
                    <TypeIt getBeforeInit={(instance) => {
                         setStep1_h1(instance);
                        instance.type("C").pause(100).type("_____-").pause(50).type("I______ ").pause(100).type("P________").freeze();
                    return instance;
                    }}
                    options={{speed:80,afterComplete:()=>{
                        gsap.set("#step-2 .intro-h3 ",{opacity:1});
                        step1_h3.unfreeze();
                        step1_h1.destroy();
                        
                    }}

                    }
                    />
                </h1>
                <h3 className='intro-h3'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep1_h3(instance);
                        instance.type("An interesting case-report").freeze();
                    return instance;
                    }}
                    options={{speed:90,afterComplete:()=>{
                        gsap.set("#step-2 .intro-h4 ",{opacity:1});
                        step1_h4.unfreeze();step1_h3.destroy();
                    }}}
                    />
                </h3>
                <h4 className='intro-h4'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep1_h4(instance);  
                        instance.type("join us to discover the hidden letters").freeze();
                    return instance;
                    }}
                    options={{speed:70,lifeLike:false,afterComplete:()=>{gsap.to("#step-2 .intro-main-btn",{duration:0.5,opacity:1,delay:0.15});step1_h4.destroy();}}}
                    />
                </h4>
                <MainBtn call={handler} text={"let's start"}/>
                
            </Step>

                     {/* STEP-3 */}
                     <Step duration={600}
               className={"incidence transparent"}
               
                data={{
                    x:-2000,
                    y:3500
                }}>
               
               <ReactPlayer     
                                className={"video"}
                                width={"100%"}
                                height={"100%"}
                                ref={video1}
                                playing
                                url={'anim.mp4'}
                                onEnded={handler}
                                 />
            </Step>

                 {/* STEP-4 */}
            <Step duration={600}
                className={"symptom-summary"}
                data={{
                    x:-3350,
                    y:1350,
                    z:200,
                    rotateZ:90
                }}>
                <h1 className='summary-h1'>
                <TypeIt getBeforeInit={(instance) => {
                    setStep4_h1(instance);
                          instance.type("Let's Recap The Symptoms").freeze();
                      return instance;
                      }}
                      options={{speed:80,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.fromTo("#step-4 .summary-h1",{fontSize:"7.2rem",y:100},{duration:0.7,fontSize:"4.8rem",y:0});
                        tl.to("#step-4 .symptom-item",{duration:0.7,opacity:1,y:`random(-100,50)`,x:`random(-50,50)`,stagger:0.5,ease:"back.out(1.4)"});
                        step4_h1.destroy();
                    }}}
                      />
                    </h1>
                    <ul className='symptom-list'>
                      <li className='symptom-item'><ListItem id={1} text={"Anosmia"} radius={150} /></li>
                      <li className='symptom-item'><ListItem id={2} text={"Cough"} radius={180} /></li>
                      <li className='symptom-item'><ListItem id={3} text={"Dizzines"} radius={160} /></li>
                      <li className='symptom-item'><ListItem id={4} text={"Tiredness"} radius={160} /></li>
                    </ul>
                      {/*Add an icon*/}
                
            </Step>

                     {/* STEP-5 */}


            <Step duration={600}
                className={"incidence mcq"}
                data={{
                    x:-4650,
                    y:1770,
                    z:320,
                    rotateZ:180
                    
                }}>
                    <div className='quiz-sidebar'>Time For A Little Quiz</div>
                    <div className='mcq-wrap'>
                     <Quiz quiz={quiz_1} showInstantFeedback={true} continueTillCorrect={true} showDefaultResult={false} onComplete={handler}/>
                    </div>
                
            </Step>

             {/* STEP-6 */}


            <Step duration={600}
                className={"symptom-summary center"}
               
                data={{
                    x:-4350,
                    y:-950,
                    z:512,
                    rotateZ:180
                }}>
                <h1 className='summary-h1' style={{fontSize:"3.6rem",marginBottom:"15vh",lineHeight:1.6}}>
                <TypeIt getBeforeInit={(instance) => {
                    setStep6_h1(instance);
                          instance.type("After perfroming qualitative PCR, the patient tested positive for COVID-19<br/>").pause(1400)
                          .type("she did not require hospitalization<br> and, she recovered from respiratory symptoms after 10 days").freeze();
                      return instance;
                      }}
                      options={{speed:70,afterComplete:()=>{
                        step6_h1.destroy();
                        gsap.to("#step-6 .intro-main-btn",{duration:0.5,opacity:1,delay:0.15,y:40});
                    }}}
                      />
                    </h1>
                    <MainBtn call={handler} text={"continue"}/>
                
            </Step>

             {/* STEP-7 */}

            <Step duration={600}
                className={"intro"}
                data={{
                    x:-4570,
                    y:450,
                    z:720,
                    rotateZ:270
                }}>
                 <h1 className='intro-h1'>
                    <TypeIt getBeforeInit={(instance) => {
                         setStep7_h1(instance);
                        instance.type("C____-I______ P________",{instant:true}).pause(300).move(-18,{instant:true}).pause(200).delete(4).type("OVID").move(null,{to:"END",instant:true}).freeze();
                    return instance;
                    }}
                    options={{speed:200,lifeLike:false,afterComplete:()=>{
                        step7_h3.unfreeze();
                        step7_h1.destroy();
                        gsap.set("#step-7 .intro-h3 ",{opacity:1});
                    }}

                    }
                    
                    />
                </h1>
                <h3 className='intro-h3'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep7_h3(instance);
                        instance.type("An interesting case-report",{instant:true}).freeze();
                    return instance;
                    }}
                    options={{speed:90,afterComplete:()=>{
                        step7_h4.unfreeze();
                        step7_h3.destroy();
                        gsap.set("#step-7 .intro-h4 ",{opacity:1});
                    }}}
                    />
                </h3>
                <h4 className='intro-h4'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep7_h4(instance);  
                        instance.type("continue to uncover more hidden letters").freeze();
                    return instance;
                    }}
                    options={{speed:70,lifeLike:false,afterComplete:()=>{gsap.to("#step-7 .intro-main-btn",{duration:0.5,opacity:1,delay:0.15});step7_h4.destroy();}}}
                    />
                </h4>
                <MainBtn call={handler} text={"Continue"}/>
                
            </Step>

           

       
                 {/* STEP-8 */}

                 <Step duration={600}
               
               data={{
                   z:6000,
                   y:1500
               }}>
                     </Step>

                              {/*
                Add the video for parkison
                recap the symptoms
                quiz
                add video for ttt
                */ }

              
                 {/* STEP-9 */}


            <Step duration={600}
               
               className={"incidence transparent"}
               data={{
                   x:2000,
                   y:3500
               }}>
                             <ReactPlayer     
                                className={"video"}
                                width={"100%"}
                                height={"100%"}
                                ref={video2}
                                playing
                                url={'anim.mp4'}
                                onEnded={handler}
                                 />
               
           </Step>


                 {/* STEP-10 */}

            <Step duration={600}
                className={"symptom-summary"}
                data={{
                    x:-1000,
                    y: 0
                    
                }}>
               <h1 className='summary-h1'>
                <TypeIt getBeforeInit={(instance) => {
                    setStep10_h1(instance);
                          instance.type("Let's Recap The Symptoms").freeze();
                      return instance;
                      }}
                      options={{speed:80,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.fromTo("#step-10 .summary-h1",{fontSize:"7.2rem",y:100},{duration:0.7,fontSize:"4.8rem",y:0});
                        tl.to("#step-10 .symptom-item",{duration:0.7,opacity:1,y:`random(-100,50)`,x:`random(-50,50)`,stagger:0.5,ease:"back.out(1.4)"});
                      step10_h1.destroy();
                    }}}
                      />
                    </h1>
                    <ul className='symptom-list'>
                        <li className='symptom-item'><ListItem id={1} text={"Weakness"} radius={150} /></li>
                        <li className='symptom-item'><ListItem id={2} text={"Cogwheel Rigidity"} radius={230} /></li>
                        <li className='symptom-item'><ListItem id={3} text={"Numbness"} radius={160} /></li>
                    </ul>
                     
                

                
            </Step>


             {/* STEP-11 */}


            <Step duration={600}
                className={"incidence mcq"}
                data={{
                    x:-1350,
                    y:1300,
                    z:120,
                    rotateZ:90
                    
                    
                }}>
                <div className='quiz-sidebar'>Time For Another Quiz</div>
                    <div className='mcq-wrap'>
                     <Quiz quiz={quiz_2} showInstantFeedback={true} continueTillCorrect={true} showDefaultResult={false} onComplete={handler}/>
                    </div>

                
            </Step>


                 {/* STEP-12 */}

            <Step duration={600}
                className={"intro"}
                data={{
                    x:-30,
                    y:1700,
                    z:320,
                    rotateZ:180
                    
                }}>
                <h1 className='intro-h1'>
                    <TypeIt getBeforeInit={(instance) => {
                         setStep12_h1(instance);
                        instance.type("COVID-I______ P________",{instant:true}).pause(300).move(-10,{instant:true}).pause(200).delete(6).type("nduced").move(null,{to:"END",instant:true}).pause(200).delete(8).type("arkinson").freeze();
                    return instance;
                    }}
                    options={{speed:200,lifeLike:true,afterComplete:()=>{
                        gsap.set("#step-12 .intro-h3 ",{opacity:1});
                        step12_h3.unfreeze();step12_h1.destroy();}}

                    }
           
                    />
                </h1>
                <h3 className='intro-h3'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep12_h3(instance);
                        instance.type("An interesting case-report",{instant:true}).freeze();
                    return instance;
                    }}
                    options={{speed:90,afterComplete:()=>{
                        gsap.set("#step-12 .intro-h4 ",{opacity:1});
                        step12_h4.unfreeze();step12_h3.destroy();}}}
                    />
                </h3>
                <h4 className='intro-h4'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep12_h4(instance);  
                        instance.type("Now let's see what happened later").freeze();
                    return instance;
                    }}
                    options={{speed:80,afterComplete:()=>{gsap.to("#step-12 .intro-main-btn",{duration:0.5,opacity:1,delay:0.15});step12_h4.destroy();}}}
                    />
                </h4>
                <MainBtn call={handler} text={"Continue"}/>
                
            </Step>


             {/* STEP-13 */}

             <Step 
             className={"incidence diagnosis"}
            data={{
                x:350,
                y:400,
                z:520,
                rotateZ:270
                       }}>
                    <div className='quiz-sidebar'>Management</div>
                  <h1 className='dialogue'>
                  <TypeIt 
                  
                  getBeforeInit={(instance) => {
                    setStep13_h1(instance);
                        instance.exec(()=>{gsap.to("#step-13 .dialogue",{duration:0.8,fontSize:"3.6rem",y:-30})})
                        .type("After 4days of therapy with 200/50mg of levodopa/benserazide three times a day, there was significant improvement of her symptoms<br/>")
                        .pause(800)
                        .type("However, some degree of smell affection is present")
                        .pause(2500)
                        .delete(null,{instant:true})
                        .delete(null,{instant:true})
                        .type("Management:<br><i style='font-size: 2.4rem;'>200/50mg of levodopa/benserazide three times a day</i>")
                        .freeze();
                    return instance;
                    }}
                    options={{speed:50,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.set("#step-13 .dialogue-h3",{opacity:1,fontSize:"2.6rem",width:"100%",marginLeft:0,textAlign:"center"});
                        tl.call(step13_h3.unfreeze,[]);
                        step13_h1.destroy();}}}
                    />
                   </h1>
                   <div style={{width:"100%",marginTop:"10vh"}}>
                  
                    
                    <h3 className='dialogue-h3'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep13_h3(instance);
                        instance.pause(600).type("This animation was based on a real case-report<br/> You can check it out <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7461093/' target='_blank'>here</a>").freeze();
                    return instance;
                    }}
                    options={{speed:50,lifeLike:false,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.set("#step-13 .dialogue-h4",{opacity:1});
                        tl.call(step13_h4.unfreeze,[]);
                        step13_h3.destroy();}}}
                    />
                </h3>
                   </div>
  
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"5vh"}}>
                <h4 className='dialogue-h4'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep13_h4(instance);
                        instance.type("Want to learn more about the pathogensis?").pause(1800)
                        .delete(16)
                        .type("how artificial intelligence can diagnose parkisnonism?")
                        .pause(1800).delete(null,{instant:true})
                        .type("Or even how we created this app").pause(1800)
                        .delete(null,{instant:true})
                        .type("You can use the navigation menu below to navigate to different sections")
                        .freeze();
                    return instance;
                    }}
                    options={{speed:60,lifeLike:false,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.to(".menu",{duration:1.6,backgroundColor:"#42273B",repeat:1});
                        tl.to(".menu",{duration:0.4,backgroundColor:"#7290db",ease:"power3.inOut"});
                        
                        step13_h4.destroy();
                    }}}
                    />
                </h4>
              
                </div>
            </Step>
                     
                     {/* STEP-14 */}

            <Step 
             className={"incidence diagnosis"}
            data={{
                    x:2500,
                    y:0
                       }}>
                    <div className='quiz-sidebar'>Diagnosis</div>
                  <h1 className='dialogue'>
                  <TypeIt 
                  
                  getBeforeInit={(instance) => {
                    setStep14_h1(instance);
                        instance.type("Now, let's talk a little bit about diagnosis").pause(1800).delete(20).exec(()=>{gsap.to("#step-14 .dialogue",{duration:0.8,fontSize:"3.6rem",y:-30})})
                        .delete()
                        .type("In fact, there are many diagnostic criteria that can diagnose parkinson's disease<br/>").pause(800)
                        .type("<strong style='color:#d74582;'>However,..</strong>").pause(1500).delete(10)
                        .type("Most of them share a couple of drawbacks").pause(1200)
                        .delete(null,{instant:true}).type("Drawbacks of diagnostic criteria")
                        .exec(()=>{gsap.to("#step-14 .dialogue",{duration:0.5,fontSize:"4.8rem",y:-65})})
                        .pause(500).freeze();
                    return instance;
                    }}
                    options={{speed:60,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.to("#step-14 .diagnosis-item",{duration:0.7,opacity:1,x:`random(-50,50)`,stagger:0.7,ease:"back.out(1.7)",delay:0.5});
                        tl.set("#step-14 .dialogue-h3",{opacity:1});
                        tl.call(step14_h3.unfreeze,[]);
                        step14_h1.destroy();}}}
                    />
                   </h1>
                   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"5vh"}}>
                   <ul className='diagnosis-list'>
                        <li className='diagnosis-item'><DiagnosisItem id={1} text={"They are subjective and dependent on the clinician"}/></li>
                        <li className='diagnosis-item'><DiagnosisItem id={2} text={"They miss many early cases"}/></li>
                    </ul>
                    
                    <h3 className='dialogue-h3'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep14_h3(instance);
                        instance.pause(600).type("You can check the most recent criteria <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5877503/table/T1/?report=objectonly' target='_blank'>here</a>").freeze();
                    return instance;
                    }}
                    options={{speed:70,lifeLike:false,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.set("#step-14 .dialogue-h4",{opacity:1});
                        tl.call(step14_h4.unfreeze,[]);
                        step14_h3.destroy();}}}
                    />
                </h3>
                   </div>
  
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"5vh"}}>
                <h4 className='dialogue-h4'>
                    <TypeIt getBeforeInit={(instance) => {
                        setStep14_h4(instance);
                        instance.type("Fortunately, our story doesn't end here because AI is all in for help").pause(1800)
                        .delete(null,{instant:true})
                        .type("Let's discover more about AI diagnosis in the next slide").freeze();
                    return instance;
                    }}
                    options={{speed:50,lifeLike:false,afterComplete:()=>{
                        gsap.to("#step-14 .intro-main-btn",{duration:0.5,opacity:1,y:"2vh",delay:0.15});
                        gsap.set("#step-14 .AI",{opacity:1});
                        step14_ai.unfreeze();
                        step14_h4.destroy();
                    }}}
                    />
                </h4>
                <MainBtn call={handler} text={"See next"} />
                </div>
                <div className='AI'><TypeIt getBeforeInit={(instance) => {
                        setStep14_ai(instance);
                        instance.type("AI:<i>Artificial Intelligence</i>").pause(500)
                        .freeze();
                    return instance;
                    }}
                    options={{speed:90,lifeLike:false,afterComplete:()=>{
                        gsap.to("#step-14 .intro-main-btn",{duration:0.5,opacity:1,y:"2vh",delay:0.15});
                        step14_ai.destroy();
                    }}}
                    /></div>
            </Step>

                     {/* STEP-15 */}

            <Step duration={600}
                className={"symptom-summary"}
                data={{
                    x:2900,
                    y: 1300,
                    z:120,
                    rotateZ:90
                    
                }}>
                    <div className='list-hint'>Move your cursor over the items to learn more</div>
               <h1 className='summary-h1'>
                <TypeIt getBeforeInit={(instance) => {
                    setStep15_h1(instance);
                          instance.type("Ever wondered how AI can aid doctors").pause(500).type("?!").pause(800)
                          .exec(()=>{ gsap.fromTo("#step-15 .summary-h1",{fontSize:"7.2rem"},{duration:0.7,fontSize:"5rem"});})
                          .delete(null,{instant:true})
                          .type("Let's see the various ways AI can diagnose Parkinsonism").freeze();
                      return instance;
                      }}
                      options={{speed:80,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.fromTo("#step-15 .summary-h1",{fontSize:"5rem",y:100},{duration:0.7,fontSize:"4rem",y:0});
                        tl.to("#step-15 .symptom-item",{duration:0.7,opacity:1,y:`random(-100,50)`,x:`random(-50,50)`,stagger:0.5,ease:"back.out(1.4)"});
                        tl.to("#step-15 .list-hint",{duration:1,y:"25vh",opacity:1,ease:"back.out(1.4)",delay:0.4});
                        tl.to("#step-15 .list-hint",{duration:1,y:"-10%",opacity:0,ease:"back.out(1.4)",delay:2});
                      step15_h1.destroy();
                    }}}
                      />
                    </h1>
                    <ul className='symptom-list'>
                        <li className='symptom-item'><ListItem id={1} text={"Voice"} radius={150} description={"the AI model can assess early parkinson's disease from voice and facial expressions extracted from a short video for the patient. <a href='https://www.nature.com/articles/s41531-022-00414-8' target='_blank'>Learn More</a>"} /></li>
                        <li className='symptom-item'><ListItem id={2} text={"Breath"} description={"the AI model can assess parkinson's disease in the home setting in a touchless manner, by extracting breathing from radio waves that bounce off a person’s body during sleep! <a href='https://www.nature.com/articles/s41591-022-01932-x' target='_blank'>Learn More</a>"} radius={160} /></li>
                        <li className='symptom-item'><ListItem id={3} text={"Retina"} description={"the AI model can detect the early changes in the retina from a simple cheap fundus examination.<a href='https://press.rsna.org/timssnet/media/pressreleases/14_pr_target.cfm?ID=2229' target='_blank'>Learn More</a>"} radius={150} /></li>
                    </ul>
                
            </Step>



                                 {/* STEP-16 */}

            <Step duration={600}
                className={"symptom-summary"}
                data={{
                    x:4200,
                    y: 1650,
                    z:120,
                    
                    
                }}>
            <div className='list-hint'>Move your cursor over the items to learn more</div>
               <h1 className='summary-h1'>
                <TypeIt getBeforeInit={(instance) => {
                    setStep16_h1(instance);
                          instance.exec(()=>{ gsap.fromTo("#step-16 .summary-h1",{fontSize:"7.2rem"},{duration:0.2,fontSize:"5rem"});})
                          .type("Let's talk a little bit about possible theories that might explain our case").pause(800)
                          .delete(null,{instant:true})
                          .type("Here are two possible theories").freeze();
                      return instance;
                      }}
                      options={{speed:80,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.fromTo("#step-16 .summary-h1",{fontSize:"5rem",y:100},{duration:0.7,fontSize:"4rem",y:0});
                        tl.to("#step-16 .symptom-item",{duration:0.7,opacity:1,y:`random(-100,50)`,x:`random(-50,50)`,stagger:0.5,ease:"back.out(1.4)"});
                        tl.to("#step-16 .list-hint",{duration:1,y:"25vh",opacity:1,ease:"back.out(1.4)",delay:0.4});
                        tl.to("#step-16 .list-hint",{duration:1,y:"-10%",opacity:0,ease:"back.out(1.4)",delay:2});
                      step16_h1.destroy();
                    }}}
                      />
                    </h1>
                    <ul className='symptom-list'>
                        <li className='symptom-item'><ListItem id={1} text={"Exosomes"} radius={160} description={"Exosomes constitute a reliable route for misfolded protein transmission, contributing to PD pathogenesis and diagnosis. <a href='https://www.mdpi.com/1422-0067/23/17/9739' target='_blank'>Learn More</a>"} /></li>
                        <li className='symptom-item'><ListItem id={2} text={"Cytokine Storm"} description={"There have been several recent reports that support the notion that an increase in pro-inflammatory cytokines levels such as IL-6 and IL-1BETA may hasten the symptoms of Parkinson's disease. <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9359766/' target='_blank'>Learn More</a>"} radius={190} /></li>
                    </ul>
                
            </Step>

            <Step duration={600}
                className={"symptom-summary"}
                data={{
                    x:4700,
                    y: 350,
                    z:120,
                    rotateZ:-90
                    
                }}>
            <div className='list-hint'>Move your cursor over the items to learn more</div>
               <h1 className='summary-h1'>
                <TypeIt getBeforeInit={(instance) => {
                    setStep17_h1(instance);
                          instance.exec(()=>{ gsap.fromTo("#step-17 .summary-h1",{fontSize:"7.2rem"},{duration:0.2,fontSize:"5rem"});})
                          .type("Tools used to create this app").pause(800)
                          .freeze();
                      return instance;
                      }}
                      options={{speed:80,afterComplete:()=>{
                        let tl=gsap.timeline();
                        tl.fromTo("#step-17 .summary-h1",{fontSize:"5rem",y:100},{duration:0.7,fontSize:"4rem",y:0});
                        tl.to("#step-17 .symptom-item",{duration:0.7,opacity:1,y:`random(-100,50)`,x:`random(-50,50)`,stagger:0.5,ease:"back.out(1.4)"});
                        tl.to("#step-17 .list-hint",{duration:1,y:"25vh",opacity:1,ease:"back.out(1.4)",delay:0.4});
                        tl.to("#step-17 .list-hint",{duration:1,y:"-10%",opacity:0,ease:"back.out(1.4)",delay:2});
                      step17_h1.destroy();
                    }}}
                      />
                    </h1>
                    <ul className='symptom-list'>
                        <li className='symptom-item'><ListItem id={1} text={"Cartoon animator"} radius={210} description={"The app used to render the animation. <a href='https://www.reallusion.com/cartoon-animator/default.html' target='_blank'>Learn More</a>"} /></li>
                        <li className='symptom-item'><ListItem id={2} text={"ImpressJS"} description={"A wonderful presentation tool with diverese set of features. <a href='https://impress.js.org/#/bored' target='_blank'>Learn More</a>"} radius={180} /></li>
                        <li className='symptom-item'><ListItem id={3} text={"TypeIt"} radius={160} description={"The little cursor that writes everything. <a href='https://www.typeitjs.com/' target='_blank'>Learn More</a>"} /></li>
                        <li className='symptom-item'><ListItem id={4} text={"GSAP"} description={"One of the most powerful animation frameworks. <a href='https://greensock.com/gsap/' target='_blank'>Learn More</a>"} radius={170} /></li>
                    </ul>
                
            </Step>
            </Impress>
        </>
    )

}

export default IntroSlide;

