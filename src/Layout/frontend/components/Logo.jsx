import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/about'); 
            // console.log("working");
        }, 3000);

    }, []); 

    return (
        <>
            <div className="bg-blue-950 h-screen py-36 w-full relative">
                <div className="h-[250px] w-[250px] my-[15%] md:my-[5%] mx-auto">
                    <img className='h-[200px] w-[200px] mx-auto' src={"logo.png"} alt="logo" />                   
                </div>
            </div>
        </>
    );
}

export default Logo;
