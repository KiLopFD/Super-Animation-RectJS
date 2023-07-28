import React, { memo, useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn } from '../services/motion'
import { postSignUp } from '../services/api/utils/postSignUp'
import { Navigate, useNavigate } from 'react-router-dom'
import { API_DOMAIN, SUP_DOMAIN_API } from '../services/api/request'
import { setLocalStorageUser } from '../services/localStorage/infoUser'
import { generateExpiresDate, setCookieToken } from '../services/cookie/cookieToken'
import { useCookies } from 'react-cookie';


const SignUp = () => {
  // Navigate:
  const navigate = useNavigate()
  //------------------------
  const [cookies, setCookie] = useCookies(['token']); // cookie
  //
  const refName = useRef('')
  const refPw = useRef('')
  const refPwAgain = useRef('')
  const [focusInput, setFocus] = useState("name")
  const [loading, setLoading] = useState(0)
  const [checkPw, setCheckPw] = useState(0)
  const [dataUser, setUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.pw.value;
    const phone = e.target.elements.phone.value;
    const infoUser = {
      username: `${fullName.split(" ")[fullName.split(" ").length - 1]}${Date.now()}`,
      full_name: fullName,
      password: password,
      email: email,
      phone: phone,
      position: "SV",
    }
    postSignUp(infoUser, setUser)
  }
  useEffect(() => {
    if (dataUser.type === 'success')
    {
      const expires = new Date(dataUser.user.expired_date)
      setLocalStorageUser(dataUser.user)
      setCookieToken(dataUser.access_token, expires , setCookie)
      navigate('/')
    }
      
  }, [dataUser])

  const handleFocusName = () => {
    setFocus("name")
  }
  const handleFocusPhone = () => {
    setFocus("phone")
  }
  const handleFocusEmail = () => {
    setFocus("email")
  }
  const handleFocusPw = () => {
    setFocus("pw")
  }
  const handleFocusPwAgain = () => {
    setFocus("pw-again")
  }
  const handleCheckPw = () => {
    const pwAgain = refPwAgain.current.value 
    const pw = refPw.current.value 
    if (pwAgain === pw) {
      setCheckPw(1)
    }
    else if (pwAgain !== pw) {
      setCheckPw(2)
    }
    console.log("1")
  }
  // focus first input of the form:
  useEffect(() => {
    refName.current.focus()
    
    
  }, [])
  


  return (
    <>
      <div className="main lg:pt-36 md:pt-36 pt-10">
        <div className="inner-wrap p-5 lg:p-0 md:p-0 sm:p-0">
          <form onSubmit={handleSubmit} className='h-fit lg:w-[700px] md:w-[500px] w-[450px] max-w-fit bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 lg:p-10 md:p-10 sm:p-10 p-5 mx-auto rounded-2xl text-black text-xl'>
            <p className="inner-title font-sans text-4xl font-bold mb-5 text-center">Đăng kí tài khoản</p>
            <div className="notice h-8 mb-5 px-5">
              {checkPw !== 0 && refPw.current.value !=='' && refPwAgain.current.value !== '' ? (<>
                {checkPw === 1 ? (<>
                  <m.p className="inner-check-pw text-center"
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    initial='hidden'
                    whileInView='show'
                    
                  >Mật khẩu hợp lệ</m.p>
                </>) : (<><m.p className="inner-check-pw text-center"
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    initial='hidden'
                    whileInView='show'
                >Mật khẩu không khớp</m.p></>)}
              </>) : (<></>)}
            </div>
            <div className="input-name relative overflow-hidden mb-5">
              <input onFocus={() => handleFocusName()} ref={refName} type="text" name="name" placeholder="Họ và tên" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl' />
              <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                <m.span className='block h-2 bg-black rounded-3xl'
                  variants={{
                    hidden: { width: 0 },
                    show: { width: "100%" }
                  }}
                  initial='hidden'
                  animate={focusInput === 'name' ? 'show' : ''}
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
            <div className="group flex flex-wrap justify-between">
              <div className="input-name relative overflow-hidden mb-5 lg:w-[300px] lg:pr-2 p-0 w-full">
                <input onFocus={() => handleFocusEmail()} type="email" name="email" placeholder="Email" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl' />
                <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                  <m.span className='block h-2 bg-black rounded-3xl'
                    variants={{
                      hidden: { width: 0 },
                      show: { width: "100%" }
                    }}
                    initial='hidden'
                    animate={focusInput === 'email' ? 'show' : ''}
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
              <div className="input-name relative overflow-hidden mb-5 lg:w-[300px] w-full lg:pl-2 p-0">
                <input onFocus={() => handleFocusPhone()} type="text" name="phone" placeholder="Số điện thoại" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl' />
                <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                  <m.span className='block h-2 bg-black rounded-3xl'
                    variants={{
                      hidden: { width: 0 },
                      show: { width: "100%" }
                    }}
                    initial='hidden'
                    animate={focusInput === 'phone' ? 'show' : ''}
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
            </div>

            <div className="input-name relative overflow-hidden mb-5">
              <input ref={refPw} onChange={()=>handleCheckPw()} onFocus={() => handleFocusPw()} type="password" name="pw" placeholder="Mật khẩu" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl' />
              <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                <m.span className='block h-2 bg-black rounded-3xl'
                  variants={{
                    hidden: { width: 0 },
                    show: { width: "100%" }
                  }}
                  initial='hidden'
                  animate={focusInput === 'pw' ? 'show' : ''}
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
              <input ref={refPwAgain} onChange={()=>handleCheckPw()} onFocus={() => handleFocusPwAgain()} type="password" name="pwAgain" placeholder="Nhập lại mật khẩu" required className='block w-full p-3 border-none rounded-xl visited:border-none text-black text-xl' />
              <div className="focus h-2 -bottom-1 left-0 w-full rounded-3xl px-2">
                <m.span className='block h-2 bg-black rounded-3xl'
                  variants={{
                    hidden: { width: 0 },
                    show: { width: "100%" }
                  }}
                  initial='hidden'
                  animate={focusInput === 'pw-again' ? 'show' : ''}
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


            <button className="button button-main block border-4 border-cyan-300 hover:border-amber-300 hover:scale-110 duration-150 rounded-xl py-3 px-5 text-3xl font-sans font-bold mx-auto text-white">Đăng kí</button>
            <div className="forgot-password flex justify-end">
              <a href="" className="inner-forgot text-slate-300 duration-150 hover:scale-110">Quên mật khẩu</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default memo(SignUp)