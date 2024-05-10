import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillEyeFill } from "react-icons/bs";
import { RiEyeCloseFill } from "react-icons/ri";

const Login = () => {


    let [eye, setEye]= useState(false)
    const {signIn}= useContext(AuthContex)
    const {googleLOgin}= useContext(AuthContex)
    const {facebookLOgin}= useContext(AuthContex)


    const location = useLocation()
    const Navigate = useNavigate()

    let handleLogin = (e)=>{
        e.preventDefault();
        let form = new FormData(e.currentTarget)
        let email = form.get('email')
        let password = form.get('password')
        signIn(email, password)
        .then((result)=>{
          toast("Login Successfull")
          setTimeout(()=>{
                
              Navigate(location?.state ? location.state : '/')
           
        },900)
        })
        .catch(error=>{
            toast("invalid email or password")
        })
    }

    const handleGoogle = ()=>{
        googleLOgin()
        setTimeout(()=>{
            Navigate('/')
             
           },7000)
            
        
     
       
    }
    const handleFacebook = ()=>{
        facebookLOgin()
            Navigate(location?.state ? location.state : '/')
    }
    return (
        <>
            <div className="container mx-auto">
               <div className="lg:w-1/2 mx-auto">
               <h2 className='text-3xl font-worksans font-bold'>Log in</h2>
               <p className="mb-4 font-playfair">Continue to <span className="font-worksans font-semibold text-red-500">Haven Hub</span></p>
                    <form onSubmit={handleLogin}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required  name="email"/>
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type={eye?'text': 'password'} placeholder="password" className="input input-bordered" required name="password"/>
                            <div onClick={()=>setEye(!eye)}>{
                                    eye? <BsFillEyeFill/>:<RiEyeCloseFill/>
                                }
                               
                                
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <div className="text-center mt-4">
                                <p>Do not have an account? <Link to="/register" className="font-bold">Register</Link></p>
                                <ToastContainer></ToastContainer>
                            </div>
                           
                        </div>
                    </form>

                    <div className="flex flex-col text-center mt-6 gap-y-3">
                            <p className="font-worksans font-bold">Continue with</p>
                               <button onClick={handleGoogle} className="px-4 py-2 font-bold font-worksans rounded-full bg-red-700 text-white">Login with Google</button>
                               <button onClick={handleFacebook} className="px-4 py-2 font-bold font-worksans rounded-full bg-blue-700 text-white">Login with Facebook</button>
                            </div>
               </div>
            </div>  
        </>
    );
};

export default Login;