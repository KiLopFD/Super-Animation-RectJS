import React, { memo, useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn } from '../services/motion'
import { postSignUp } from '../services/api/utils/postSignUp'
import { Navigate, useNavigate } from 'react-router-dom'
import { API_DOMAIN, SUP_DOMAIN_API } from '../services/api/request'
import { setLocalStorageUser } from '../services/localStorage/infoUser'
import { generateExpiresDate, setCookieToken } from '../services/cookie/cookieToken'
import { useCookies } from 'react-cookie';
import { postLogIn } from '../services/api/utils/postLogIn'

const Login = () => {
  // Navigate:
  const navigate = useNavigate()
  //------------------------
  const [cookies, setCookie] = useCookies(['token']); // cookie
  //
  const refName = useRef('')
  const [focusInput, setFocus] = useState("first")
  const [dataUser, setUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const email_or_phone = e.target.elements.email_or_phone.value.trim();
    const password = e.target.elements.pw.value.trim();
    const infoUser = {
      email_or_phone: email_or_phone,
      password: password
    }
    postLogIn(infoUser, setUser)
    console.log(infoUser)
  }
  useEffect(() => {
    if (dataUser.detail === 'success')
    {
      const expires = new Date(dataUser.user.expired_date)
      setLocalStorageUser(dataUser.user)
      setCookieToken(dataUser.access_token, expires , setCookie)
      navigate('/')
    }
    else{
      navigate('/log-in')
    }
  }, [dataUser])

  const handleFocusFirst = () => {
    setFocus("first")
  }
  const handleFocusSecond = () => {
    setFocus("second")
  }

  // focus first input of the form:
  useEffect(() => {
    refName.current.focus()
    
    
  }, [])
  return (
    <>
    <div className="main lg:pt-36 md:pt-36 pt-10">
        <div className="inner-wrap p-5 lg:p-0 md:p-0 sm:p-0">
          <form onSubmit={handleSubmit} className='h-fit lg:w-[700px] md:w-[500px] w-[450px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 lg:p-10 md:p-10 sm:p-10 p-5 mx-auto rounded-2xl text-black text-xl'>
            <p className="inner-title font-sans text-4xl font-bold mb-10 text-center">Đăng Nhập</p>
            <div className="input-name relative overflow-hidden mb-5">
              <input onFocus={() => handleFocusFirst()} ref={refName} type="text" name="email_or_phone" placeholder="Email hoặc Số điện thoại" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl' />
              <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                <m.span className='block h-2 bg-black rounded-3xl'
                  variants={{
                    hidden: { width: 0 },
                    show: { width: "100%" }
                  }}
                  initial='hidden'
                  animate={focusInput === 'first' ? 'show' : ''}
                  transition={{
                    type: 'tween',
                    damping: 3,
                    velocity: 0.025,
                    stiffness: 10,
                    restDelta: 0.001,
                    duration: 0.75,
                    delay: 0.2,
                  }}
                ></m.span>
              </div>
            </div>
            
            <div className="input-name relative overflow-hidden mb-5">
              <input onFocus={() => handleFocusSecond()} type="password" name="pw" placeholder="Mật khẩu" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl'/>
              <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                <m.span className='block h-2 bg-black rounded-3xl'
                  variants={{
                    hidden: { width: 0 },
                    show: { width: "100%" }
                  }}
                  initial='hidden'
                  animate={focusInput === 'second' ? 'show' : ''}
                  transition={{
                    type: 'tween',
                    damping: 3,
                    velocity: 0.025,
                    stiffness: 10,
                    restDelta: 0.001,
                    duration: 0.75,
                    delay: 0.2,
                  }}
                ></m.span>
              </div>
            </div>

            <button className="button button-main block border-4 border-cyan-300 hover:border-amber-300 hover:scale-110 duration-150 rounded-xl py-3 px-5 text-3xl font-sans font-bold mx-auto text-white">Đăng Nhập</button>
            <div className="forgot-password flex justify-end">
              <a href="" className="inner-forgot text-slate-300 duration-150 hover:scale-110">Quên mật khẩu</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default memo(Login)