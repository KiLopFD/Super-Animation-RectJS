import React, { memo, useEffect, useState } from 'react'
import { getImages } from '../services/api/utils/getImages';

const Ads = () => {
  const [loading, setLoading] = useState(0);
  const [images, setImages] = useState(null);
  const date = new Date().getMonth()
  const year = new Date().getFullYear()
  useEffect(() => {
    if (loading === 0)
      getImages('lang_program', setImages, setLoading)
    console.log(images)
  }, [loading])

  return (
    <>
      <div className="wrap-ads py-10 overflow-hidden xl:pr-20 pr-0">
        <div className="wrap-ctn font-sans px-2">
          <p className="title text-xl mb-5 xl:px-10 px-0">Khóa học tháng {date}/{year}</p>
          <div className="wrap-list-course">
            {loading === 1 ? images.slice(0,5).map((val, index) => {
                return <div className="wrap-item mb-5 p-3 flex border rounded-lg items-center hover:bg-[#000000] duration-500 ease-in-out bg-[#0F1729] hover:shadow-pink transition-all" key={index}>
                  <div className="item-icon pr-3">
                    <svg className='h-10 w-10' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: val["code"] }}></svg>
                  </div>
                  <div className="item-ctn">
                    <p className="title mb-2">Giá gốc: <span className='line-through text-lg font-semibold'>4.000.000</span></p>
                    <p className="title mb-2">Giá giãm: <span className='text-lg font-semibold'>2.00.000</span></p>
                    <button className='block mx-auto min-w-max p-2 text-lg border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'>Tư vấn ngay</button>
                  </div>
                </div>
              }) : (<>
                Loading...
              </>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Ads)