import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import  Bgchanger  from "./components/Bgchanger";
import Profile from "./components/Profile";
import Custom from "./components/Custom";
import GithubCard from "./components/GithubCard";
import Otp from "./components/Otp";
import Birthday from "./components/Birthday";
import { Button } from './components/ui/button'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path="/bgchanger" element={<Bgchanger/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/custom" element={<Custom/>}/>
          <Route path="/githubcard" element={<GithubCard/>}/>
          <Route path="/otp" element={<Otp/>}/>
          {/* <Route path="/birthday" element={<Birthday/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return(
    <div>
      <Button onClick={function(){navigate("/bgchanger")}}>
        Bg color changer
      </Button>
      <Button onClick={function(){navigate("/profile")}}>
        profile
      </Button>
      <Button onClick={function(){navigate("/custom")}}>
      Custom 
      </Button>
      <Button onClick={function(){navigate("/githubcard")}}>
        GithubCard
      </Button>
      <Button onClick={function(){navigate("/otp")}}>
      Otp
      </Button>
      {/* <Button onClick={function(){navigate("/birthday")}}>
        Happy Birthday
      </Button> */}
    </div>
  )

}

export default App
