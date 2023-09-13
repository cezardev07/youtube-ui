import { Provider } from "./context/provider";

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import { Home } from "./pages/home";
import { Search } from "./pages/search";
import { Header } from "./components/header";
import { Watch } from "./pages/watch";
import { Links } from "./components/links";
import { Default } from "./pages/404";
import { Channel } from "./pages/channel";
import { Mobile } from "./components/mobile";

import styled from "styled-components";

const Main = styled.main`
  min-height: calc(100vh - 70px);
`

export const App = () => {
  return(
    <Provider>
      <BrowserRouter>
        <Header/>
        <Main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/channel" element={<Channel/>}/>
            <Route path="/watch/:video" element={<Watch/>}/>
            <Route path="/search_video/:watch" element={<Search/>}/>
            <Route path="*" element={<Default/>}/>
          </Routes>
        </Main>
        <Links/>
        <Mobile/>
      </BrowserRouter>
    </Provider>
  )
}