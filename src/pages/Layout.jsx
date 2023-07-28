import React, { Suspense, useState, memo, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../components";
import { cmpBsLbUb } from "../services/api/utils/getProblem";



const Layout = () => {
  let [stateMode, setMode] = useState('dark')
  const currentUrl = useLocation();
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     const data = await cmpBsLbUb()
  //     console.log(data)
  //   }
  //   fetchAPI()
  // },[])


  return (
    <>
      <div style={{ background: stateMode === 'light' ? '#183250' : '#0F172A' }} className='h-full w-full relative'>
        <div className="relative">
          <Suspense fallback={<div>Loading...</div>}>
            <Header setMode={setMode} className='grid-col-8' />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet context={{currentUrl: currentUrl}}/>
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default memo(Layout);
