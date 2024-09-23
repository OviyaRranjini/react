import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Project=()=>{
   const page=useNavigate();
   const pre=()=>{
      page('/Education');
   }
   const next=()=>{
      page('/Skill');
   }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Projects</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-red-300 rounded-lg ">
        <ul className="w-5/6 list-none space-y-2">
        <li> 
            <a href="https://github.com/OviyaRranjini/ToDo-project-using-HTML-CSS-JS" target='_blank'>
            <h3 className="font-bold">ToDo List</h3>
         <p>-A simple task management application built using HTML for structure, CSS for styling, and JavaScript for
interactive task creation, editing, and deletion.</p></a></li>
         <li>
            <a href="https://github.com/OviyaRranjini/TicTac-game-code-using-HTML-CSS-JS" target="_blank">
            <h1 className="font-bold hoverText:'Click me'">Tic-Tac-Toe</h1>
         <p>- Tic-Tac-Toe game built using HTML for the game board, CSS for visual design, and JavaScript for game
         logic, player moves, and win detection.</p></a>
         </li>
         <li>
            <a href="https://github.com/OviyaRranjini/Clock-making-using-HTML-CSS-JS" taget="_blank">
            <h1 className="font-bold">Stop-Watch</h1>
         <p>- A digital stopwatch built using HTML for the display, CSS for styling, and JavaScript for controlling start,
         stop, reset, and lap timing functionality</p></a>
         </li>
         <li>
            <a href="https://mail.google.com/mail/u/0/#search/DocuMatch/QgrcJHsbdwwPpbDdFPhtNDkWpDtLgxvPtjb?projector=1&messagePartId=0.1" target="_blank">
            <h1 className="font-bold">DocuMatch+</h1>
         <p>-DocuMatch+ is an innovative project concept for a file search system that uses image recognition to
         locate and match documents efficiently.</p></a>
         </li>
        </ul>
        </div>
        </div>
        <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        </div>
        </>
    )

}
export default Project;