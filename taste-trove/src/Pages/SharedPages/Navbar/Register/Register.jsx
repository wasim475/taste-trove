
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContex } from '../../../provider/AuthProviderr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import { BsFillEyeFill } from "react-icons/bs";
import { RiEyeCloseFill } from "react-icons/ri";
import { AuthContex } from '../../../../AuthProvider/AuthProvider';

const Register = () => {
    let [eye, setEye]= useState(false)

    const {createUser, updateUserProfile}= useContext(AuthContex)
    const Navigate = useNavigate()



    let handleRegister = (e)=>{
        e.preventDefault();
        let form = new FormData(e.currentTarget)
        let name = form.get('name')
        let photoUrl = form.get('photoUrl')
        let email = form.get('email')
        let password = form.get('password')
        console.log(photoUrl);
        // createUser
        
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {email, password,fullName, photoUrl } = data;
        createUser(email,password)
        .then(result=>{
            updateUserProfile(fullName, photoUrl, email)
            .then(()=>{
                if(result.user){
                    toast("Create account successfully!");
                    setTimeout(()=>{
                        
                        Navigate(location?.state ? location.state : '/')
                    },900)
                }
            })
          
          
        }).catch(error=>{
            toast("An error occur.")
        })
      }

  return (
    <>
        <div className='container mx-auto'>
            <div>
                <div className="lg:w-1/2 mx-auto">
                <h2 className='text-3xl font-worksans font-bold'>Create a Haven Hub account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Full Name" className="input input-bordered"   name="name" 
                                {...register("fullName", { required: true })}
                            />
                               {errors.fullName && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="" placeholder="Photo url" className="input input-bordered"   name="photoUrl"
                                 {...register("photoUrl", { required: true })}
                            />
                             {errors.photoUrl && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email address" className="input input-bordered"   name="email"
                                 {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={eye?'text': 'password'} placeholder="Password" className="input input-bordered"  name="password"
                                 {...register("password", { required: true })}
                            />
                             {errors.email && <span className='text-red-500'>This field is required</span>}
                             <div onClick={()=>setEye(!eye)}>{
                                    eye ? <BsFillEyeFill/>:<RiEyeCloseFill/>
                                }
                               
                                
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <div className="text-center mt-4">
                                <p>Already have an account? <Link to="/login" className="font-bold">Login</Link></p>
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                    </form>
               </div>
            </div>

        </div>
    </>
  )
}

export default Register