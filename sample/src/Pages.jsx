import React from "react";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Achievement from './pages/Achievement.jsx';
import Certificate from './pages/Certificate.jsx';
import Contact from './pages/Contact.jsx';
import Education from './pages/Education.jsx';
import Project from './pages/project.jsx';
import Skill from './pages/Skills.jsx';
import Works from './pages/Works.jsx';
import About from "./pages/About.jsx";
import Name from "./topics/Name.jsx";
const Pages=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/Achievement" element={<Achievement/>}/>
                <Route path="/Certificate" element={<Certificate/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Education" element={<Education/>}/>
                <Route path="/Project" element={<Project/>}/>
                <Route path="/Skill" element={<Skill/>}/>
                <Route path="/Work" element={<Works/>}/>
                <Route path="/Name" element={<Name/>}/>
            </Routes>
        </Router>
    );

}
export default Pages;