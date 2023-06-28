import React, { Suspense } from 'react'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

import Sider from '../components/Sider'


const DetailCourses = () => {
  return (
    <>
      
      <div className='flex flex-row-reverse relative'>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Sider />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>

    </>
  )
}

export default memo(DetailCourses)