import { useState } from "react";
import { useForm } from "react-hook-form"
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Lottie from "lottie-react";
import signUp from '../../assets/signUp.json'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { RiseLoader } from "react-spinners";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [keyValue, setKeyValue] = useState('')
    const [toggleEye, setToggleEye] = useState(false)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const { createAccount, signInWithPop, userProfileUpdate, setUser, setLoading, loading } = useAuth()

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const onSubmit = (data) => {
        console.log(data)



        setRegisterError('')
        // console.log(data.password.length)
        if (data.password.length < 6) {
            setRegisterError('Password must be at least 6 characters long')
            return
        }

        if (!/(?=.*[A-Z])/.test(data.password)) {
            setRegisterError('Must have an Uppercase letter in the password')
            return
        }
        if (!/(?=.*[a-z])/.test(data.password)) {
            setRegisterError('Must have a Lowercase letter in the password')
            return
        }

        createAccount(data.email, data.password)
            .then((result) => {
                axios.post(`${import.meta.env.VITE_url}/jwt`,{email:result.user.email},{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })

                axios.post(`${import.meta.env.VITE_url}/users`, data)
                    .then(res => console.log(res.data))



                setLoading(false)
                userProfileUpdate(data.name, data.image)
                    .then(() => {
                        setUser({ displayName: data.name, photoURL: data.image })

                    })
                toast.success('You have successfully registered.')
                navigate('/')
                console.log(result.user)

            })
            .catch((error) => {
                setLoading(false)
                console.log(error.message.split('/')[1].split(')')[0])
                toast.error(error.message.split('/')[1].split(')')[0])

            })
    }


    const handleGoogle = () => {
        signInWithPop(googleProvider)
            .then(result => {
                axios.post(`${import.meta.env.VITE_url}/jwt`,{email:result.user.email},{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }
                axios.post(`${import.meta.env.VITE_url}/users`, user)
                    .then(res => console.log(res.data))
                navigate('/')
                setLoading(false)
                console.log(result.user)
            })
            .then(error => {
                setLoading(false)
                console.error(error)
            })
    }

    const handleGithub = () => {
        signInWithPop(githubProvider)
            .then(result => {
                axios.post(`${import.meta.env.VITE_url}/jwt`,{email:result.user.email},{withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
                const user = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }
                axios.post(`${import.meta.env.VITE_url}/users`, user)
                .then(res => console.log(res.data))
                navigate('/')
                setLoading(false)
                console.log(result)
            })
            .catch(error => {
                setLoading(false)
                console.error(error)
            })
    }

    return (
        <div className="grid items-center min-h-[calc(100vh-200px)]">
            <Helmet><title>CafeRain | Register</title></Helmet>
            {loading && <div className="absolute inset-0  h-screen max-w-[1920px] flex justify-center items-center p-5 "><RiseLoader size={40} color="#f39c12" /></div>}
            <section className="p-6   mt-10  ">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 ">

                    {/* <img src="https://i.ibb.co/ZVx3dGx/depositphotos-114341588-stock-illustration-vacation-and-travel.webp" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500 mt-10" /> */}
                    <div className="w-full  xl:col-span-3  mt-10">
                        <Lottie className="size-10/12" animationData={signUp} />
                    </div>
                    <div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2  space-y-2" >


                    <div className="flex justify-center mx-auto">
                            <img className="w-24 h-24 " src="/logo.png" alt="" />
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="self-stretch space-y-3 ">
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text pl-1">Name</span>

                                </label>

                                <input {...register("name")} type="text" placeholder="Enter Your Name" required className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text pl-1">Photo Url</span>
                                </label>
                                <input {...register("image")} type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text pl-1">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border " />
                            </div>
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text pl-1">Password</span>
                                </label>
                                <input {...register("password",)} onChange={e => { setKeyValue(e.target.value) }} type={toggleEye ? 'text' : "password"} placeholder="Password" className=" w-full  rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300 h-14 px-4 border " />
                                {
                                    keyValue && <> {toggleEye ? <VscEyeClosed onClick={() => setToggleEye(false)} className="text-2xl absolute top-12 right-5" /> : <VscEye onClick={() => setToggleEye(true)} className="text-2xl absolute top-12 right-5" />}  </>
                                }
                            </div>
                            {
                                registerError && <p className="text-red-600 mt-3">{registerError}</p>
                            }
                            <button type="submit" className="w-full py-2 font-semibold rounded dark:bg-primary dark:text-gray-50 btn">Sign up</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <p className="px-3 text-sm ">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>

                        <div className="flex justify-center space-x-4 ">
                            <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>

                            <button onClick={handleGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className=" text-center sm:px-6 ">You have an account?
                            <Link to={'/login'} rel="noopener noreferrer" href="#" className="underline ">Sign in</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;