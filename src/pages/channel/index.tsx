import { 
  useContext
} from "react"

import { Container } from "./style"
import { VideoContext } from "../../context/provider"
import { VideoPreviewComponent } from "../../components/video-preview"

import ImgProfile from "../.././assets/channel_profile.jpg";

export const Channel = () => {
  const { videoPreview } = useContext(VideoContext)

  return(
    <Container>
      <div className="banner">
        <img 
          src="https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg" 
          alt="" 
          title="Banner"
        />
      </div>
      <div className="heading-channel">
        <div className="avatar">
          <img 
            src={ImgProfile}
            alt="Avatar"
            title="Avatar Channel" 
          />
        </div>
        <div className="about">
          <h3>01 - CHANNEL</h3>
          <div className="bio">
            <strong>@01channelofficial</strong>
            <span>1 mi de inscritos</span>
          </div>
          <p>website created for study source 📖</p>
        </div>
        <div className="subscribe">
          <button>Inscrever-se</button>
        </div>
      </div>
      <nav className="heading-content">
        <ul>
          <a href="#">VÍDEOS</a>
        </ul>
      </nav>
      <div className="wrapper">
        <div className="content">
          <div className="wrapper-video">
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
      </div>
    </Container>
  )
}