
// ------------router ------------
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import NavBar from './NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
};

export default App;
