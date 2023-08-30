import { useState } from "react";
import { motion } from "framer-motion";
import AnimalContainer from "../AnimalContainer/AnimalContainer";
import { AnimalsArray } from "../../assets/AnimalsArray";
import { shuffle } from "../../Util/Shuffle";
import ScoreHolder from "../Score/Score";
const Playground = () => {
  
    const initialStatus={
        dog:false,
        rabbit:false,
        cat:false,
        cow:false
     }
   
     const shuffledAnimals=shuffle(AnimalsArray)
   
     const [animals,setAnimals]=useState(shuffledAnimals)
     const [visible,setVisible]=useState(false)
     const [playing,setPlaying]=useState(false)
     const [status,setStatus]=useState(initialStatus)
     const [finished,setFinised]=useState(false)
     const [placeHolder,setPlaceHolder]=useState(false)
     const [done,setDone]=useState(false)
     const [clear,setClear]=useState(false)
     const [score,setScore]=useState()
   
   
     const scoreHandler=()=>{

       const value=Object.values(status).filter(v=>v).length*25
     
       if(value===0){
        setScore(prev=>"0")
       }
       else{
        setScore(prev=>value) 
       }
     

     }
   
   
     const dragStartHandler=(e,animal)=>{
          e.dataTransfer.setData("text",animal)
     }
     const dragOverHandler=(e)=>{
          e.preventDefault()
     }
   
     const doneHandler=()=>{
        setFinised(true)
        setVisible(true)
        setPlaceHolder(false)
        setPlaying(false)
        setDone(true)
        scoreHandler()
     }
   
     const replayHandler=()=>{
         setStatus(prev=>initialStatus)
         setClear(true)
         setVisible(false)
         setDone(false)
         setFinised(false)
         setScore(prev=>0)
         setAnimals(prev=>shuffle(AnimalsArray))
   
     }
     
   
   
   
     const playHandler=()=>{
           setClear(false)
           setVisible(true)
           setPlaying(true)
           setTimeout(()=>{setPlaceHolder(true);setVisible(false)},3000)
     }
  
  
  
return (
    <>
    <ScoreHolder score={score}/>
    <div className="absolute flex flex-col gap-8 w-screen  h-screen justify-center items-center">
    <div className="md:mt-4 md:w-3/5 md:gap-8 box-border flex-wrap flex justify-center items-center w-full ">
          {animals.map(animal=>(<AnimalContainer clear={clear} finished={finished} status={setStatus} dragOver={dragOverHandler} name={animal.name} src={animal} visible={visible}  />))}   
          {placeHolder ? <div className="md:mt-4 mt-8 w-full flex flex-col gap-1">
               <p className="unselectable text-center font-semibold text-white">Tap and hold to move</p>
              <div  className=" flex justify-evenly items-center w-full rounded-full border h-8">
                 {AnimalsArray.map(animal=>(<div  onDragStart={(e)=>dragStartHandler(e,animal.name)} draggable="true" className="bg-white flex-grow mx-4 text-center rounded-full ">
                  <p className="unselectable" >{animal.name}</p>
                  </div>))}
              </div>
          </div>:" "}
   </div>
     
     {!playing && !done ? <motion.button whileTap={{ scale: 0.8 }} onClick={playHandler} className="unselectable mt-12 md:w-1/3 lg:1/4 w-1/2 rounded-full p-2 box-border bg-white disabled:opacity-25">Start</motion.button>:!done ?
     <motion.button whileTap={{ scale: 0.8 }} disabled={visible} onClick={doneHandler} className="unselectable mt-12 md:w-1/4 lg:1/5 w-1/3 rounded-full p-2 box-border bg-white disabled:opacity-25">Done</motion.button> :
     <motion.button whileTap={{ scale: 0.8 }} onClick={replayHandler} className="unselectable mt-12 md:w-1/4 lg:1/5 w-1/3 rounded-full p-2 box-border bg-white disabled:opacity-25">Start Again</motion.button> }
 </div>
 </>
  )
}

export default Playground