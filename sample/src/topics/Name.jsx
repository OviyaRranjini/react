import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';
import React,{useState} from 'react';

// const Dropdown=()=>{
//     const [isOpen, SetIsOpen] = useState(false);
//     const toggeleDropdown = () => {
//         SetIsOpen(!isOpen);
//     };
// }
const Name=()=>{
    const page=useNavigate();
    const [Open,setOpen] = useState(false);
    const Drop=()=>{
        setOpen(!Open);
    }
    const handel=(e)=>{
        const select=e.target.value;
        if(select){
            page(select);
        }
    }
    return (
        <>
        <div className="pt-5 flex justify-center border-r-8">
        <div className="bg-blue-600 text-white w-5/6 h-10 pl-10 flex justify-start items-center rounded-lg">
           <img src="sample\src\assets\Photo.jpg" alt="photo" className="w-8 h-8  rounded-full"/>
           <p className="pl-2 bg-blue-600  text-white w-5/6 h-10 flex items-center"> Oviya R [B.tech IT-3rd Year]
           
           </p> 
           <FontAwesomeIcon icon={faCaretDown} onClick={Drop}
        //    onClick={toggeleDropdown} 
           className='bg-blue-600 w-10 h-8 hover:w-8 hover:h-6'/>
           {Open&&(<select onChange={handel} className='bg-blue-300 text-black'>
                <option value="">Pages</option>
                <option value="/">About</option>
                <option value="/Education">Education</option>
                <option value="/project">Project</option>
                <option value="/Skill">Skill</option>
                <option value="/Certificate">Certificate</option>
                <option value="/Achievement">Achievement</option>
                <option value="/Work">Work</option>
                <option value="/Contact">Contact</option>
            </select>)
}
           
        </div>
        </div>
        </>
    )
}
export default Name;