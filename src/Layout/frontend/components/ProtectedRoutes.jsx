import { Navigate, useNavigate } from "react-router-dom"
import Jobs from "./Jobs"
import AppliedJobs from "../../auth/components/AppliedJobs"

const ProtectedRoutes = ({ children, user }) => {
  return (
    user ? children : [
      {
        path: "/about",
        element: "about page"
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/applied",
        element: <AppliedJobs />
      }
    ]
  )
}

export default ProtectedRoutes