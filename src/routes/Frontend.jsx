import FrontendLayout from "../Layout/frontend/FrontendLayout";
import About from "../Layout/frontend/components/About";
import Contact from "../Layout/frontend/components/Contact";
import Jobs from "../Layout/frontend/components/Jobs";
import UploadPDF from "../Layout/frontend/components/UploadPDF";



const Frontend = {

    


    element: <FrontendLayout />,
    children: [
       
        {
            path: "/frontendAbout",
            element: <About/>
        },
        {
            path: "/uploadResume",
            element: <UploadPDF/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/jobs",
            element: <Jobs/>
        }

    ]
}

export default Frontend;