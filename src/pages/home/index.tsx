import { useContext } from "react";
import { VideoContext } from "../../context/provider";
import { Container } from "./style";
import { VideoPreviewComponent } from "../../components/video-preview";

export const Home = () => {
  const { videoPreview } = useContext(VideoContext)

  return(
    <Container>
      <div className="wrapper">
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
    </Container>
  )
}