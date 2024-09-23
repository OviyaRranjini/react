import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import React from "react";
import Name from "../topics/Name";

const About=()=>{
    const navigate=useNavigate();
    const next=()=>{
        navigate('./Education');
    };
    return(
        <>
         <Name/>
        <div className="flex items-center">
        {/* <FontAwesomeIcon icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/> */}
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
      
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">About</h1>
    <div className="bg-indigo-200 w-2/3 h-2/3  rounded-lg
    flex flex-row items-center ">
       <div className=" w-2/4 h-64 flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl w-5/6"> Hi,I am Oviya</h1>
         <h4 className="w-5/6"> I am studying B.Tech in IT at SIET College, Coimbatore. I am passionate about technology and like learning new things.</h4>
       </div>
       <div className="w-2/4 h-3/4 flex justify-center items-center">
       <img src="\sample\src\assets\Photo.jpg" alt="photo" className="w-2/3 h-52 flex justify-center bg-gray-600 item-center rounded-full "/>
       </div>
    </div>
    </div>
    <FontAwesomeIcon onClick={next} icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
    </div>
    </>
    )
}
export default About;