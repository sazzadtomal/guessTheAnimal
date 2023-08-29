import { AnimalsArray } from "./assets/AnimalsArray";
import {shuffle} from "./Util/Shuffle"
import AnimalContainer from "./component/AnimalContainer/AnimalContainer"

import { useState} from "react";


function App() {


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
  }

  const replayHandler=()=>{
      setClear(true)
      setVisible(false)
      setDone(false)
      setFinised(false)
      setAnimals(prev=>shuffle(AnimalsArray))

  }
  



  const playHandler=()=>{
        setClear(false)
        setVisible(true)
        setPlaying(true)
        setTimeout(()=>{setPlaceHolder(true);setVisible(false)},3000)
  }

  return (
   
      <div className="flex flex-col gap-8 w-screen  h-screen justify-center items-center">
       <div className="md:w-3/5 md:gap-8 box-border flex-wrap flex justify-center items-center w-full ">
             {animals.map(animal=>(<AnimalContainer clear={clear} finished={finished} status={setStatus} dragOver={dragOverHandler} name={animal.name} src={animal} visible={visible}  />))}   
             {placeHolder ? <div  className=" flex justify-evenly items-center w-full rounded-full border mt-12 h-8">
                {AnimalsArray.map(animal=>(<div onDragStart={(e)=>dragStartHandler(e,animal.name)} draggable="true" className="bg-white flex-grow mx-4 text-center rounded-full ">{animal.name}</div>))}
             </div>:" "}
      </div>
        
        {!playing && !done ? <button onClick={playHandler} className="mt-12 md:w-1/3 lg:1/4 w-1/2 rounded-full p-2 box-border bg-white disabled:opacity-25">Start</button>:!done ?
        <button onClick={doneHandler} className="mt-12 md:w-1/4 lg:1/5 w-1/3 rounded-full p-2 box-border bg-white disabled:opacity-25">Done</button> :
        <button onClick={replayHandler} className="mt-12 md:w-1/4 lg:1/5 w-1/3 rounded-full p-2 box-border bg-white disabled:opacity-25">Start Again</button> }
    </div>
  );
}

export default App;
