import React, { memo } from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn } from '../services/motion'
import { Link } from 'react-router-dom'


const SeeMore = ({ linkTo }) => {
  return (
      <>
          <div>
              <button className="wrap-more flex items-center lg:pr-28 md:pr-28 sm:pr-28 pr-1 gap-2 rounded-l-full border-2 border-r-0 p-2 relative overflow-hidden"

              >
                  <svg className='relative z-20' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="13.75" cy="13.75" r="8.75" stroke="#FFFBFB" strokeWidth="2" />
                      <path d="M13.75 10C13.2575 10 12.7699 10.097 12.3149 10.2855C11.86 10.4739 11.4466 10.7501 11.0983 11.0983C10.7501 11.4466 10.4739 11.86 10.2855 12.3149C10.097 12.7699 10 13.2575 10 13.75" stroke="#FFFBFB" strokeWidth="2" strokeLinecap="round" />
                      <path d="M25 25L21.25 21.25" stroke="#FFFBFB" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="inner-desc hidden lg:block md:block sm:block relative z-20 duration-150 hover:scale-110"><Link to={`${linkTo}`}>Xem thêm</Link></p>
                  <m.div className='w-full h-full absolute right-0 top-0 z-10 bg-blue-700'
                      variants={fadeIn('left', 'tween', 0.5, 4)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once:true}}
                  ></m.div>
              </button>
          </div>
      </>
  )
}

export default memo(SeeMore)