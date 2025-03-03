import AppliedJobs from "../Layout/auth/components/AppliedJobs";
import FrontendLayout from "../Layout/frontend/FrontendLayout";
import About from "../Layout/frontend/components/About";
import Contact from "../Layout/frontend/components/Contact";
import Jobs from "../Layout/frontend/components/Jobs";



const Frontend = {

    


    element: <FrontendLayout />,
    children: [
       
        {
            path: "/frontendAbout",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/jobs",
            element: <Jobs/>
        },
        {
            path: "/applied",
            element: <AppliedJobs/>
        }

    ]
}

export default Frontend;