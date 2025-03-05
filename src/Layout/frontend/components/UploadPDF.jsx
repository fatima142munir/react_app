import { useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firestoreConfig";
import { toast } from "react-toastify";

const UploadPDF = () => {
  const { jobId } = useParams(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const uploadPDFToCloudinary = async () => {
    if (!file || !name || !email) {
      alert("Please fill all fields and upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "first_Pdf");
    formData.append("resource_type", "raw");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dowv7ykvy/raw/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const uploadedUrl = res.data.secure_url;
    //   console.log("Uploaded PDF URL:", uploadedUrl);

      await saveApplicationToFirebase(jobId, name, email, uploadedUrl);
      toast.success("Application submitted successfully!", { position: "top-center" });

      setName("");
      setEmail("");
      setFile(null);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  const saveApplicationToFirebase = async (jobId, name, email, pdfUrl) => {
    if (!jobId) {
      console.error("Error: jobId is undefined.");
    //   alert("Error: jobId is missing.");
      return;
    }

    try {
      const applicationsCollection = collection(db, "jobApplications");
      await addDoc(applicationsCollection, {
        jobId,
        name,
        email,
        cvUrl: pdfUrl,
        appliedAt: new Date(),
      });

      console.log("Application submitted successfully!");
      toast.success("Application submitted successfully!", { position: "top-center" });
    } catch (error) {
      console.error("Error saving application:", error);
      toast.error("Error saving application:", { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Upload Your CV</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2 p-2 border rounded"
      />
      <button
        onClick={uploadPDFToCloudinary}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Application
      </button>
    </div>
  );
};

export default UploadPDF;
