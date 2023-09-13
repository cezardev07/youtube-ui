import { Container } from "./style"
import { HomeIcon } from "../../icons/home"
import { Linkedin } from "../../icons/linkedin"
import { GithubIcons } from "../../icons/github"

import { useNavigate } from "react-router-dom";
import { handleScroll } from "../../hooks/handleScroll";

export const Mobile = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/youtube-ui/")
    handleScroll()
  }

  return(
    <Container>
      <ul>
        <button 
          onClick={handleNavigate}
        >
          <HomeIcon/>
        </button>
        <a 
          href="https://www.linkedin.com/in/cezar-pereira-m-283381243/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin"
          title="Linkedin"
        >
          <Linkedin/>
        </a>
        <a 
          href="https://github.com/cezardev07/youtube-ui" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github"
          title="GitHub • Código Fonte"
        >
          <GithubIcons/>
        </a>
      </ul>
    </Container>
  )
}