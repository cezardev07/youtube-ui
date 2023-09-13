import { Container } from "./style"

import Monkey from "../../assets/monkey.png";
import { Link } from "react-router-dom";

export const Default = () => {
  return(
    <Container>
      <div className="wrapper">
        <img src={Monkey} title="Pagina não encontrada"/>
        <h2>404 Pagina não encontrada</h2>
        <Link to="/youtube-ui/">clique aqui para voltar à pagina inicial</Link>
      </div>
    </Container>
  )
}