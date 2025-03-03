import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const navDashboard = [
        {
            title: 'Jobs',
            link: '/admin'
        },
        {
            title: 'Users',
            link: '/users'
        },
        {
            title: 'Add Job',
            link: '/upload_image'
        },
        {
            title: 'Applied Users',
            // icon: 'shopping-cart',
            link: '/appliedUsers'
        }
        
    ]
    return (

        <div className="bg-red-400 h-screen w-1/3 lg:w-2/8 px-12 py-4 mx-auto flex flex-wrap">

            <div className="lg:py-6 -mb-10 lg:w-full  lg:text-left text-center">
                <div className="flex flex-col mb-10 lg:items-start items-center">
                    {navDashboard.map((item, index) =>{
                        return (
                            <div key={index} className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3"><Link to={item.link} >{item.title}</Link></h2>
                            </div>
                        )
                    })
                }

                </div>
                

            </div>

        </div>
    )
}

export default SideBar