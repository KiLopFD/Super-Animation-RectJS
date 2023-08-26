import React, { Suspense, useEffect, useState } from 'react'
import { memo } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

import Sider from '../components/Sider'


const DetailCourses = () => {
  const location = useLocation();

  return (
    <>
      {location.state!==null && location.state.lesson_done === 'success' ? (<>

        <div className='flex flex-row-reverse relative'>
          <Suspense fallback={<div>Loading...</div>}>
            <Sider />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="ads lg:w-[500px] sm:w-[300px] sm:block hidden"></div>
          </Suspense>
        </div>
      </>) : (<>
        <Navigate to={'/'}/>
      </>)}
    </>
  )
}

export default memo(DetailCourses)