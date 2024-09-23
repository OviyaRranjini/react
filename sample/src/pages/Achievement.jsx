import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Achievement=()=>{
    const page=useNavigate();
    const pre=()=>{
        page('/Certificate');
    }
    const next=()=>{
        page('/Work');
    }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Achievements</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-blue-200 rounded-lg ">
            
            <ul className="w-5/6" style={{listStyle:'disk'}}>
                <li style={{marginBottom:'10px'}}>Completed <span className="font-extrabold">150+ C programming</span> exercises on the college portal, demonstrating strong coding proficiency and problemsolving skills</li>
                <li style={{marginBottom:'10px'}}>Completed  <span className="font-extrabold">100+ Java programming </span>exercises on the college portal, showcasing solid understanding of <span className="font-extrabold">object-oriented
                    programming and Java fundamentals.</span></li>
                <li style={{marginBottom:'10px'}}>Accomplished <span className="font-extrabold">August's monthly LeetCode streak </span> and completed <span className="font-extrabold">100 Java coding challenges</span>, highlighting consistent
                problem-solving skills and expertise in Java.</li>
                <li style={{marginBottom:'10px'}}>Completed the <span className="font-extrabold">"Data Analyst: Extending and Applying Core Knowledge" </span>course on LinkedIn, enhancing skills in data
                    analysis techniques and practical applications.</li>
            </ul>
        </div>
        </div>
        <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        </div>
        </>
    )
}
export default Achievement;