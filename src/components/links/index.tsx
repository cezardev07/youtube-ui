import { GithubIcons } from "../../icons/github"
import { Linkedin } from "../../icons/linkedin"
import { Container } from "./style"

export const Links = () => {
  return(
    <Container>
      <a 
        href="https://github.com/cezardev07/youtube-ui" 
        className="github" 
        target="_blank" 
        rel="noopener noreferrer"
        title="GitHub • Código Fonte"
      >
        <GithubIcons/>
      </a>
      <a 
        href="https://www.linkedin.com/in/cezar-pereira-m-283381243/" 
        className="linkedin" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <Linkedin/>
      </a>
    </Container>
  )
}