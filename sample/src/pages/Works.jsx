import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Works=()=>{
    const page=useNavigate();
    const pre=()=>{
        page('/Achievement');
    }
    const next=()=>{
        page('/Contact');
    }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Works</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-rose-300 rounded-lg ">
        <ul className="w-5/6 list-disc space-y-5">
       <li className="pl-3 flex flex-col justify-center hover:bg-rose-700 hover:text-white h-10 w-full rounded-lg"><a href="https://leetcode.com/u/_oviya_/" hover>
        <span className="font-bold">Leetcode ID:</span> _oviya_
         </a> </li>
        <li className="pl-3 flex flex-col justify-center hover:bg-rose-700 hover:text-white h-10 w-full rounded-lg"><a href="https://www.linkedin.com/in/oviya-r-757367277/">
        <span className="font-bold">  LinkedIn URL:</span>oviya-r-757367277
            </a> </li>
 <li className="pl-3 flex flex-col justify-center hover:bg-rose-700 hover:text-white h-10 w-full rounded-lg"> <a href="https://www.geeksforgeeks.org/user/oviyaran80eb/">
 <span className="font-bold">Greek for Greeks ID:</span> oviyaran80eb
</a></li>
<li className="pl-3 flex flex-col justify-center hover:bg-rose-700 hover:text-white h-10 w-full rounded-lg"><a href="https://unstop.com/u/Oviyaranjini">
<span className="font-bold">unstop ID:</span>@Oviyaranjini
</a></li>
<li className="pl-3 flex flex-col justify-center hover:bg-rose-700 hover:text-white h-10 w-full rounded-lg"><a href="https://github.com/OviyaRranjini">
<span className="font-bold">GitHub ID:</span>OviyaRranjini
</a></li>
        </ul>
        </div>
        </div>
        <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        </div>
        </>
    )

}
export default Works;