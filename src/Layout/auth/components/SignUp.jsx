import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase/firestoreConfig';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userName: '',
        lastName: ''

    })

    const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSignUp = async () => {
        // console.log(formData)
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            const user = auth.currentUser;
            console.log(user, "user register successfully")
            toast.success("User Register Successfully", {
                position: "top-center",

            })
            if (user) {
                await setDoc(doc(db, "users_data", user.uid), {
                    userName: formData.userName,
                    lastName: formData.lastName,
                    email: formData.email,
                })
            }
        } catch (error) {
            toast.error("User Register Failed", { position: "top-center" })
            console.log(error, "error agaya h")


        }


    }
    let navigate = useNavigate();
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                            </div>
                            <div className="p-2 w-full">
                                <div className="">
                                    <label htmlFor="userName" className="leading-7 text-sm text-gray-600">User Name</label>
                                    <input type="userName" id="userName" onChange={(e) => { handleChange(e) }} name="userName" value={formData.userName} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="">
                                    <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Last Name</label>
                                    <input type="lastName" id="lastName" onChange={(e) => { handleChange(e) }} name="lastName" value={formData.lastName} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" onChange={(e) => { handleChange(e) }} name="email" value={formData.email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                    <input type="text" id="password" name="password" onChange={(e) => { handleChange(e) }} value={formData.password} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-center'>
                                <div className="p-2">
                                    <button onClick={() => handleSignUp()} className="mx-auto text-white bg-indigo-500 border-0 py-1 sm:py-2 px-2 sm:px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-lg">Sign Up</button>
                                </div>
                                <div className="text-center pt-5">
                                    <p>Registered..! <Link className='text-blue-600' to="/auth">Sign In</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp