import { Link } from 'react-router-dom';
import errorAI from '../assets/404.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div>
           
            <section className="flex items-center h-full p-16  ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                        <div className='h-1/2 w-full'>
                <Lottie animationData={errorAI} ></Lottie> </div>
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl mb-6">Sorry, we could not find this page.</p>
                        <Link to={'/'} className="px-8 py-3 my-4 font-semibold rounded bg-primary dark:text-gray-50">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;