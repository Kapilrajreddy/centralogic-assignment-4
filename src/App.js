
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 pb-4">
      <Navbar />
      <div className="max-w-screen-xl mx-6">
        <Banner />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
