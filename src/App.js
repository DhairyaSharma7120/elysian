import './App.css';
import {Switch,Route,useLocation} from "react-router-dom";
import Homepage  from './components/hompage/homepage';
import Navbar from './components/navbar/navbar';
import styled from 'styled-components'
function App() {
  const location = useLocation()
  window.addEventListener("scroll",()=>{
    var navbar = document.querySelector("nav");
    var navlink = document.getElementsByClassName("navLink")
    console.log(navlink,"this is navlink")
    navbar.classList.toggle("sticky",window.scrollY > 0);
    for(let i=0;i<navlink.length;i++){
      window.scrollY > 0 ? navlink[i].style.color = "white":navlink[i].style.color = "black"
    }
  })
  
  
  return (
    <div className="App">
      <NavbarContainer>
        <Navbar active={location.pathname}/>
      </NavbarContainer>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;

const NavbarContainer = styled.header`
  width: 100%;
  padding: 0px;
  margin: 0px;
  display:grid;
  place-content: center;
  position: fixed;
`;  