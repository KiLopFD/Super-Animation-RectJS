import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";

import { memo, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getEx } from "../services/api/utils/getEx";
import { getLessons } from "../services/api/utils/getLesson";
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const TimeLine = () => {
    const [data, setData] = useState([])
    const location = useLocation();
    const { categories, param, lesson_done } = location.state
    const [loading, setLoading] = useState(0);
    useEffect(() => {
        if (loading === 0)
            getLessons('timeline', categories, setData, setLoading)
    }, [loading])
    return (
        // flex-col help width fit 
        <div className="w-full flex flex-col items-center pt-10 w-m-min">
            <p className="text-white mb-5 font-sans text-3xl">Danh sách bài học</p>
            <div className="pl-3">
                <ol className="relative border-l-4 border-gray-200 dark:border-gray-700 h-fit border-b-2 w-fit mx-auto">
                    {loading === 1 ? data?.map((val, idx) => {
                        return (
                            <li className={`${idx !== data.length - 1 ? 'mb-10' : ''} pl-6`} key={idx}>
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                </span>
                                <p className="flex items-center text-xl font-semibold font-sans text-gray-900 dark:text-white mb-3 border-2 border-[#0F1729] hover:bg-[#000000] duration-500 ease-in-out bg-[#0F1729] hover:shadow-pink transition-all px-2 rounded-2xl"><Link to={`/lesson/${categories}/${val["param"]}`} state={{ categories: categories, param: val["param"], lesson_done: lesson_done}}>{val["title"]}</Link></p>

                                {val["list"].map((_val, _idx) => {
                                    return (
                                        <p className="py-2 border-2 border-[#0F1729] pl-2 rounded-3xl text-base font-normal text-gray-500 dark:text-gray-400 hover:bg-[#000000] duration-500 ease-in-out bg-[#0F1729] hover:shadow-pink transition-all" key={_idx}><Link to={`/lesson/${categories}/${_val["param"]}`} state={{ categories: categories, param: _val["param"], lesson_done: lesson_done}}>{_val["title"]}</Link></p>
                                    )
                                })}

                            </li>
                        )
                    }) : (<>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        <Skeleton animation="wave" style={{ background: "#ffffff21", marginBottom:"10px" }} width="500px" height="30px" variant="rounded"/>
                        
                    </>)
                    }

                </ol>
            </div>


        </div>
    );
}

export default memo(TimeLine);