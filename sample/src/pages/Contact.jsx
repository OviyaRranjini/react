import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Name from "../topics/Name";
const Contact=()=>{
    const page=useNavigate();
    const pre=()=>{
        page('/Work');
    }
    return(
        <>
        <Name/>
        <div className="flex items-center">
        <FontAwesomeIcon onClick={pre} icon={faAngleLeft}  className="text-black flex justify-center items-center w-1/12 text-3xl"/>
        <div className="font-serif flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="h-10 flex flex-col justify-star items-center font-extrabold text-3xl">Contacts</h1>
        <div className="w-2/3 h-2/3 flex flex-col justify-center items-center bg-gray-300 rounded-lg ">
        <ul className="w-5/6 list-none space-y-8 font-sans text-2xl">
            <li className="hover:bg-gray-800 hover:text-white rounded-lg w-full h-20 flex items-center pl-4">
            <FontAwesomeIcon icon={faPhone} className="pr-2 hover:text-white"/>
            <a href="tel:+91 9080199884" target="_blank">+91 9080199884</a></li>
            <li className="hover:bg-gray-800 hover:text-white rounded-lg w-full h-20 flex items-center pl-4">
            <FontAwesomeIcon icon={faEnvelope} className="pr-2 hover:text-white"/>
            <a href="mailto:oviyaranjith13@gmail.com?'Hello'" target="_blank">oviyaranjith13@gmail.com</a></li>
            <li className="hover:bg-gray-800 hover:text-white rounded-lg w-full h-20 flex items-center pl-4">
            <FontAwesomeIcon icon={faLocationDot} className="pr-2 hover:text-white"/>
            <a href="https://www.google.com/maps/place/Tirupathur,+Tamil+Nadu/@12.499168,78.5647154,13z/
            data=!3m1!4b1!4m15!1m8!3m7!1s0x3b008a2b23cc2a71:0x8d46b044acc3c5c9!2s
            Tirupattur,+Tamil+Nadu!3b1!8m2!3d10.1104702!4d78.5986161!16s%2Fg%2F12323zzs7!3m5!1s0x3bac540dd5ac6613:
            0x6f3185b3090fa58!8m2!3d12.4950124!4d78.5678407!16zL20vMGNucGt2?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank">
            Tirupathur</a></li>            
        </ul>
        </div>
        </div>
        {/* <FontAwesomeIcon icon={faAngleRight}  className="text-black flex justify-center items-center w-1/12 text-3xl"/> */}
        </div>
        </>
    )

}
export default Contact;