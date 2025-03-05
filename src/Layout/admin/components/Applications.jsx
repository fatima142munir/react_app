import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/firestoreConfig";

const Applications = () => {
  // create state to store job applications data
  const [applications, setApplications] = useState([]);

  // use useEffect hook to fetch applications when component run
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // fetch job applications from firestore
        const applicationsSnapshot = await getDocs(collection(db, "jobApplications"));

        // map the fetched documents into an array
        const applicationsList = applicationsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // update the state with the fetched applications
        setApplications(applicationsList);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-biegeBackground p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Job Applications
        </h2>

        {/* Display message if no applications are found */}
        {applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          // display applications
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Job ID</th>
                <th className="p-3 border">CV</th>
              </tr>
            </thead>
            <tbody>
              {/* display each application in a table row */}
              {applications.map((app) => (
                <tr key={app.id} className="text-center border">
                  <td className="p-3 border">{app.name || "N/A"}</td>
                  <td className="p-3 border">{app.email || "No Email"}</td>
                  <td className="p-3 border">{app.jobId}</td>
                  <td className="p-3 border">
                    <a
                      href={app.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View CV
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Applications;
