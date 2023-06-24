import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";



const Layout = () => {
  let [stateMode, setMode] = useState('dark')


  return (
    <>
      <div style={{ background: stateMode === 'light' ? '#183250' : '#0F172A' }} className='h-full w-full relative'>
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <Header setMode={setMode} className='grid-col-8' />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Layout;
