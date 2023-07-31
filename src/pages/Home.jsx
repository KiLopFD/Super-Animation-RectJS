import React, { Suspense, memo, useState } from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn, textVariant, textVariant2, triggerShow } from '../services/motion'
import { Courses, Exercise } from '.'


const Home = () => {

  return (
    <>
      <div className="Home"
      >
        <div className='bg-blue-700'>
          <div className="grid grid-cols-12 container mx-auto lg:pt-20 md:pt-20 sm:pt-20 pt-5">
            <div className="col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-12 md:order-2 lg:order-1 sm:order-2 order-2">
              <div className="inner-wrap lg:pt-16 md:pt-16 sm:pt-16 pt-8">
                <m.p className="inner-title font-mono text-5xl font-bold mb-3 lg:block md:hidden sm:hidden hidden"
                  variants={textVariant(1.35)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  C++ là nền tảng quan trọng của mọi lập trình viên
                </m.p>
                <m.p className="inner-desc text-blue-200 mb-3 text-center sm:text-center md:text-center lg:text-start text-xl"
                  variants={textVariant(1.45)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >Bạn không được bỏ cuộc chúng tôi luôn đồng hành cùng bạn</m.p>
                <div className="group-btn pt-5 flex flex-wrap gap-5 items-center lg:justify-start md:justify-center sm:justify-center justify-center">
                  <m.div
                    variants={textVariant(1.45)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <button className='font-sans font-bold px-6 py-6 border-4 rounded-xl border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 lg:text-5xl md:text-5xl sm:text-3xl text-3xl min-w-max'
                    >Học Ngay</button>
                  </m.div>

                  <m.div
                    variants={textVariant(1.55)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <svg className='w-full h-auto pt-3 text-center' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="5" width="34" height="28" rx="2" stroke="#fafafa" strokeWidth="2" />
                      <path d="M7 10L9 12L7 14" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 14H16" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                  </m.div>

                  <m.p className="inner-desc text-sm text-blue-200 font-sans"
                    variants={textVariant(1.65)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.8 }}
                  >Website học code hoàn toàn miễn phí</m.p>
                </div>
              </div>

            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 sm:order-1 md:order-1 order-1">
              <m.div className="inner-wrap"
                variants={fadeIn('left', 'spring', 0.95, 0.9)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.8 }}
              >
                <m.div className='lg:w-[550px] lg:h-[450px] md:w-[550px] md:h-[450px] sm:w-[550px] sm:h-[450px] w-[250px] h-[200px] mx-auto pt-3 sm:pt-10 md:pt-10 lg:pt-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-4 border-blue-800'
                  variants={{
                    initial: {
                      borderRadius: "88% 12% 22% 78% / 44% 17% 83% 56% ",
                    },
                    show: {
                      borderRadius: ["34% 66% 58% 42% / 26% 33% 67% 74% ", "15% 85% 76% 24% / 74% 37% 63% 26% ", "64% 36% 16% 84% / 56% 81% 19% 44% ", "72% 28% 32% 68% / 40% 20% 80% 60% ", "34% 66% 58% 42% / 26% 33% 67% 74% "],
                      transition: {
                        duration: 15,
                        repeat: Infinity,
                        delay: 0.5,
                        velocity: 0.003,
                        restDelta: 0.001,
                        restSpeed: 0.00001,
                        type: 'tween',
                      }
                    }
                  }}
                  initial='initial'
                  whileInView='show'
                  transition={{
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    duration: 2,
                    velocity: 0.0001,
                    restDelta: 0.0001,
                    restSpeed: 0.0005,
                    repeatType: "reverse",
                    repeat: Infinity,
                  }}

                >
                  <svg className='hidden sm:block md:block lg:block mx-auto' width="303" height="325" viewBox="0 0 303 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M299.043 243.07C301.42 239.156 302.897 234.745 302.897 230.785V93.3082C302.897 89.3477 301.422 84.9383 299.044 81.0239L151.448 162.047L299.043 243.07Z" fill="#00599C" />
                    <path d="M164.564 321.123L289.781 252.385C293.388 250.405 296.666 246.985 299.043 243.07L151.448 162.047L3.85352 243.071C6.23016 246.985 9.50956 250.405 13.1156 252.385L138.333 321.123C145.546 325.083 157.351 325.083 164.564 321.123Z" fill="#004482" />
                    <path d="M299.044 81.0231C296.666 77.1078 293.387 73.6885 289.781 71.7082L164.564 2.97035C157.351 -0.990118 145.546 -0.990118 138.333 2.97035L13.1156 71.7082C5.90153 75.6678 0 85.3882 0 93.3082V230.785C0 234.745 1.47588 239.156 3.85352 243.07L151.448 162.047L299.044 81.0231Z" fill="#659AD2" />
                    <path d="M151.448 258.047C95.7757 258.047 50.4828 214.981 50.4828 162.047C50.4828 109.112 95.7757 66.0469 151.448 66.0469C187.372 66.0469 220.876 84.428 238.883 114.017L195.188 138.058C186.175 123.248 169.414 114.047 151.448 114.047C123.611 114.047 100.966 135.579 100.966 162.047C100.966 188.514 123.611 210.047 151.448 210.047C169.416 210.047 186.177 200.846 195.191 186.033L238.886 210.073C220.879 239.665 187.374 258.047 151.448 258.047Z" fill="white" />
                    <path d="M252.414 156.713H241.195V146.047H229.978V156.713H218.759V167.38H229.978V178.047H241.195V167.38H252.414V156.713Z" fill="white" />
                    <path d="M294.483 156.713H283.264V146.047H272.047V156.713H260.828V167.38H272.047V178.047H283.264V167.38H294.483V156.713Z" fill="white" />
                  </svg>
                  <svg className='block mx-auto sm:hidden md:hidden lg:hidden' width="144" height="163" viewBox="0 0 144 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M142.168 121.535C143.298 119.578 144 117.373 144 115.392V46.6541C144 44.6738 143.299 42.4691 142.168 40.512L72 81.0235L142.168 121.535Z" fill="#00599C" />
                    <path d="M78.2353 160.561L137.765 126.192C139.48 125.202 141.038 123.493 142.168 121.535L72 81.0234L1.83203 121.535C2.96191 123.493 4.52097 125.203 6.23533 126.192L65.7647 160.561C69.1939 162.542 74.8061 162.542 78.2353 160.561Z" fill="#004482" />
                    <path d="M142.168 40.5115C141.038 38.5539 139.479 36.8442 137.765 35.8541L78.2353 1.48518C74.8061 -0.495059 69.1939 -0.495059 65.7647 1.48518L6.23529 35.8541C2.80565 37.8339 0 42.6941 0 46.6541V115.392C0 117.373 0.701647 119.578 1.832 121.535L72 81.0235L142.168 40.5115Z" fill="#659AD2" />
                    <path d="M72 129.023C45.5327 129.023 24 107.491 24 81.0234C24 54.5561 45.5327 33.0234 72 33.0234C89.0786 33.0234 105.007 42.214 113.568 57.0084L92.7944 69.0291C88.5096 61.6239 80.5412 57.0234 72 57.0234C58.7661 57.0234 48 67.7896 48 81.0234C48 94.2568 58.7661 105.023 72 105.023C80.5421 105.023 88.5106 100.423 92.7958 93.0164L113.569 105.037C105.008 119.832 89.0795 129.023 72 129.023Z" fill="white" />
                    <path d="M120 78.3566H114.666V73.0234H109.334V78.3566H104V83.6898H109.334V89.0234H114.666V83.6898H120V78.3566Z" fill="white" />
                    <path d="M140 78.3566H134.666V73.0234H129.334V78.3566H124V83.6898H129.334V89.0234H134.666V83.6898H140V78.3566Z" fill="white" />
                  </svg>

                </m.div>



              </m.div>
            </div>
          </div>
        </div>

        <svg className='w-full left-0 h-auto block mb-24' width="1669" height="344" viewBox="0 0 1669 344" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 288L34.7708 240C69.5417 192 139.083 96 208.625 96C278.167 96 347.708 192 417.25 234C486.792 276 556.333 264 625.875 222C695.417 180 764.958 108 834.5 114C904.042 120 973.583 204 1043.13 258C1112.67 312 1182.21 336 1251.75 342C1321.29 348 1390.83 336 1460.38 312C1529.92 288 1599.46 252 1634.23 234L1669 216V0H1634.23C1599.46 0 1529.92 0 1460.38 0C1390.83 0 1321.29 0 1251.75 0C1182.21 0 1112.67 0 1043.13 0C973.583 0 904.042 0 834.5 0C764.958 0 695.417 0 625.875 0C556.333 0 486.792 0 417.25 0C347.708 0 278.167 0 208.625 0C139.083 0 69.5417 0 34.7708 0H0V288Z" fill="#1D4ED8" />
        </svg>
        <div className='courses py-5'>
          <Suspense fallback={<div>Loading...</div>}>
            <Courses />
          </Suspense>
        </div>
        <div className='exercise py-5'>
          <Suspense fallback={<div>Loading...</div>}>
            <Exercise />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default memo(Home)