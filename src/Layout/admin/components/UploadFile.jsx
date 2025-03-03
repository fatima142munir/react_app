import axios from 'axios';
import React, { useState } from 'react'

const UploadFile = () => {
    const [fileUpload, setFileUpload] = useState({
        file: null,
        upload_preset: 'home-image',
    })

    const [imagePreView, setImagePreView] = useState('')
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if(file) {
            setFileUpload({
                ...fileUpload,
                file: file
            })
        }
        console.log(file)
    }

    // console.log(import.meta.env.VITE_REACT_APP_CLOUDINARY_API)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(import.meta.env.VITE_REACT_APP_CLOUDINARY_API, fileUpload, {
                headers : {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log("link ajaeyga")
            setImagePreView(response.data.secure_url)
            
            

            
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleFileUpload} type="file" accept='image/png, image/jpeg'/>
            <button type='submit'>Submit</button>
        </form>
        <div>
            <img src={imagePreView} alt="cloudnary image"/>
        </div>
    </>
  )
}

export default UploadFile