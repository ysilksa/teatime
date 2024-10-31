import './App.css';
import NavBar from "./NavBar"
import "./NavBarStyles.css"
import Profile from './pages/Profile';
import Discover from './pages/Discover';
import AboutUs from './pages/AboutUs';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break 
    case "/profile":
      component = <Profile />
      break
    case "/discover":
      component = <Discover />
      break 
    case "/aboutus":
      component = <AboutUs />
      break
  }

  return (
    <>
    <NavBar />
    {component}
    </>
  )
}

export default App;
