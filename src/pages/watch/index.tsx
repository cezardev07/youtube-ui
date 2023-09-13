import { 
  useContext,
  useState,
  useEffect
} from "react";

import { Link, useParams } from "react-router-dom";

import { VideoPreviewComponent } from "../../components/video-preview"
import { VideoContext } from "../../context/provider"
import { Container } from "./style"
import { LikeIcon } from "../../icons/like";
import { DisLikeIcon } from "../../icons/dislike";
import { SaveIcon } from "../../icons/save";
import { ShareIcon } from "../../icons/share";
import { EllipsisIcon } from "../../icons/ellipsis";

import ImgProfile from "../.././assets/channel_profile.jpg";

export const Watch = () => {
  const [title, setTitle] = useState<string>("")
  const { videoPreview } = useContext(VideoContext)
  const { video } = useParams()

  useEffect(() => {
    const filter = videoPreview.filter(video_selected => video_selected.url_video === video)
    if(filter.length > 0){
      const description = filter[0].description
      if(description){
        setTitle(description)
      }
    }
  },[video, videoPreview])

  return(
    <Container>
      <div className="wrapper">
        <div className="wrapper-watch">
          <div className="watch-video">
            <div className="video">
              <iframe 
                src={`https://www.youtube.com/embed/${video}`}
                allowFullScreen
              ></iframe>
            </div>
            <div className="description">
              <div className="heading">
                <h3>{title}</h3>
              </div>
              <nav>
                <ul className="ul-channel">
                  <Link
                    to="/youtube-ui/channel" 
                    className="avatar"
                  >
                    <img 
                      src={ImgProfile}
                      alt="" 
                    />
                  </Link>
                  <div className="wrapper-info">
                    <Link
                      to="/youtube-ui/channel"
                      className="name"
                    >
                      <p>
                        01 - CHANNEL
                      </p>
                    </Link>
                    <Link
                      to="/youtube-ui/channel" 
                      className="subs"
                    >
                      <span>
                        1 mi inscritos
                      </span>
                    </Link>
                  </div>
                  <div className="subscribe">
                    <button>Inscrever-se</button>
                  </div>
                </ul>
                <ul className="ul-interactions">
                  <div className="liked-disked">
                    <button className="liked" title='Marcar como "Gostei"'>
                      <LikeIcon/>
                      <span>76 mi</span>
                    </button>
                    <button className="disliked" title='Marcar como "Não Gostei"'>
                      <DisLikeIcon/>
                    </button>
                  </div>
                  <div className="share">
                    <button title="Compartilhar">
                      <ShareIcon/>
                      <span>Compartilhar</span>
                    </button>
                  </div>
                  <div className="save" title="Salvar">
                    <button>
                      <SaveIcon/>
                      <span>Salvar</span>
                    </button>
                  </div>
                  
                  <div className="ellipsis" title="ellipsis">
                    <button>
                      <EllipsisIcon/>
                    </button>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
          <div className="commits"></div>
        </div>
        <div className="recommended">
          {
            videoPreview?.map((dataVideo, i : number) => {
              return(
                <VideoPreviewComponent 
                  key={i}
                  dataVideo={dataVideo}
                />
              )
            })
          }
        </div>
      </div>
    </Container>
  )
}