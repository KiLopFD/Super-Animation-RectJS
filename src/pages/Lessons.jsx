import React, { memo, useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import TimeLine from '../components/TimeLine';
import { getLessons } from '../services/api/utils/getLesson';
import { CommandLineIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useRef } from 'react';
import { useCallback } from 'react';
import { Button, IconButton } from '@mui/material';

const Lessons = () => {
    const location = useLocation();
    const { categories, param } = location.state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(0);
    const refShow = useRef(null | HTMLDivElement);
    useEffect(() => {
        getLessons(param, categories, setData, setLoading)
        if (refShow.current) {
            refShow.current.innerHTML = data["code"];
        }
    }, [param, loading]) // note data is reference type so loop infinity
    // Create Effect Loading
    useEffect(() => {
        setLoading(0);
    }, [param])
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(-1)
    }
    return (
        <>
            <div className='w-full px-2 py-3'>
                <div className="navigate-section flex h-14 items-center">
                    <div className="wrap-btn-cus">
                        <IconButton color='primary' onClick={()=>{handleNavigate()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </IconButton>
                    </div>

                </div>
                <div className='font-sans lg:text-lg md:text-lg text-sm pt-10 min-[1143px]:w-[40rem] min-[768px]:w-[30rem] w-[18rem] h-auto bg-gray-700 rounded-3xl lg:px-7 md:px-7 sm:px-5 px-3 pb-5 md:mr-auto md:mx-0 mx-auto'>
                    {loading === 0 ? (<>
                        Loading
                    </>) : (
                        <>
                            {/* Edit Code */}
                            <div>


                            </div>
                            {/* End Edit Code */}
                            <div ref={refShow}></div>
                        </>
                    )}

                </div>
            </div>

        </>

    )
}

export default memo(Lessons)