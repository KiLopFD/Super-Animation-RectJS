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
import { useParams } from "react-router-dom";
import { lesson } from "../services/api/getLesson";

const TimeLine = () => {
    const { cpp_params } = useParams();
    const [data,setData] = useState([])
    useMemo(() => {
        const fetchAPI = async () => {
            const data = await lesson(cpp_params)
            setData(data);
        }   
        fetchAPI()
    },[])
    return (
        <div className="w-full flex flex-col items-center pt-10 w-m-min">
            <p className="text-white mb-5 font-sans text-5xl">Lộ Trình</p>
            <ol className="relative border-l-4 border-gray-200 dark:border-gray-700 h-fit min-w-fit">
                {data?.map((val, idx) => {
                    return (
                        <li className={`${idx !== data.length - 1 ? 'mb-10': ''} ml-6`} key={idx}>
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">{val["title"]}</h3>

                            {val["list"].map((_val, _idx) => {
                                return (
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" key={_idx}>{_val["title"]}</p>
                                )
                            })}

                        </li>
                    )
                })
                }

            </ol>

        </div>
    );
}

export default memo(TimeLine);