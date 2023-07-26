import React, { memo } from 'react'
import { motion as m } from 'framer-motion'
import { slideIn } from '../services/motion'


const SlideTitle = ({nameTitle}) => {
  return (
      <>
          <m.div className='max-w-lg bg-blue-700 rounded-r-full pr-10'
              variants={slideIn('left', 'tween', 0.25, 0.75)}
              initial='hidden'
              whileInView='show'
          >
              <div className="inner-wrap flex justify-end items-center pl-5">
                  <svg className='stroke-2' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 25V79.1667" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                      <path d="M87.5 25V79.1667" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12.5 25V79.1667" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                      <path d="M87.5 79.1667C87.5 79.1667 83.3333 70.8333 68.75 70.8333C54.1667 70.8333 50 79.1667 50 79.1667" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                      <path d="M50 79.1667C50 79.1667 45.8333 70.8333 31.25 70.8333C16.6667 70.8333 12.5 79.1667 12.5 79.1667" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                      <path d="M87.5 25C87.5 25 83.3333 16.6667 68.75 16.6667C54.1667 16.6667 50 25 50 25" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                      <path d="M50 25C50 25 45.8333 16.6667 31.25 16.6667C16.6667 16.6667 12.5 25 12.5 25" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                  </svg>


                  <p className="inner-title lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-sans pl-4">{ nameTitle }</p>
              </div>
          </m.div>
      </>
  )
}

export default memo(SlideTitle)