import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import 'swiper/css'
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background: darkMode? '#02061c': '',
      color: darkMode? 'white': ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      
      <Portfolio/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
