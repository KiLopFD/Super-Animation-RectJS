import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { animate, motion as m } from "framer-motion";
import { fadeIn, navVariants, slideIn, staggerContainer } from "../services/motion";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AvatarUser } from ".";
import logo from '../assets/images/logo.jpg'
import { postPrivatePages } from "../services/api/utils/postPrivatePages";
import { useCookies } from "react-cookie";
import { checkAuthen } from "../services/container/slices/authenUser";
import DropDown from "./DropDown";


const Header = ({ setMode, }) => {

  const location = useLocation();
  const [useFocus, setFocus] = useState('');

  useEffect(() => {
    setFocus(location.pathname)
  }, [location.pathname])
  // When Scroll, I Can Measure Height:
  // window.addEventListener('scroll', () => {
  //   console.log(window.pageYOffset)
  // })
  return <>
    <div className="bg-blue-700 shadow-xl sticky left-0 top-0 z-40">
      <div className="header grid grid-cols-12 items-center px-2 sm:px-2 md:px-0 lg:px-0 container mx-auto">
        <div className="sm:block col-span-2 md:hidden lg:hidden flex justify-center">
          <DropDown />
        </div>
        <m.div className="logo col-span-2 font-semibold font-sans text-xl"
          variants={fadeIn('down', 'spring', 0.5, 0.75)}
          initial='hidden'
          animate='show'
        >
          <Link to='/' ><img className="h-12 w-12 rounded-full bg-cover object-contain" src={logo} alt="logo" /></Link>
        </m.div>

        <div className="col-span-6 justify-center sm:hidden lg:flex md:flex hidden">
          <m.div className="relative md:hidden lg:block"
            variants={fadeIn('down', 'spring', 0.75, 0.75)}
            initial='hidden'
            animate='show'
            onClick={() => { setFocus('') }}
          >
            <Link to='/' className='px-4 py-8 lg:text-xl  font-semibold font-sans hover:text-amber-300' >Trang Chủ</Link>
            {useFocus === '/' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'tween',
                    damping: 25,
                    velocity: 0.025,
                    stiffness: 50,
                    restDelta: 0.001,
                    duration: 0.5
                  }
                },
              }}
              initial='hidden'
              whileInView='show'
            >
            </m.div>)}
          </m.div>
          <m.div className="relative"
            variants={fadeIn('down', 'spring', 0.85, 0.75)}
            initial='hidden'
            animate='show'
            onClick={() => { setFocus('courses') }}
          >
            <Link to='/courses' className='px-4 py-8 lg:text-xl  font-semibold font-sans' >Khóa Học</Link>
            {useFocus === '/courses' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'tween',
                    damping: 25,
                    velocity: 0.025,
                    stiffness: 50,
                    restDelta: 0.001,
                    duration: 0.5
                  }
                },
              }}
              initial='hidden'
              whileInView='show'
            >
            </m.div>)}
          </m.div>
          <m.div
            className="relative"
            variants={fadeIn('down', 'spring', 0.95, 0.75)}
            initial='hidden'
            animate='show'
            onClick={() => { setFocus('about') }}
          >
            <Link to='/about' className='px-4 py-8 lg:text-xl  font-semibold font-sans'>Giới Thiệu</Link>
            {useFocus === '/about' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'tween',
                    damping: 25,
                    velocity: 0.025,
                    stiffness: 50,
                    restDelta: 0.001,
                    duration: 0.5
                  }
                },
              }}
              initial='hidden'
              whileInView='show'
            >
            </m.div>)}
          </m.div>
          <m.div
            className="relative"
            variants={fadeIn('down', 'spring', 1.05, 0.75)}
            initial='hidden'
            animate='show'
            onClick={() => { setFocus('contact') }}
          >
            <Link to='/contact' className='px-4 py-8 lg:text-xl  font-semibold font-sans'>Liên Hệ</Link>
            {useFocus === '/contact' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'tween',
                    damping: 25,
                    velocity: 0.025,
                    stiffness: 50,
                    restDelta: 0.001,
                    duration: 0.5
                  }
                },
              }}
              initial='hidden'
              whileInView='show'
            >
            </m.div>)}
          </m.div>

        </div>
        <div className={`lg:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 flex gap-3 font-semibold font-sans lg:text-xl md:text-xl sm:text-sm text-sm py-6 justify-end pr-5`}>
          <div className="list-action flex justify-end items-center">
            <div className="wrap-icon flex justify-end items-center">
              <div className="wrap-item-icon px-1 cursor-pointer">
                <svg className='h-10 w-10 p-1 border-[#ffffff26] border rounded-3xl hover:bg-[#000000] duration-500 ease-in-out bg-[#0F051D] hover:shadow-pink transition-all' width="65px" height="65px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z" fill="#ffffff"></path> </g></svg>
              </div>
              <div className="wrap-item-icon px-1 cursor-pointer">
                <svg className='h-10 w-10 p-1 border-[#ffffff26] border rounded-3xl hover:bg-[#000000] duration-500 ease-in-out bg-[#0F051D] hover:shadow-pink transition-all' fill="#ffffff" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path></g></svg>
              </div>
              <div className="wrap-item-icon px-1 block min-[1155px]:hidden cursor-pointer">
                <svg className='h-10 w-10 p-1 border-[#ffffff26] border rounded-3xl hover:bg-[#000000] duration-500 ease-in-out bg-[#0F051D] hover:shadow-pink transition-all' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              </div>
              <div className="wrap-item-icon px-1 block min-[910px]:hidden">
                

              </div>
            </div>
            <div className="wrap-btn pl-5 min-[1155px]:block hidden">
              <button className="btn-connect px-16 py-2 border-[#ffffff26] border rounded-3xl hover:bg-[#000000] duration-500 ease-in-out bg-[#0F051D] hover:shadow-pink transition-all">
                Kết nối
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  </>;
};

export default memo(Header);
