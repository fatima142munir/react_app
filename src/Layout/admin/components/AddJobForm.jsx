import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestoreConfig";

const AddJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirment, setRequirment] = useState("");
  const [salary, setSalary] = useState("");
  const [hours, setHours] = useState("");

  const postJob = async () => {
    if (!jobTitle || !jobDescription || !requirment || !salary) {
      alert("Please Fill out necessary fields.");
      return;
    }

    try {
      const jobRef = await addDoc(collection(db, "jobs"), {
        title: jobTitle,
        jobDescription: jobDescription,
        requirment: requirment,
        salary: salary,
        hours: hours,
        postedAt: new Date(),
      });

      console.log("Job posted successfully! Job ID:", jobRef.id);
      alert("Job posted successfully!");
      setJobTitle("");
      setJobDescription("");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-biegeBackground p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Post a Job
        </h2>

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Job Requirment"
          value={requirment}
          onChange={(e) => setRequirment(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={postJob}
          className="w-full bg-buttonPrimary text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Post Job
        </button>
      </div>
    </div>
  );
};

export default AddJobForm;
