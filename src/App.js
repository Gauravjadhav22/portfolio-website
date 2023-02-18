
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
