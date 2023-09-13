import { 
  useContext,
  useState,
  useEffect
} from "react";

import { Link, useParams } from "react-router-dom";
import { Container } from "./style";
import { VideoContext } from "../../context/provider";
import { VideoPreviewComponent } from "../../components/video-preview";

import Monkey from "../../assets/monkey.png";

interface TypeVideoPreview {
  thumbnail?: string;
  description?: string;
  channel: string;
  date: string;
  avatar?: string;
  url_video: string;
}

export const Search = () => {
  const [ searchVideo, setSearchVideo ] = useState<TypeVideoPreview[]>([])

  const { watch } = useParams()
  const { videoPreview } = useContext(VideoContext)

  useEffect(() => {
    if(watch){
      const handleSearchVideo = videoPreview.filter((video) => {
        if(video.description?.toLocaleLowerCase().includes(watch)){
          return video
        }
      })
      setSearchVideo(handleSearchVideo)
    }
  },[videoPreview, watch])
  
  return(
    <Container>
      <ul className="wrapper">
        {
          searchVideo.length > 0 ? searchVideo?.map((dataVideo, i : number) => {
            return(
              <VideoPreviewComponent 
                key={i}
                dataVideo={dataVideo}
              />
            )
          }) : (
            <div className="default">
              <img src={Monkey} title="Pagina não encontrada"/>
              <h2>404 Video não encontrado!</h2>
              <Link to="/">clique aqui para voltar à pagina inicial</Link>
            </div>
          )
        }
      </ul>
    </Container>
  )
}