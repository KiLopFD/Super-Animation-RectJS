import React, { memo } from 'react'

const SplitBar = () => {
    return (
        <>
            <div className="group flex h-full items-center justify-center transition hover:bg-blue-s dark:hover:bg-dark-blue-s hover:cursor-col-resize">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 14" width="2" height="14" fill="currentColor" className="text-gray-5 dark:text-dark-gray-5 transition -translate-y-6 group-hover:text-white dark:group-hover:text-white"><circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 1)"></circle><circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 7)"></circle><circle r="1" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1 13)"></circle></svg>
            </div>
        </>
    )
}

export default memo(SplitBar)