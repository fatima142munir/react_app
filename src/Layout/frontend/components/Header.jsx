import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="bg-blue-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        
                        <img className='h-[50px] w-[50px]' src={"logo.png"} alt="logo" />
                        {/* <span className="ml-3 text-xl">Jobie</span> */}
                    </a>
                    <nav className="md:ml-auto flex flex-wrap text-white items-center text-base justify-center">
                        <Link to={"/jobs"} className="mr-5 hover:text-gray-900">Jobs</Link>
                        <Link to={"/frontendAbout"} className="mr-5 hover:text-gray-900">About</Link>
                        <Link to={"/applied"} className="mr-5 hover:text-gray-900">Applied Jobs</Link>
                        <Link to={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 m-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={"/auth"}>Log Out</Link>
                    </button>
                    
                </div>
            </header>
        </>
    )
}

export default Header