import { database } from "../database/dataFake";

import React,{ 
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from "react"

interface TypeVideoPreview {
  thumbnail?: string;
  description?: string;
  channel: string;
  date: string;
  avatar?: string;
  url_video: string;
}

interface TypeValue {
  videoPreview: TypeVideoPreview[];
  setVideoPreview: Dispatch<SetStateAction<TypeVideoPreview[]>>;
}

const VideoContext = createContext<TypeValue>({} as TypeValue)

const Provider = ({ children } : { children : React.ReactNode }) => {
  const [videoPreview, setVideoPreview] = useState<TypeVideoPreview[]>([])
  
  const value : TypeValue = {
    videoPreview,
    setVideoPreview
  }

  useEffect(() => {
    setVideoPreview([...database])
    // for(let i = 0; i < 20; i++){
    //   setVideoPreview(prev => [
    //       ...prev, ...database
    //     ]
    //   )
    // }
  },[])

  return(
    <VideoContext.Provider value={value}>
      {children}
    </VideoContext.Provider>
  )
}

export { VideoContext, Provider }