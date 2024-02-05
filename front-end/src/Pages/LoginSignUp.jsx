import React, { useState } from "react";
import './Css/LoginSignup.css'

const LoginSignUp =()=>{

    const  [state,setState]=useState("Login");
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async()=>{
        console.log("Login function executed",formData);
        let responseData;
        await fetch('http://localhost:4001/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',

            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }

    }
    const signup = async()=>{
        console.log("Sign Up function executed",formData);
        let responseData;
        await fetch('http://localhost:4001/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',

            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }


    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="sign up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your name" />:<></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email id" />
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />

                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="sign up"? <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:
                <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("sign up")}}>Click Here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>I agree all terms and conditions</p>
                </div>
            </div>

        </div>
    )
}
export default LoginSignUp;