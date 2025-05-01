import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./home";
import Connect from "./connect";
import Education from "./education";
import Skills from "./skill";
import Certificate from "./certificate";
import Project from "./project";
import Navbar from "./navbar";

const Display=()=>{
    return(
        <>
        <Navbar />
        <div id="home"><Home /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Project /></div>
        <div id="certification"><Certificate /></div>
        <div id="contact"><Connect /></div>
        </>
    )
}
const x=ReactDOM.createRoot(document.getElementById("root"));
x.render(<Display />)