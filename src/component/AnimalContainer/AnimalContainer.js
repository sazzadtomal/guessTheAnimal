import { motion,AnimatePresence } from "framer-motion";
import { Player} from "@lottiefiles/react-lottie-player";
import { useState,useEffect} from "react";

const AnimalContainer = ({src,visible,dragOver,status,finished,clear}) => {

  const [guessed,setGuessed]=useState()


    
    useEffect(()=>{
      setGuessed("?")
    },[clear])


  const onDropHandler=(e)=>{
      const eventData=e.dataTransfer.getData("text")
      const animal=eventData.toLowerCase()
      setGuessed(eventData)
      if(eventData===src.name){
        status(prev=>{
         return {...prev,
             [animal]:true 
        }})
      }
      else{
        status(prev=>{
          return {...prev,
              [animal]:false
         }})
      }
  }

  return (
    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} className="p-2 basis-1/3">
    <AnimatePresence>
      {visible? <motion.div className="mb-2" initial={{ scale: 0.8, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       exit={{ opacity: 0, y:50 }} >
        <Player autoplay loop src={src.animation} className="w-16 h-16" />
      </motion.div>:" "}
    </AnimatePresence>
     <div className={`${ finished? guessed===src.name? "bg-emerald-400":"bg-rose-400":"bg-white" } flex justify-center items-center rounded-lg w-full h-16 unselectable`} onDrop={onDropHandler} onDragOver={(e)=>dragOver(e)}>{guessed}</div>
   </motion.div>
  )
}

export default AnimalContainer