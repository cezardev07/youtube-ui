import { 
  useContext
} from "react";

import { Container } from "./style";

import { Link } from "react-router-dom";
import { VideoContext } from "../../context/provider";
import { handleScroll } from "../../hooks/handleScroll";

interface TypeVideoPreview {
  thumbnail?: string;
  description?: string;
  channel: string;
  date: string;
  avatar?: string;
  url_video: string;
}

export const VideoPreviewComponent = ({ dataVideo } : { dataVideo : TypeVideoPreview }) => {
  const { videoPreview } = useContext(VideoContext)

  const handleDirectionVideo = () => {
    videoPreview.sort(() => Math.random() - 0.5)
    handleScroll()
  }
  
  return(
    <Container 
      onClick={() => handleDirectionVideo()}
      className="video-preview"
    >
      <Link
        to={`/watch/${dataVideo.url_video}`}
        className="thumbnail">
        <img 
          src={dataVideo.thumbnail} 
          alt="thumbnail" 
          title={dataVideo.description}
          loading="lazy"
        />
      </Link>
      <div className="content">
        <Link
          to="/channel"
          className="channel"
        >
          <img 
            src={dataVideo.avatar} 
            alt={dataVideo.channel}
            title={dataVideo.channel}
          />
        </Link>
        <div className="context">
          <Link 
            to={`/watch/${dataVideo.url_video}`}
            className="description"
            >
            <p 
              title={dataVideo.description}
            >
              {dataVideo.description}
            </p>
          </Link>
          <Link 
            to="/channel"
            className="name-channel"
            title={dataVideo.channel}
          >
            {dataVideo.channel}
          </Link>
          <Link 
            to={`/watch/${dataVideo.url_video}`}
            className="date"
            title={dataVideo.date}
          >
            12 mi view • {dataVideo.date}
          </Link>
        </div>
      </div>
    </Container>
  )
}