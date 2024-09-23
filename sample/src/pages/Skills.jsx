import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Skill=()=>{
    const page=useNavigate();
    const pre=()=>{
        page('/Project');
    }
    const next=()=>{
        page('/Certificate');
    }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Skills</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-fuchsia-300 rounded-lg space-y-10">
        <div className="w-11/12 h-30 flex flex-col  justify-center space-y-2">
        <h4 className="font-extrabold">Soft Skills</h4>
        <ul className=" w-full list-disc flex justify-center items-center">
            <li className="w-2/3 flex justify-center">Generative AI</li>
            <li className="w-2/3 flex justify-center">Problem Solving</li>
            <li className="w-2/3 flex justify-center">Team Work</li>
            </ul>
        </div>
        <div className="w-11/12 h-11/12 flex flex-col justify-normal space-y-2">
            <h4 className="font-extrabold space-y-5">Technical</h4> 
            <ul className=" w-full list-disc flex justify-center items-center">
            <li className="w-2/3 flex justify-center">Java</li>
            <li className="w-2/3 flex justify-center">HTML</li>
            <li className="w-2/3 flex justify-center">MongoDB</li>
            </ul>
            <ul className=" w-full list-disc flex justify-center items-center">
            <li className="w-2/3 flex justify-center">C</li>
            <li className="w-2/3 flex justify-center">CSS</li>
            <li className="w-2/3 flex justify-center">SQL</li>
            </ul>
            <ul className=" w-full list-disc flex justify-center items-center">
            <li className="w-2/3 flex justify-center">Python(Basic)</li>
            <li className="w-2/3 flex justify-center">JavaScript</li>
            <li className="w-2/3 flex justify-center">OOPS & Data Analytics </li>
            </ul>
            </div>
        </div>
        </div>
        <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        </div>
        </>
    )

}
export default Skill;