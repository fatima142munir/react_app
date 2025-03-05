import React from 'react'
import AdminLayout from '../Layout/admin/AdminLayout'
import AddJobForm from '../Layout/admin/components/AddJobForm'
import Applications from '../Layout/admin/components/Applications'
import Jobs from '../Layout/frontend/components/Jobs'

const Admin = {
    element: <AdminLayout/>,
    children: [
        {
            path: "/admin",
            element: <Jobs/>
        },
        {
            path: "/jobApplications",
            element: <Applications/>
        },
        {
            path: "/addJobForm",
            element: <AddJobForm/>
        }
        
    ]
}

export default Admin