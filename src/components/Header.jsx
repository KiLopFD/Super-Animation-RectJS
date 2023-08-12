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
    <div className="bg-blue-900 shadow-xl sticky left-0 top-0 z-40">
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
          <AvatarUser/>
        </div>
      </div>
    </div>
  </>;
};

export default memo(Header);
