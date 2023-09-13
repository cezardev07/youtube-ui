import { useState } from "react";

import { 
  Link,
  useNavigate
} from "react-router-dom";

import { Container } from "./style"
import { LogoIcon } from "../../icons/logo";
import { SearchIcon } from "../../icons/search";
import { BarProgress } from "../bar-progress";
import { handleScroll } from "../../hooks/handleScroll";
import { VideoCamIcon } from "../../icons/video_cam";
import { NotificationIcon } from "../../icons/notifications";
import { handleScrollProgress } from "../../hooks/scrollProgress";

import ImgProfile from "../../assets/channel_profile.jpg";

export const Header = () => {
  const [valueBarProgress, setValueBarProgress] = useState<number>()

  const [value, setValue] = useState<string>("")

  const navigate = useNavigate()

  const handleSearchSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    navigate(`/youtube-ui/search_video/${value.toLocaleLowerCase()}`)
    setValue("")
    handleScroll()
  }

  const handleNavegateChannel = () => {
    navigate(`/youtube-ui/channel`)
    handleScroll()
  }
  
  handleScrollProgress(setValueBarProgress)

  return(
    <Container>
      <BarProgress valueProgress={valueBarProgress}/>
      <nav>
        <Link 
          to="/youtube-ui/" 
          className="logo"
          onClick={() => handleScroll()}  
        >
          <LogoIcon/>
        </Link>
        <form onSubmit={handleSearchSubmit}>
          <input
            onChange={({target}) => setValue(target.value)}
            value={value} 
            type="text" 
            placeholder="Pesquisar"
            required
          />
          <button>
            <SearchIcon/>
          </button>
        </form>
        <div className="wrapper-buttons">
          <button 
            title="Criar"
            className="created-video"
          >
            <VideoCamIcon/>
          </button>
          <button 
            title="Notificaçãos"
            className="notification"
          >
            <NotificationIcon/>
          </button>
          <button 
            title="Perfil"
            className="profile"
            onClick={() => handleNavegateChannel()}
          >
            <img 
              src={ImgProfile}
              alt="c" 
            />
          </button>
        </div>
      </nav>
    </Container>
  )
}