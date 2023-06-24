import React from 'react'
import { motion as m } from 'framer-motion'
import { triggerShow } from '../services/motion'


function Courses() {
  return (
    <>
      <div className="Courses">
        <m.div className='max-w-md bg-blue-700 mb-10'>
          <div className="inner-wrap flex justify-end">
            <p className="inner-title text-5xl font-sans p-4">Khóa Học</p>
          </div>
        </m.div>
        <div className="wrap-content h-96 container mx-auto bg-blue-700"

        >
          Courses
        </div>
      </div>

    </>
  )
}

export default Courses