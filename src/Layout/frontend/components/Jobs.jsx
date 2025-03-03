import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firestoreConfig'
import { collection, getDocs } from 'firebase/firestore'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const getjob = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "jobs"))
      console.log(querySnapshot.docs.map(doc => doc.data()))
      const data = querySnapshot.docs.map((doc) => {
        return (
          {
            id: doc.id,
            ...doc.data()
          }
        )
      })
      setJobs(data)

    } catch (error) {
      console.log("error")

    }
  }

  useEffect(() => {
    getjob()
  }, [])
  return (
    <>

      <div className='container mx-auto flex justify-center' >

        {
          jobs.map((job) => {
            return (
              <div key={job.id} className='bg-red-500 m-4'>
                <h1>{job.title}</h1>
                <h2>{job.jobDescription}</h2>
                <h3>{job.Salary}</h3>
                <h3>{job.hours}</h3>
                <h3>{job.requirment}</h3>
              </div>
            )
          })
        }

      </div>

    </>
  )
}

export default Jobs