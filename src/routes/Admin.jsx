import React from 'react'
import AdminLayout from '../Layout/admin/AdminLayout'
import UploadFile from '../Layout/admin/components/UploadFile'
import AddJobs from '../Layout/admin/components/AddJobs'

const Admin = {
    element: <AdminLayout/>,
    children: [
        {
            path: "/admin",
            element: <AddJobs/>
        },
        {
            path: "/upload_image",
            element: <UploadFile/>
        },
        
    ]
}

export default Admin