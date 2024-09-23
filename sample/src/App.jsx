 import React, {userState} from 'react';
import Form from './Form.jsx'
const App = () =>{
    // const [from,setData]=userState({
    //     name:"",email:"",age:"",phoneNumber:"",password:""
    // });
    // const input = (newData)=>{
    //     setData(newData);
    // };
    return (
        <div>
            <h3 className="bg-purple-600 text-white w-[100%] h-3/6 p-6">
                Hello ......<br />
                {/* I am {from.name}<br/>
                I am {from.age} year old<br/>
                My email is {from.email}<br />
                My phone is {from.phone}<br /> */}
                Thank you bye......
            </h3>
            <Form />
        </div>
    )
}
export default App;
