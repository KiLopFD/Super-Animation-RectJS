import React from 'react'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { SignUp } from '../pages/index'


const PrivateRoutes = () => {
  const checkToken = true
  return (
    <>
      {checkToken === true ? (<><Outlet/></>) : (<><SignUp/></>)}
    </>
  )
}

export default memo(PrivateRoutes)