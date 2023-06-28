import React, { useEffect, useMemo, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import TimeLine from '../../components/TimeLine';
import { lesson } from '../../services/api/getLesson';
import { CommandLineIcon } from "@heroicons/react/24/outline";

const Cpp = () => {
    const { cpp_params } = useParams();
    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(0);


    useMemo(() => {
        setTimeout(() => {
            setLoading(1);
            console.log("Loading done")

        }, 5000);
        
        const fetchApi = async () => {
            const data = await lesson(cpp_params);
            console.log(data)
            setData(data);
        }
        fetchApi()
         
    }, [cpp_params])

    
    return (
        <>

            { !location.pathname.includes('timeline') ? (
                <div className='w-full'>
                    <div className='pt-10 lg:w-[45rem] w-auto h-auto bg-gray-800 rounded-3xl mt-10 px-7 pb-5 mx-auto'>
                        {loading === 0 ? (<>
                            Loading
                        </>) : (<>
                            {data && data.map((val, idx) => {
                                return (
                                    <div key={idx} >
                                        <div className='flex items-center content__header mb-2'>
                                            <CommandLineIcon strokeWidth={2} className='h-7 w-7 mr-3' />
                                            <h1 className='font-sans font-semibold lg:text-3xl md:text-3xl text-lg text-slate-50'>{val["title"]}</h1>
                                        </div>

                                        {val["desc"].map((_val, _idx) => {
                                            return (
                                                <p className='mb-3 pl-6 lg:text-lg md:text-lg text-sm' key={_idx + 1}>
                                                    {_val.map((__val, __idx) => {
                                                        return (
                                                            <span key={__idx + 2} >
                                                                {__val["link"] !== '' ? (
                                                                    <a href={__val["link"]} target='_blank' className='underline'>
                                                                        {__val["content"]}
                                                                    </a>
                                                                ) : (<>
                                                                    {__val["content"]}
                                                                </>)}
                                                                {__val["code"] !== '' && (<span className='block'>
                                                                    {__val["code"]}
                                                                </span>)}
                                                            </span>
                                                        )
                                                    })}
                                                </p>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </>)}

                    </div>
                </div>
            ) : (<>
                <TimeLine />
            </>)}

        </>

    )
}

export default Cpp