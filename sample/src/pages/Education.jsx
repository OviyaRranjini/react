import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Education=()=>{
    const page=useNavigate();
    const next=()=>{
        page('/Project');
    }
    const pre=()=>{
        page('/');
    }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Education</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-amber-200 rounded-lg ">
        <ul className="w-5/6 list-decimal space-y-5">
        <li>Sri Shakthi Intitute of Engineering and Technology College
            <p>Coimbatore|B.tech IT|CGP:8.3</p></li>
            <li>SRM Muthamizhl Higher Secondary School
                <p>Salem|Class-12th|Percentage:83.83%</p>
            </li>
            <li>SRM Muthamizhl Higher Secondary School
                <p>Salem|Class-10th|Percentage:94.4%</p>
            </li>
        </ul>
        </div>
        </div>
        <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        </div>
        </>
    )

}
export default Education;