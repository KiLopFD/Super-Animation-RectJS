import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { animate, motion as m } from "framer-motion";
import { fadeIn, navVariants, slideIn, staggerContainer } from "../services/motion";


const Header = ({ setMode, }) => {
  let [useFocus, setFocus] = useState('')
  // When Scroll, I Can Measure Height:
  // window.addEventListener('scroll', () => {
  //   console.log(window.pageYOffset)
  // })
  return <>
    <div className="bg-blue-800 shadow-xl sticky left-0 top-0 z-50">
      <div className="header grid grid-cols-12 items-center px-2 sm:px-2 md:px-0 lg:px-0 container mx-auto">
        <div className="block sm:block col-span-2 md:hidden lg:hidden">
          drop
        </div>
        <m.div className="logo col-span-2 font-semibold font-sans text-xl"
          variants={fadeIn('down', 'spring', 0.5, 0.75)}
          initial='hidden'
          animate='show'
        >
          <NavLink to='/' >Logo</NavLink>
        </m.div>

        <div className="col-span-6 flex justify-center sm:hidden lg:flex md:flex hidden">
          <m.div className="relative md:hidden lg:block"
            variants={fadeIn('down', 'spring', 0.75, 0.75)}
            initial='hidden'
            animate='show'
            onClick={() => { setFocus('') }}
          >
            <NavLink to='/' className='px-4 py-8 lg:text-xl  font-semibold font-sans hover:text-amber-300' >Trang Chủ</NavLink>
            {useFocus === '' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'spring',
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
            <NavLink to='/courses' className='px-4 py-8 lg:text-xl  font-semibold font-sans' >Khóa Học</NavLink>
            {useFocus === 'courses' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'spring',
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
            <NavLink to='/about' className='px-4 py-8 lg:text-xl  font-semibold font-sans'>Giới Thiệu</NavLink>
            {useFocus === 'about' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'spring',
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
            <NavLink to='/contact' className='px-4 py-8 lg:text-xl  font-semibold font-sans'>Liên Hệ</NavLink>
            {useFocus === 'contact' && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
              variants={{
                hidden: {
                  width: 0
                },
                show: {
                  width: "100%",
                  transition: {
                    type: 'spring',
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
        <div className={"lg:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 flex gap-3 justify-end font-semibold font-sans lg:text-xl md:text-xl sm:text-sm text-sm py-6"}>
          <m.div
            variants={fadeIn('down', 'spring', 1.15, 0.75)}
            initial='hidden'
            animate='show'
          >
            <button className="px-4 py-3 rounded-2xl hover:scale-110 hover:duration-300 hover:border-amber-400"><NavLink to='log-in'>Đăng Nhập</NavLink></button>
          </m.div>
          <m.div
            variants={fadeIn('down', 'spring', 1.15, 0.75)}
            initial='hidden'
            animate='show'
          >
            <button className="border-cyan-400 border-2 px-4 py-3 rounded-2xl hover:scale-110 hover:duration-300 hover:border-amber-400"><NavLink to='sign-in'>Đăng Kí</NavLink></button>
          </m.div>
          
        </div>
      </div>
    </div>
  </>;
};

export default Header;
