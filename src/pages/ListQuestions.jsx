import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ListQuestions = () => {
    const location = useLocation()
    // index of array data
    const { categories, data, index } = location.state
    // console.log(categories, data, index)
    const _data = data[index];

    return (
        <>
            {_data.list.map((val, idx) => {
                return (<div key={idx}>
                    <div className={`chap-item flex lg:flex-row md:flex-row sm:flex-col flex-col items-center  justify-between mb-5 py-4 lg:px-10 md:px-10 px-3 border-2 rounded-xl min-w-fit`}>
                        <p className="inner-title lg:mb-0 md:mb-0 sm:mb-4 mb-4 max-w-[300px]">{val.title}</p>
                        <button className="border-cyan-400 border-2 px-4 py-3 rounded-2xl hover:scale-110 hover:duration-300 hover:border-amber-400"><Link to={`/code-submit/${categories}/${val.param}/description`} state={{categories:categories,param:val.param}}>Giải</Link></button>
                    </div>
                </div>)
            })}
        </>
    )
}

export default memo(ListQuestions)