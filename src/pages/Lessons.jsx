import React, { memo, useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import TimeLine from '../components/TimeLine';
import { getLessons } from '../services/api/utils/getLesson';
import { CommandLineIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useRef } from 'react';
import { useCallback } from 'react';
import { Button } from '@mui/material';

const Lessons = () => {
    const location = useLocation();
    const { categories, param } = location.state
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(0);
    const refShow = useRef(null | HTMLDivElement);
    useEffect(() => {
        setTimeout(() => {
            setLoading(1);

        }, 1500);
        getLessons(param, categories, setData)
        if (refShow.current) {
            refShow.current.innerHTML = data["code"];
        }
    }, [param, loading]) // note data is reference type so loop infinity
    // Create Effect Loading
    useEffect(() => {
        setLoading(0)
    }, [param])
    return (
        <>
            <div className='w-full px-2'>
                <div className="navigate-section">
                    <Button>back</Button>
                </div>
                <div className='font-sans lg:text-lg md:text-lg text-sm pt-10 lg:w-[45rem] md:w-[40rem] sm:w-[35rem] w-[18rem] h-auto bg-gray-700 rounded-3xl mt-10 lg:px-7 md:px-7 sm:px-5 px-3 pb-5 md:mr-auto md:mx-0 mx-auto'>
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