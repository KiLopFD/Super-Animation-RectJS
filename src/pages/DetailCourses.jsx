import React, { Suspense, useEffect, useState } from 'react'
import { memo } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

import Sider from '../components/Sider'
import { Ads } from '../components'


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
            <div className="ads xl:w-[850px] lg:w-[600px] sm:w-[450px] sm:block hidden">
              <Ads/>
            </div>
          </Suspense>
        </div>
      </>) : (<>
        <Navigate to={'/'}/>
      </>)}
    </>
  )
}

export default memo(DetailCourses)