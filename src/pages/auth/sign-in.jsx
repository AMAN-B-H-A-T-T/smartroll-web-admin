import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useFormAction } from "react-router-dom";
import loginILLU from '../../../public/img/login.png';
import loginSvg from "../../../public/img/loginillu.svg"
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {base_url} from "@/base_url";
import { useSelector , useDispatch } from "react-redux";
import { set_Token , reset_token } from "@/action";
import { useNavigate } from "react-router-dom";


export function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()  
  
  const { register, handleSubmit} = useForm();


  const onSubmit = (data) =>{
    try{
      const header = {
          'Content-Type':"application/json",
          'ngrok-skip-browser-warning':true        
      }
      const body = {
        email:data.user_email,
        password:data.user_password
      }
      axios.post(`${base_url}/auth/api/login/`,body,{headers:header})
      .then((response)=>{
        const token_data = {
          "accessToken" : response.data.access,
          "refreshToken": response.data.refresh
        }
        dispatch(set_Token(token_data))
        localStorage.setItem('accessToken',response.data.access)
        localStorage.setItem('refreshToken',response.data.refresh)
        navigate("/")
        
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    catch(error){
      console.log(error)
    }
  }
  

  return (
    <>
    <div className="h-screen bg-center bg-no-repeat sm:p-10 p-5" style={{background:'black'}}>
    <section className="w-full h-full flex justify-center items-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100" style={{backgroundImage:'url(/img/background2.jpg)'}}>
    {/* <div className="sm:w-full h-full lg:block hidden" style={{maxHeight:'100vh',overflow:'hidden',backgroundImage:'url(/img/background2.jpg)'}}>      
    </div> */}
      <div className="text-white sm:w-full">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small"  className="font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register('user_email')}
              labelProps={{
                className: "before:content-none after:content-none",
              
              }}
            />
            <Typography variant="small" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register("user_password")}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" style={{"backgroundColor":"	#ffa31a",color:"#000000"}} fullWidth>
            Sign In
          </Button>          
        </form>
      </div>
    </section>    
    </div>
    </>
  );
}

export default SignIn;
