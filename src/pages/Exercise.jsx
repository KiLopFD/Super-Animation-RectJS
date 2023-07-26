import React, { useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn, textVariant, textVariant2, triggerShow } from '../services/motion'
import { memo } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import { getImages } from '../services/api/utils/getImages'
import { SeeMore, SlideTitle } from '../components'

const Exercise = () => {
  const location = useLocation();
  const [images, setImages] = useState(null)
  const [loading, setLoading] = useState(0);
  const refShow = useRef(null | HTMLDivElement);
  useEffect(() => {
    setTimeout(() => {
      setLoading(1)
    }, 2000)
    getImages('courses', setImages)
  }, [loading])
  return (
    <>
      <div className={"Exercise" + (location.pathname === '/exercise' ? ' pt-10' : '')}>
        <div className='flex justify-between items-center mb-10 flex-wrap'>
          <SlideTitle nameTitle={'Bài Tập'} />
          {location.pathname !== '/exercise' && (
            <SeeMore linkTo={'exercise'} />
          )}
        </div>

        <div className="wrap-content grid grid-cols-12 container mx-auto xl:gap-10 lg:gap-3 md:gap-3 sm:gap-0 gap-0 lg:px-0 md:px-0 sm:px-0 px-5">
          {loading !== 0 && (location.pathname === '/exercise' ? images.map((val, index) => {
            return (
              <div key={index} className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
                  variants={fadeIn('up', 'tween', 0.5, 0.5)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                    <m.svg className='' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                      variants={textVariant(0.65)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true }}
                    >
                      <svg className='' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: val["code"] }} />
                    </m.svg>
                  </div>
                  <div className="wrap-content">
                    <ul className='font-sans lg:list-disc md:list-disc sm:list-disc list-none'>
                      <m.li className='mb-3' variants={textVariant(0.75)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                      >Lý thuyết ngắn gọn, dễ học bao gồm hơn 20 bài.</m.li>
                      <m.li className='mb-3' variants={textVariant(0.85)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                      >Nội dung mới mẻ cách code trong phiên bản mới ngắn hơn hiệu quả hơn.</m.li>
                      <m.li className='mb-3'
                        variants={textVariant(0.95)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                      >Được hỏi bài mọi lúc mọi nơi luôn có sự giải đáp.</m.li>
                    </ul>
                    <m.div variants={textVariant(1)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true }}
                    >
                      <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'><Link to={`/exercise/${val["name"]}/list-chap`} state={{ categories: val["name"], param: "list-chap" }} >Vào Học</Link></button>
                    </m.div>
                  </div>
                </m.div>
              </div>
            )
          }) : images.slice(0, 3).map((val, index) => {
            return (
              <div key={index} className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
                <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
                  variants={fadeIn('up', 'tween', 0.5, 0.5)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                    <m.svg className='' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                      variants={textVariant(0.65)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true }}
                    >
                      <svg className='' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: val["code"] }} />
                    </m.svg>
                  </div>
                  <div className="wrap-content">
                    <ul className='font-sans lg:list-disc md:list-disc sm:list-disc list-none'>
                      <m.li className='mb-3' variants={textVariant(0.75)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                      >Lý thuyết ngắn gọn, dễ học bao gồm hơn 20 bài.</m.li>
                      <m.li className='mb-3' variants={textVariant(0.85)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                      >Nội dung mới mẻ cách code trong phiên bản mới ngắn hơn hiệu quả hơn.</m.li>
                      <m.li className='mb-3'
                        variants={textVariant(0.95)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: true }}
                      >Được hỏi bài mọi lúc mọi nơi luôn có sự giải đáp.</m.li>
                    </ul>
                    <m.div variants={textVariant(1)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{ once: true }}
                    >
                      <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'><Link to={`/exercise/${val["name"]}`} state={{ categories: val["name"], param: "list-chap" }} >Vào Học</Link></button>
                    </m.div>
                  </div>
                </m.div>
              </div>
            )
          }))}
        </div>
      </div>
    </>
  )
}

export default memo(Exercise)