import React from 'react'
import Jobs from '../../frontend/components/Jobs'

const AddJobs = () => {
  return (
    <>
      <div className='container mx-auto flex justify-center'>
        <button>Add job</button>
        <Jobs />
      </div>

    </>
  )
}

export default AddJobs