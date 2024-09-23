import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Certificate=()=>{
    const page=useNavigate();
    const pre=()=>{
        page('/Skill');
    }
    const next=()=>{
        page('/Achievement');
    }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon  onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Certificate</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-green-200 rounded-lg ">
        <ul className="w-5/6 list-disc space-y-2 font-roboto">
            <li>"Career Essentials in Software Development by Microsoft and LinkedIn"</li>
            <li>"MongoDB Developer's Toolkit: CRUD Mastery with Java"</li>
            <li> “AI Strategy Foundations for Data Scientists and Team Leaders” by Matthew Blasa</li>
            <li> “What Is Generative AI?”</li>
            <li> “Programming Foundations: Beyond the Fundamentals” by Sasha Vodnik!</li>
            <li> “Programming Foundations: Fundamentals” by Annyce Davis!</li>
            <li> “Introduction to Career Skills in Software Development” by Annyce Davis</li>            
        </ul>
        </div>
        </div>
        <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        </div>
        </>
    )

}
export default Certificate;