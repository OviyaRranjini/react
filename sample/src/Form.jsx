//import {Loader } from "Lucide-react";
import React from "react";
const Form = () =>{
    // const inputChange =(event)=>{
    //     const {name,value}=event.target;
    //     Input({
    //         ...form,
    //         [name]:value
    //     });
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault(); // Prevent form reload
    //     console.log('Form Submitted:', form); // You can handle form submission here
    // };
    return (
        <>
        <div className="h-screen w-screen flex justify-center items-center bg-purple-600">
            <div className="h-4/6 w-[50%] flex justify-center items-center bg-white rounded-md shodow-2xl border-radius-">
            <form className="w-[80%] flex flex-col justify-center items-center gap-4">
                <input type="text"  name="name" id="" placeholder="Name" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  text-black hover:border-purple-500"/>
                <input type="text" name="email" id="" placeholder="E-Mail" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  text-black hover:border-purple-500"/>
                <input type="number"  name="age" id="" placeholder="Age" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  text-black hover:border-purple-500"/>
                <input type="number"  name="phone" id="" placeholder="Phone Number" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  text-black hover:border-purple-500"/>
                <input type="password"  name="pass" id="" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 text-black hover:border-purple-500"/>
                <button type="submit" placeholder="Submit" className="w-full bg-purple-600 text-white p-3"> Submit</button>
            </form>
            </div>
            </div> 
        </>
    );
}
export default Form;