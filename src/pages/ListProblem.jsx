import React, { memo, useEffect, useMemo, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Sider } from '../components';
import { getEx } from "../services/api/utils/getEx";
import ListQuestions from './ListQuestions';

const ListProblem = () => {
    const [data, setData] = useState([])
    const [questions, setQuestions] = useState(0)
    const location = useLocation();
    const { categories, param } = location.state
    const [loading, setLoading] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setLoading(1)
        }, 2000);
        getEx(param, categories, setData)
    }, [loading])
    const handleClick = (val) => {
        // console.log(val)
        setQuestions(val)
    }
    useEffect(()=>{
        if (location.pathname == `/exercise/${categories}`)
            setQuestions(0)
    }, [location.pathname])

    return (
        <>
            <div className="grid grid-cols-12">
                <div className='col-span-2'></div>
                <div className='col-span-7 pt-16'>
                    <div className="inner-wrap lg:px-16 md:px-10 px-3">
                        <p className='text-center mb-4 text-3xl font-sans font-bold'>Danh Sách Bài Tập</p>
                        {/* {questions !== 0 && (<ListQuestions key={Math.random()*100+50} data={data[questions - 1]} categories={categories} />)} */}
                        {loading === 1 && data.length > 0 && questions === 0 ? (<>
                            {data.map((val, idx) => {
                                return (
                                    <div key={idx} className={`chap-item flex lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-between mb-5 py-4 lg:px-10 md:lg-10 px-3 border-2 rounded-xl`}>
                                        <p className="inner-title lg:mb-0 md:mb-0 sm:mb-4 mb-4 lg:text-start md:text-start text-center">{val.title}</p>
                                        <button className="border-cyan-400 border-2 px-4 py-3 rounded-2xl hover:scale-110 hover:duration-300 hover:border-amber-400"><Link onClick={()=>handleClick(idx+1)} to={`/exercise/${categories}/list-all-questions`}state={{categories:categories, data:data, index:idx}}>Vào ngay</Link></button>
                                    </div>
                                )
                            })}
                        </>) : (<>
                            <Outlet/>
                        </>)}
                        
                    </div>
                </div>
                <div className='col-span-3 flex justify-end'>
                    <Sider method={'exercise'} />
                </div>
            </div>
        </>
    )
}

export default memo(ListProblem)