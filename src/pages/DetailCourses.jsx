import React, { Suspense } from 'react'
import { memo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Sider from '../components/Sider'


const DetailCourses = () => {
  const location = useLocation();
  return (
    <>

      
      {location.pathname.includes('lesson') ? (<>
        
        <div className='flex flex-row-reverse relative'>
          <Suspense fallback={<div>Loading...</div>}>
            <Sider method={'lesson'} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        </>) : (<>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>)}



    </>
  )
}

export default memo(DetailCourses)