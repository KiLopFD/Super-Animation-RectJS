import React, { useEffect, useState } from 'react'
import { memo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { SignUp } from '../pages/index'
import { useCookies } from 'react-cookie';
import { postPrivatePages } from '../services/api/utils/postPrivatePages';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthen } from '../services/container/slices/authenUser';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = () => {
  const [loading, setLoading] = useState(false);
  const [userCookie, setUserCookie] = useCookies(["token"])
  const location = useLocation()
  const authen = useSelector((state) => {
    return state.checkAuthen.authen
  })
  const dispatch = useDispatch()
  useEffect(() => {
    postPrivatePages(userCookie.token, dispatch, checkAuthen)
  }, [])
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 3000);
  },[])
  return (
    <>
      {loading && authen === true && (<>
        <Outlet />
      </>)}
      {loading && authen === false && (<>
        <Navigate to={'/log-in'}/>
      </>)}
    </>
  )
}

export default memo(PrivateRoutes)