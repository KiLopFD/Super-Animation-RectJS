import React from 'react'
import { motion as m } from 'framer-motion'
import { fadeIn, slideIn, textVariant, textVariant2, triggerShow } from '../services/motion'
import { memo } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function Courses() {
  const { currentUrl } = useOutletContext();

  return (
    <>
      <div className={"Courses" + (currentUrl.pathname === '/courses' ? ' pt-10' : '')}>
        <div className='flex justify-between items-center mb-10 flex-wrap'>
          <m.div className='max-w-lg bg-blue-700 rounded-r-full pr-10'
            variants={slideIn('left', 'spring', 0.25, 0.75)}
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


              <p className="inner-title lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-sans pl-4">Khóa Học</p>
            </div>
          </m.div>
          {currentUrl.pathname !== '/courses' && (
            <div>
              <button className="wrap-more flex items-center lg:pr-28 md:pr-28 sm:pr-28 pr-1 gap-2 rounded-l-full border-2 border-r-0 p-2 relative overflow-hidden duration-150 hover:scale-110"

              >
                <svg className='relative z-20' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13.75" cy="13.75" r="8.75" stroke="#FFFBFB" strokeWidth="2" />
                  <path d="M13.75 10C13.2575 10 12.7699 10.097 12.3149 10.2855C11.86 10.4739 11.4466 10.7501 11.0983 11.0983C10.7501 11.4466 10.4739 11.86 10.2855 12.3149C10.097 12.7699 10 13.2575 10 13.75" stroke="#FFFBFB" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 25L21.25 21.25" stroke="#FFFBFB" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="inner-desc hidden lg:block md:block sm:block relative z-20"><Link to='/courses'>Xem thêm</Link></p>
                <m.div className='w-full h-full absolute right-0 top-0 z-10 bg-blue-700'
                  variants={fadeIn('left', 'tween', 0.5, 4)}
                  initial='hidden'
                  whileInView='show'
                ></m.div>
              </button>
            </div>
          )}
          
          
        </div>
        
        <div className="wrap-content grid grid-cols-12 container mx-auto xl:gap-10 lg:gap-3 md:gap-3 sm:gap-0 gap-0 lg:px-0 md:px-0 sm:px-0 px-5">
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
              variants={fadeIn('up', 'spring', 0.5, 1)}
              initial='hidden'
              whileInView='show'
              viewport={{once:true}}
            >
              <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                <m.svg className='' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  variants={textVariant(0.75)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <g clipPath="url(#clip0_308_2)">
                    <path d="M17.7083 8.06015e-06H82.2917C84.6178 -0.00224053 86.9215 0.466009 89.0709 1.37796C91.2204 2.28991 93.1734 3.62765 94.8182 5.31463C96.463 7.00162 97.7674 9.00472 98.6565 11.2093C99.5457 13.4139 100.002 15.7766 100 18.1624V81.8376C100.002 84.2234 99.5457 86.5861 98.6565 88.7907C97.7674 90.9953 96.463 92.9984 94.8182 94.6854C93.1734 96.3723 91.2204 97.7101 89.0709 98.622C86.9215 99.534 84.6178 100.002 82.2917 100H17.7083C15.3822 100.002 13.0785 99.534 10.9291 98.622C8.7796 97.7101 6.82658 96.3723 5.18177 94.6854C3.53696 92.9984 2.23266 90.9953 1.34351 88.7907C0.454359 86.5861 -0.00218452 84.2234 7.85865e-06 81.8376V18.1624C-0.00218452 15.7766 0.454359 13.4139 1.34351 11.2093C2.23266 9.00472 3.53696 7.00162 5.18177 5.31463C6.82658 3.62765 8.7796 2.28991 10.9291 1.37796C13.0785 0.466009 15.3822 -0.00224053 17.7083 8.06015e-06V8.06015e-06Z" fill="#2082EA" />
                    <path d="M43.5345 81.069C26.422 81.069 12.5 67.147 12.5 50.0345C12.5 32.922 26.422 19 43.5345 19C54.5767 19 64.8749 24.9422 70.41 34.5075L56.9791 42.2795C54.2088 37.4917 49.0568 34.5172 43.5345 34.5172C34.9781 34.5172 28.0172 41.4781 28.0172 50.0345C28.0172 58.5906 34.9781 65.5517 43.5345 65.5517C49.0574 65.5517 54.2094 62.5773 56.98 57.7885L70.411 65.5602C64.8759 75.1265 54.5773 81.069 43.5345 81.069Z" fill="white" />
                    <path d="M74.569 48.3102H71.1205V44.8621H67.6726V48.3102H64.2241V51.7584H67.6726V55.2069H71.1205V51.7584H74.569V48.3102Z" fill="white" />
                    <path d="M87.5 48.3102H84.0515V44.8621H80.6037V48.3102H77.1552V51.7584H80.6037V55.2069H84.0515V51.7584H87.5V48.3102Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_308_2">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
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
                  <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'><Link to='/lesson/cpp/timeline'>Vào Học</Link></button>
                </m.div>
              </div>
            </m.div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
              variants={fadeIn('up', 'spring', 1.5, 1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                
                <m.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  variants={textVariant(1.75)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <g clipPath="url(#clip0_311_7)">
                    <path d="M17.7083 8.06015e-06H82.2917C84.6178 -0.00224053 86.9215 0.466009 89.0709 1.37796C91.2204 2.28991 93.1734 3.62765 94.8182 5.31463C96.463 7.00162 97.7674 9.00472 98.6565 11.2093C99.5457 13.4139 100.002 15.7766 100 18.1624V81.8376C100.002 84.2234 99.5457 86.5861 98.6565 88.7907C97.7674 90.9953 96.463 92.9984 94.8182 94.6854C93.1734 96.3723 91.2204 97.7101 89.0709 98.622C86.9215 99.534 84.6178 100.002 82.2917 100H17.7083C15.3822 100.002 13.0785 99.534 10.9291 98.622C8.7796 97.7101 6.82658 96.3723 5.18177 94.6854C3.53696 92.9984 2.23266 90.9953 1.34351 88.7907C0.454359 86.5861 -0.00218452 84.2234 7.85865e-06 81.8376V18.1624C-0.00218452 15.7766 0.454359 13.4139 1.34351 11.2093C2.23266 9.00472 3.53696 7.00162 5.18177 5.31463C6.82658 3.62765 8.7796 2.28991 10.9291 1.37796C13.0785 0.466009 15.3822 -0.00224053 17.7083 8.06015e-06V8.06015e-06Z" fill="#F0F0F0" />
                    <path d="M69.6861 73.5365H69.3844V73.3677H70.1966V73.5365H69.897V74.3786H69.6861V73.5365ZM71.3062 73.5804H71.3014L71.0025 74.3788H70.8657L70.5687 73.5804H70.565V74.3788H70.3663V73.3678H70.6587L70.9341 74.0837L71.2086 73.3678H71.5V74.3788H71.306V73.5804H71.3062Z" fill="#E76F00" />
                    <path d="M42.6773 52.8646C42.6773 52.8646 40.5782 54.0854 44.1712 54.4984C48.524 54.995 50.7487 54.9238 55.5456 54.0159C55.5456 54.0159 56.8068 54.8067 58.5681 55.4916C47.8147 60.1003 34.2311 55.2246 42.6773 52.8646Z" fill="#5382A1" />
                    <path d="M41.3633 46.8506C41.3633 46.8506 39.0089 48.5934 42.6046 48.9653C47.2545 49.445 50.9266 49.4842 57.2807 48.2607C57.2807 48.2607 58.1596 49.1517 59.5415 49.6389C46.5401 53.4407 32.0588 49.9387 41.3633 46.8506Z" fill="#5382A1" />
                    <path d="M52.4408 36.6487C55.0904 39.6993 51.7446 42.4444 51.7446 42.4444C51.7446 42.4444 58.4724 38.9713 55.3826 34.6221C52.4969 30.5662 50.2839 28.5511 62.2642 21.6029C62.2642 21.6029 43.4591 26.2996 52.4408 36.6487Z" fill="#E76F00" />
                    <path d="M66.6628 57.313C66.6628 57.313 68.2163 58.5929 64.952 59.5831C58.7451 61.4635 39.118 62.0313 33.6656 59.6581C31.7057 58.8054 35.3812 57.6221 36.5373 57.3738C37.7431 57.1124 38.4322 57.1611 38.4322 57.1611C36.2525 55.6256 24.3435 60.1761 32.383 61.4793C54.3078 65.0349 72.3498 59.8782 66.6628 57.313Z" fill="#5382A1" />
                    <path d="M43.6868 40.6194C43.6868 40.6194 33.7032 42.9907 40.1513 43.8518C42.8739 44.2163 48.3014 44.1338 53.3569 43.7102C57.4886 43.3617 61.6373 42.6207 61.6373 42.6207C61.6373 42.6207 60.1804 43.2446 59.1264 43.9643C48.9882 46.6307 29.4031 45.3902 35.0414 42.6629C39.8097 40.3579 43.6868 40.6194 43.6868 40.6194Z" fill="#5382A1" />
                    <path d="M61.596 50.63C71.902 45.2747 67.1369 40.1282 63.811 40.8216C62.9958 40.9912 62.6323 41.1383 62.6323 41.1383C62.6323 41.1383 62.9349 40.6642 63.5129 40.459C70.0927 38.1457 75.153 47.2816 61.3889 50.8999C61.3889 50.9001 61.5484 50.7575 61.596 50.63Z" fill="#5382A1" />
                    <path d="M55.3826 10.3835C55.3826 10.3835 61.0902 16.093 49.9692 24.8727C41.0513 31.9154 47.9357 35.931 49.9655 40.519C44.76 35.8223 40.9398 31.6878 43.5027 27.8399C47.2644 22.1914 57.6855 19.4527 55.3826 10.3835Z" fill="#E76F00" />
                    <path d="M44.6995 65.1418C54.5919 65.775 69.7828 64.7904 70.1426 60.1096C70.1426 60.1096 69.451 61.8841 61.967 63.2933C53.5237 64.8822 43.1099 64.6967 36.9335 63.6784C36.9336 63.6782 38.1979 64.7248 44.6995 65.1418Z" fill="#5382A1" />
                    <path d="M43.0782 83.0274C42.145 83.8368 41.1594 84.2912 40.2749 84.2912C39.0124 84.2912 38.3303 83.5342 38.3303 82.32C38.3303 81.0066 39.0611 80.0463 41.9931 80.0463H43.078V83.0274H43.0782ZM45.6532 85.9327V76.9394C45.6532 74.642 44.3429 73.1261 41.1837 73.1261C39.3393 73.1261 37.7237 73.5815 36.4106 74.1623L36.7896 75.7543C37.8235 75.3748 39.1618 75.0215 40.4754 75.0215C42.2953 75.0215 43.0782 75.7543 43.0782 77.2692V78.4058H42.1699C37.7482 78.4058 35.7535 80.1222 35.7535 82.6985C35.7535 84.9219 37.068 86.1857 39.5429 86.1857C41.1338 86.1857 42.3213 85.5289 43.4315 84.5678L43.633 85.9328H45.6532V85.9327Z" fill="#E76F00" />
                    <path d="M54.247 85.9326H51.0353L47.1702 73.3538H49.9748L52.3732 81.0823L52.9063 83.4066C54.1196 80.0461 54.9778 76.6366 55.407 73.3538H58.1352C57.4043 77.4959 56.0889 82.0425 54.247 85.9326Z" fill="#E76F00" />
                    <path d="M66.5672 83.0274C65.6322 83.8368 64.6448 84.2912 63.7603 84.2912C62.5001 84.2912 61.8162 83.5342 61.8162 82.32C61.8162 81.0066 62.5488 80.0463 65.4804 80.0463H66.5672V83.0274ZM69.1419 85.9327V76.9394C69.1419 74.642 67.8283 73.1261 64.6728 73.1261C62.8271 73.1261 61.2109 73.5815 59.8984 74.1623L60.2768 75.7543C61.3112 75.3748 62.652 75.0215 63.9645 75.0215C65.7831 75.0215 66.5672 75.7543 66.5672 77.2692V78.4058H65.6574C61.2343 78.4058 59.2406 80.1222 59.2406 82.6985C59.2406 84.9219 60.554 86.1857 63.0285 86.1857C64.6202 86.1857 65.8074 85.5289 66.9194 84.5678L67.1217 85.9328H69.1419V85.9327Z" fill="#E76F00" />
                    <path d="M32.9301 88.0688C32.1961 89.1406 31.0104 89.9885 29.7124 90.4682L28.441 88.9721C29.429 88.4652 30.2763 87.6464 30.67 86.8838C31.0106 86.2055 31.1515 85.3314 31.1515 83.241V68.8802H33.8873V83.0442C33.8872 85.8389 33.6637 86.9679 32.9301 88.0688Z" fill="#E76F00" />
                  </g>
                  <defs>
                    <clipPath id="clip0_311_7">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </m.svg>

              </div>
              <div className="wrap-content">
                <ul className='font-sans lg:list-disc md:list-disc sm:list-disc list-none'>
                  <m.li className='mb-3' variants={textVariant(1.75)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Lý thuyết ngắn gọn, dễ học bao gồm hơn 20 bài.</m.li>
                  <m.li className='mb-3' variants={textVariant(1.85)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Nội dung mới mẻ cách code trong phiên bản mới ngắn hơn hiệu quả hơn.</m.li>
                  <m.li className='mb-3'
                    variants={textVariant(1.95)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Được hỏi bài mọi lúc mọi nơi luôn có sự giải đáp.</m.li>
                </ul>
                <m.div variants={textVariant(2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'>Vào Học</button>
                </m.div>
              </div>
            </m.div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
              variants={fadeIn('up', 'spring', 2.5, 1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                <m.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  variants={textVariant(2.75)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <g clipPath="url(#clip0_311_2)">
                    <path d="M17.7083 8.06015e-06H82.2917C84.6178 -0.00224053 86.9215 0.466009 89.0709 1.37796C91.2204 2.28991 93.1734 3.62765 94.8182 5.31463C96.463 7.00162 97.7674 9.00472 98.6565 11.2093C99.5457 13.4139 100.002 15.7766 100 18.1624V81.8376C100.002 84.2234 99.5457 86.5861 98.6565 88.7907C97.7674 90.9953 96.463 92.9984 94.8182 94.6854C93.1734 96.3723 91.2204 97.7101 89.0709 98.622C86.9215 99.534 84.6178 100.002 82.2917 100H17.7083C15.3822 100.002 13.0785 99.534 10.9291 98.622C8.7796 97.7101 6.82658 96.3723 5.18177 94.6854C3.53696 92.9984 2.23266 90.9953 1.34351 88.7907C0.454359 86.5861 -0.00218452 84.2234 7.85865e-06 81.8376V18.1624C-0.00218452 15.7766 0.454359 13.4139 1.34351 11.2093C2.23266 9.00472 3.53696 7.00162 5.18177 5.31463C6.82658 3.62765 8.7796 2.28991 10.9291 1.37796C13.0785 0.466009 15.3822 -0.00224053 17.7083 8.06015e-06V8.06015e-06Z" fill="#9999F9" />
                    <path d="M49.8592 16.5C32.5258 16.5 33.6082 24.0168 33.6082 24.0168L33.6276 31.8041H50.1683V34.1422H27.0576C27.0576 34.1422 15.966 32.8843 15.966 50.3738C15.966 67.8634 25.647 67.2431 25.647 67.2431H31.4247V59.1273C31.4247 59.1273 31.1133 49.4463 40.9511 49.4463C50.7889 49.4463 57.3566 49.4463 57.3566 49.4463C57.3566 49.4463 66.5739 49.5953 66.5739 40.5383C66.5739 31.4812 66.5739 25.5627 66.5739 25.5627C66.5739 25.5627 67.9733 16.5 49.8592 16.5ZM40.7385 21.7366C42.3842 21.7366 43.7143 23.0667 43.7143 24.7124C43.7143 26.3581 42.3842 27.6882 40.7385 27.6882C39.0929 27.6882 37.7627 26.3581 37.7627 24.7124C37.7627 23.0667 39.0929 21.7366 40.7385 21.7366Z" fill="url(#paint0_linear_311_2)" />
                    <path d="M50.3514 84.4231C67.6848 84.4231 66.6023 76.9063 66.6023 76.9063L66.583 69.119H50.0422V66.7809H73.153C73.153 66.7809 84.2446 68.0388 84.2446 50.5493C84.2446 33.0598 74.5636 33.68 74.5636 33.68H68.7859V41.7958C68.7859 41.7958 69.0973 51.4768 59.2595 51.4768C49.4216 51.4768 42.8539 51.4768 42.8539 51.4768C42.8539 51.4768 33.6367 51.3278 33.6367 60.3848C33.6367 69.4419 33.6367 75.3605 33.6367 75.3605C33.6367 75.3605 32.2373 84.4231 50.3514 84.4231ZM59.472 79.1865C57.8263 79.1865 56.4962 77.8564 56.4962 76.2107C56.4962 74.565 57.8263 73.2349 59.472 73.2349C61.1177 73.2349 62.4478 74.565 62.4478 76.2107C62.4478 77.8564 61.1177 79.1865 59.472 79.1865Z" fill="url(#paint1_linear_311_2)" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_311_2" x1="22.5277" y1="22.4371" x2="56.2895" y2="56.3118" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#387EB8" />
                      <stop offset="1" stopColor="#366994" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_311_2" x1="43.2965" y1="43.9867" x2="79.5567" y2="78.7259" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE052" />
                      <stop offset="1" stopColor="#FFC331" />
                    </linearGradient>
                    <clipPath id="clip0_311_2">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
                </m.svg>
              </div>
              <div className="wrap-content">
                <ul className='font-sans lg:list-disc md:list-disc sm:list-disc list-none'>
                  <m.li className='mb-3' variants={textVariant(2.75)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Lý thuyết ngắn gọn, dễ học bao gồm hơn 20 bài.</m.li>
                  <m.li className='mb-3' variants={textVariant(2.85)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Nội dung mới mẻ cách code trong phiên bản mới ngắn hơn hiệu quả hơn.</m.li>
                  <m.li className='mb-3'
                    variants={textVariant(2.95)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Được hỏi bài mọi lúc mọi nơi luôn có sự giải đáp.</m.li>
                </ul>
                <m.div variants={textVariant(3)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'>Vào Học</button>
                </m.div>
              </div>
            </m.div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
              variants={fadeIn('up', 'spring', 0.5, 1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                <m.svg className='' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  variants={textVariant(0.75)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <g clipPath="url(#clip0_313_10)">
                    <path d="M17.7083 8.06015e-06H82.2917C84.6178 -0.00224053 86.9215 0.466009 89.0709 1.37796C91.2204 2.28991 93.1734 3.62765 94.8182 5.31463C96.463 7.00162 97.7674 9.00472 98.6565 11.2093C99.5457 13.4139 100.002 15.7766 100 18.1624V81.8376C100.002 84.2234 99.5457 86.5861 98.6565 88.7907C97.7674 90.9953 96.463 92.9984 94.8182 94.6854C93.1734 96.3723 91.2204 97.7101 89.0709 98.622C86.9215 99.534 84.6178 100.002 82.2917 100H17.7083C15.3822 100.002 13.0785 99.534 10.9291 98.622C8.7796 97.7101 6.82658 96.3723 5.18177 94.6854C3.53696 92.9984 2.23266 90.9953 1.34351 88.7907C0.454359 86.5861 -0.00218452 84.2234 7.85865e-06 81.8376V18.1624C-0.00218452 15.7766 0.454359 13.4139 1.34351 11.2093C2.23266 9.00472 3.53696 7.00162 5.18177 5.31463C6.82658 3.62765 8.7796 2.28991 10.9291 1.37796C13.0785 0.466009 15.3822 -0.00224053 17.7083 8.06015e-06V8.06015e-06Z" fill="#9999F9" />
                    <path d="M83.4966 34.4885C83.4961 33.2224 83.2253 32.1035 82.6777 31.1435C82.1397 30.199 81.3341 29.4076 80.2536 28.7819C71.334 23.6388 62.4058 18.5115 53.4892 13.3632C51.0853 11.9754 48.7545 12.0262 46.3685 13.4339C42.8182 15.5274 25.0434 25.7111 19.7467 28.779C17.5654 30.042 16.5039 31.9745 16.5034 34.4862C16.5 44.8292 16.5034 55.1722 16.5 65.5152C16.5 66.7536 16.7598 67.8509 17.2833 68.7965C17.8215 69.7693 18.6383 70.5825 19.7438 71.2224C25.0407 74.2903 42.818 84.4731 46.3674 86.5674C48.7545 87.9759 51.0853 88.0262 53.49 86.6382C62.4069 81.4896 71.3356 76.3623 80.2565 71.2192C81.3619 70.5796 82.1788 69.7659 82.717 68.7938C83.2397 67.848 83.5 66.7509 83.5 65.5123C83.5 65.5123 83.5 44.8318 83.4966 34.4885Z" fill="#A179DC" />
                    <path d="M50.1024 49.8998L17.2832 68.7964C17.8214 69.7692 18.6382 70.5824 19.7437 71.2223C25.0407 74.2902 42.8179 84.473 46.3673 86.5673C48.7545 87.9758 51.0852 88.0262 53.4899 86.6381C62.4068 81.4895 71.3355 76.3622 80.2564 71.2191C81.3618 70.5795 82.1787 69.7658 82.7169 68.7938L50.1024 49.8998Z" fill="#280068" />
                    <path d="M83.4965 34.4884C83.496 33.2223 83.2252 32.1034 82.6776 31.1434L50.1024 49.9L82.7169 68.7937C83.2396 67.8479 83.4994 66.7508 83.4999 65.5122C83.4999 65.5122 83.4999 44.8317 83.4965 34.4884" fill="#390091" />
                    <path d="M69.4254 42.8361V46.3682H72.9576V42.8361H74.7237V46.3682H78.2558V48.1343H74.7237V51.6662H78.2558V53.4323H74.7237V56.9645H72.9576V53.4323H69.4254V56.9645H67.6593V53.4323H64.1274V51.6662H67.6593V48.1343H64.1274V46.3682H67.6593V42.8361H69.4254ZM72.9576 48.134H69.4254V51.6662H72.9576V48.134Z" fill="white" />
                    <path d="M50.1746 25.0969C59.3875 25.0969 67.4309 30.1003 71.7393 37.5374L71.6974 37.4658L60.8576 43.707C58.7222 40.0912 54.8073 37.6509 50.3159 37.6006L50.1743 37.5998C43.3257 37.5998 37.7735 43.152 37.7735 50.0006C37.7712 52.1592 38.3352 54.2807 39.409 56.1532C41.5466 59.8849 45.565 62.4017 50.1746 62.4017C54.8128 62.4017 58.854 59.8529 60.9805 56.0814L60.9289 56.1718L71.7522 62.4419C67.491 69.816 59.5576 74.8039 50.4519 74.9033L50.1746 74.9048C40.9326 74.9048 32.8664 69.8706 28.5687 62.3941C26.4708 58.7443 25.2704 54.513 25.2704 50.0006C25.2704 36.2468 36.42 25.0967 50.1743 25.0967L50.1746 25.0969Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_313_10">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                  </defs>
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

                  <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'>Vào Học</button>
                </m.div>
              </div>
            </m.div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
              variants={fadeIn('up', 'spring', 1.5, 1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">

                <m.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  variants={textVariant(1.75)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <g clipPath="url(#clip0_315_19)">
                    <path d="M17.7083 8.06015e-06H82.2917C84.6178 -0.00224053 86.9215 0.466009 89.0709 1.37796C91.2204 2.28991 93.1734 3.62765 94.8182 5.31463C96.463 7.00162 97.7673 9.00472 98.6565 11.2093C99.5456 13.4139 100.002 15.7766 100 18.1624V81.8376C100.002 84.2234 99.5456 86.5861 98.6565 88.7907C97.7673 90.9953 96.463 92.9984 94.8182 94.6854C93.1734 96.3723 91.2204 97.7101 89.0709 98.622C86.9215 99.534 84.6178 100.002 82.2917 100H17.7083C15.3822 100.002 13.0785 99.534 10.9291 98.622C8.7796 97.7101 6.82658 96.3723 5.18177 94.6854C3.53696 92.9984 2.23266 90.9953 1.34351 88.7907C0.454359 86.5861 -0.00218452 84.2234 7.85865e-06 81.8376V18.1624C-0.00218452 15.7766 0.454359 13.4139 1.34351 11.2093C2.23266 9.00472 3.53696 7.00162 5.18177 5.31463C6.82658 3.62765 8.7796 2.28991 10.9291 1.37796C13.0785 0.466009 15.3822 -0.00224053 17.7083 8.06015e-06V8.06015e-06Z" fill="#000B1D" />
                    <g clipPath="url(#clip1_315_19)">
                      <path d="M50 56.6123C53.8396 56.6123 56.9522 53.5399 56.9522 49.75C56.9522 45.9601 53.8396 42.8878 50 42.8878C46.1604 42.8878 43.0478 45.9601 43.0478 49.75C43.0478 53.5399 46.1604 56.6123 50 56.6123Z" fill="#61DAFB" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.7161 45.4682C15.0293 46.9712 14.3206 48.4209 14.3206 49.7501C14.3206 51.0793 15.0293 52.5289 16.7161 54.0319C18.4027 55.5348 20.9346 56.9617 24.2015 58.193C30.7241 60.6512 39.8448 62.2053 50 62.2053C60.1552 62.2053 69.2759 60.6512 75.7985 58.193C79.0654 56.9617 81.5973 55.5348 83.2839 54.0319C84.9707 52.5289 85.6793 51.0793 85.6793 49.7501C85.6793 48.4209 84.9707 46.9712 83.2839 45.4682C81.5973 43.9654 79.0654 42.5384 75.7985 41.3072C69.2759 38.849 60.1552 37.2949 50 37.2949C39.8448 37.2949 30.7241 38.849 24.2015 41.3072C20.9346 42.5384 18.4027 43.9654 16.7161 45.4682ZM23.0422 38.3103C30.0211 35.6801 39.5526 34.0869 50 34.0869C60.4474 34.0869 69.9789 35.6801 76.9578 38.3103C80.4416 39.6233 83.3729 41.2258 85.4617 43.087C87.5503 44.948 88.9293 47.1969 88.9293 49.7501C88.9293 52.3032 87.5503 54.5521 85.4617 56.4132C83.3729 58.2743 80.4416 59.8769 76.9578 61.1899C69.9789 63.8201 60.4474 65.4132 50 65.4132C39.5526 65.4132 30.0211 63.8201 23.0422 61.1899C19.5583 59.8769 16.6271 58.2743 14.5383 56.4132C12.4497 54.5521 11.0706 52.3032 11.0706 49.7501C11.0706 47.1969 12.4497 44.948 14.5383 43.087C16.6271 41.2258 19.5583 39.6233 23.0422 38.3103Z" fill="#61DAFB" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M37.1149 19.1574C34.9527 18.4669 33.3265 18.586 32.1603 19.2506C30.9941 19.9152 30.0766 21.2458 29.6012 23.4392C29.126 25.6324 29.1399 28.5102 29.6931 31.9184C30.7977 38.7232 33.9945 47.2968 39.0721 55.9777C44.1497 64.6585 50.0735 71.678 55.4917 76.0246C58.2054 78.2016 60.7233 79.6524 62.8851 80.3427C65.0473 81.0332 66.6735 80.9141 67.8397 80.2495C69.0059 79.5849 69.9234 78.2543 70.3988 76.0609C70.874 73.8677 70.8601 70.9899 70.3069 67.5817C69.2023 60.7769 66.0055 52.2033 60.9279 43.5224C55.8503 34.8416 49.9265 27.8221 44.5083 23.4755C41.7946 21.2985 39.2767 19.8477 37.1149 19.1574ZM46.5581 20.9861C52.3552 25.6367 58.5188 32.9878 63.7425 41.9185C68.9662 50.8492 72.3342 59.7934 73.5159 67.0742C74.1059 70.7088 74.1654 74.0158 73.5769 76.7319C72.9883 79.4477 71.7047 81.7511 69.4647 83.0277C67.2246 84.3042 64.5619 84.2498 61.8848 83.395C59.2075 82.54 56.3358 80.8356 53.4419 78.514C47.6448 73.8634 41.4812 66.5123 36.2575 57.5816C31.0338 48.651 27.6658 39.7067 26.4841 32.4259C25.8941 28.7913 25.8346 25.4844 26.4231 22.7682C27.0116 20.0524 28.2953 17.749 30.5353 16.4725C32.7754 15.1959 35.4381 15.2503 38.1152 16.1052C40.7925 16.9601 43.6642 18.6645 46.5581 20.9861Z" fill="#61DAFB" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M70.3988 23.4393C69.9235 21.2458 69.0059 19.9153 67.8397 19.2507C66.6735 18.5861 65.0473 18.467 62.8852 19.1574C60.7233 19.8477 58.2054 21.2985 55.4917 23.4756C50.0735 27.8221 44.1497 34.8416 39.0721 43.5225C33.9945 52.2033 30.7977 60.7769 29.6932 67.5818C29.14 70.99 29.126 73.8677 29.6013 76.0609C30.0766 78.2544 30.9941 79.5849 32.1603 80.2495C33.3265 80.9141 34.9527 81.0332 37.1149 80.3428C39.2768 79.6524 41.7946 78.2016 44.5083 76.0246C49.9265 71.6781 55.8503 64.6586 60.9279 55.9777C66.0055 47.2968 69.2023 38.7232 70.3069 31.9184C70.8601 28.5102 70.874 25.6325 70.3988 23.4393ZM73.5159 32.4259C72.3342 39.7067 68.9662 48.651 63.7425 57.5817C58.5188 66.5124 52.3552 73.8635 46.5581 78.5141C43.6642 80.8357 40.7926 82.5401 38.1152 83.395C35.4381 84.2499 32.7754 84.3043 30.5353 83.0277C28.2953 81.7511 27.0117 79.4478 26.4231 76.7319C25.8346 74.0158 25.8941 70.7088 26.4841 67.0743C27.6659 59.7935 31.0338 50.8492 36.2575 41.9185C41.4812 32.9878 47.6448 25.6367 53.4419 20.9861C56.3358 18.6645 59.2075 16.9601 61.8848 16.1052C64.5619 15.2503 67.2246 15.1959 69.4647 16.4725C71.7048 17.7491 72.9884 20.0524 73.5769 22.7683C74.1654 25.4844 74.1059 28.7914 73.5159 32.4259Z" fill="#61DAFB" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_315_19">
                      <rect width="100" height="100" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_315_19">
                      <rect width="78" height="68.5" fill="white" transform="translate(11 15.5)" />
                    </clipPath>
                  </defs>
                </m.svg>

              </div>
              <div className="wrap-content">
                <ul className='font-sans lg:list-disc md:list-disc sm:list-disc list-none'>
                  <m.li className='mb-3' variants={textVariant(1.75)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Lý thuyết ngắn gọn, dễ học bao gồm hơn 20 bài.</m.li>
                  <m.li className='mb-3' variants={textVariant(1.85)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Nội dung mới mẻ cách code trong phiên bản mới ngắn hơn hiệu quả hơn.</m.li>
                  <m.li className='mb-3'
                    variants={textVariant(1.95)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Được hỏi bài mọi lúc mọi nơi luôn có sự giải đáp.</m.li>
                </ul>
                <m.div variants={textVariant(2)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'>Vào Học</button>
                </m.div>
              </div>
            </m.div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 lg:mb-0 md:mb-0 sm:mb-5 mb-5">
            <m.div className="lg:flex-row md:flex-row sm:flex-row flex-col inner-wrap border-2 p-3 rounded-2xl flex items-center lg:gap-10 md:gap-10 sm:gap-10 gap-0 lg:aspect-square md:aspect-square sm:aspect-auto aspect-auto"
              variants={fadeIn('up', 'spring', 2.5, 1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
            >
              <div className="wrap-svg lg:mb-0 md:mb-0 sm:mb-0 mb-5">
                <m.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                  variants={textVariant(2.75)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <rect width="100" height="100" rx="50" fill="white" />
                  <path d="M82.786 31.1916L49.8042 12.1495L16.8224 31.1916V69.2757L49.8042 88.3178L82.786 69.2757V31.1916Z" fill="#1644F5" />
                  <path d="M66.0918 33.9461C62.8243 30.6785 58.6611 28.4533 54.1288 27.5518C49.5966 26.6502 44.8988 27.1129 40.6295 28.8813C36.3602 30.6497 32.7111 33.6444 30.1438 37.4867C27.5765 41.329 26.2062 45.8462 26.2062 50.4673C26.2062 55.0884 27.5765 59.6056 30.1438 63.4479C32.7111 67.2902 36.3602 70.2849 40.6295 72.0533C44.8988 73.8217 49.5966 74.2844 54.1289 73.3828C58.6611 72.4813 62.8243 70.2561 66.0919 66.9885L56.6235 57.5202C55.2286 58.9151 53.4514 59.8651 51.5166 60.2499C49.5817 60.6348 47.5762 60.4373 45.7537 59.6823C43.9311 58.9274 42.3733 57.649 41.2774 56.0087C40.1814 54.3685 39.5964 52.44 39.5964 50.4673C39.5964 48.4946 40.1814 46.5662 41.2774 44.9259C42.3733 43.2856 43.9311 42.0072 45.7537 41.2523C47.5762 40.4973 49.5817 40.2998 51.5165 40.6847C53.4514 41.0695 55.2286 42.0195 56.6235 43.4144L66.0918 33.9461Z" fill="white" />
                </m.svg>
              </div>
              <div className="wrap-content">
                <ul className='font-sans lg:list-disc md:list-disc sm:list-disc list-none'>
                  <m.li className='mb-3' variants={textVariant(2.75)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Lý thuyết ngắn gọn, dễ học bao gồm hơn 20 bài.</m.li>
                  <m.li className='mb-3' variants={textVariant(2.85)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Nội dung mới mẻ cách code trong phiên bản mới ngắn hơn hiệu quả hơn.</m.li>
                  <m.li className='mb-3'
                    variants={textVariant(2.95)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                  >Được hỏi bài mọi lúc mọi nơi luôn có sự giải đáp.</m.li>
                </ul>
                <m.div variants={textVariant(3)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true }}
                >
                  <button className='mt-14 block mx-auto min-w-max p-5 text-3xl border-4 border-cyan-300 duration-150 hover:border-amber-300 hover:scale-110 rounded-2xl'>Vào Học</button>
                </m.div>
              </div>
            </m.div>
          </div>
        </div>
      </div>

    </>
  )
}

export default memo(Courses)