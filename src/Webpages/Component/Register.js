import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import '../Css/Register.css';


const schema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required(),
    mobile:yup.string().required().min(10).max(10),
    password:yup.string().min(4).max(8).required(),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null]),
})

const Register = () => {
            const [login, setLogin] = useState("");

            const {register,handleSubmit,formState: { errors }}=useForm({
                resolver:yupResolver(schema),
            });



            const submitForm=(data)=> {
                console.log(data);
                window.location.href= "/todo";
            }
          
            const userHandler = (e) => {
    
                let login = e.target.value;
                setLogin(login);
                };

  return (
    <>
        
    <div className='FormValid' style={{height:"96vh"}} >
        <div className="title"><h1 className='heading' style={{paddingTop: "60px"}}>2-Doo</h1> </div>
        <div className="inputs" style={{paddingTop:"-20px"}}>
            <form className='myform' onSubmit={handleSubmit(submitForm)}>
                <h3 style={{paddingTop:"10px"}}>Register</h3>
            <input type="text" name='name' style={{marginBottom:"5px"}} placeholder='name' onChange={userHandler} {...register('name')} />{""}
                 {errors.name && <p>Please enter your name.</p>} <br/>
                
            <input type="email" name='email'style={{marginBottom:"5px"}} placeholder='email id' {...register('email')}   />
                {errors.email && <p>Please enter emailid.</p>}<br />

            <input type="string" name='mobile'style={{marginBottom:"5px"}} placeholder='mobile no.' {...register('mobile')}   />
                {errors.mobile && <p>Please enter mobileNo..</p>}<br />    

            <input type="password" name='password' style={{marginBottom:"5px"}} placeholder='password (4-8 chars)' {...register('password')} />
                {errors.password && <p>Password should be of 4-8 characters.</p>}<br />
            <input type="password" name='confirmpassword'style={{marginBottom:"5px"}} placeholder='confirm password'{...register('confirmpassword')}  />
                {errors.confirmpassword && <p>Password Mismatched.</p>} <br /> 
                <br /> 
                <input type="submit" id='submit' style={{marginBottom:"20px"}}/>
                
            </form>
        </div>
    </div> 
    </>
  )
}

export default Register;