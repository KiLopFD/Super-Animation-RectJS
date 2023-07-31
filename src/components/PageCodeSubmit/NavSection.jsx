import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { animate, motion as m } from "framer-motion";
import { fadeIn, navVariants, slideIn, staggerContainer } from "../../services/motion";
import { memo } from "react";

const NavSection = () => {
    let location = useLocation();
    const { categories, param } = location.state
    // console.log(categories, param)
    return (
        <>
            <div className="h-[40px] bg-[#414141] col-span-6 flex justify-start sm:hidden lg:flex md:flex px-2 sticky top-0 left-0">
                <div className="relative lg:block">
                    <Link to={`/code-submit/${categories}/${param}/description`} className='px-4 py-2 lg:text-xl  font-semibold font-sans hover:text-amber-300' state={{categories:categories, param:param}}>Đề bài</Link>
                    {location.pathname.includes('description') && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
                        variants={{
                            hidden: {
                                width: 0
                            },
                            show: {
                                width: "100%",
                                transition: {
                                    type: 'tween',
                                    damping: 25,
                                    velocity: 0.025,
                                    stiffness: 50,
                                    restDelta: 0.001,
                                    duration: 0.5
                                }
                            },
                        }}
                        initial='hidden'
                        whileInView='show'
                    >
                    </m.div>)}
                </div>
                <div className="relative">
                    <Link to={`/code-submit/${categories}/${param}/reference`} className='px-4 py-2 lg:text-xl  font-semibold font-sans' state={{categories:categories, param:param}}>Hướng dẫn</Link>
                    {location.pathname.includes('reference') && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
                        variants={{
                            hidden: {
                                width: 0
                            },
                            show: {
                                width: "100%",
                                transition: {
                                    type: 'tween',
                                    damping: 25,
                                    velocity: 0.025,
                                    stiffness: 50,
                                    restDelta: 0.001,
                                    duration: 0.5
                                }
                            },
                        }}
                        initial='hidden'
                        whileInView='show'
                    >
                    </m.div>)}
                </div>
                <div className="relative">
                    <Link to={`/code-submit/${categories}/${param}/solution`} className='px-4 py-2 lg:text-xl  font-semibold font-sans' state={{categories:categories, param:param}}>Lời giải</Link>
                    {location.pathname.includes('solution') && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
                        variants={{
                            hidden: {
                                width: 0
                            },
                            show: {
                                width: "100%",
                                transition: {
                                    type: 'tween',
                                    damping: 25,
                                    velocity: 0.025,
                                    stiffness: 50,
                                    restDelta: 0.001,
                                    duration: 0.5
                                }
                            },
                        }}
                        initial='hidden'
                        whileInView='show'
                    >
                    </m.div>)}
                </div>
                <div className="relative">
                    <Link to={`/code-submit/${categories}/${param}/submissions`} className='px-4 py-2 lg:text-xl  font-semibold font-sans' state={{categories:categories, param:param}}>Lịch sử nộp bài</Link>
                    {location.pathname.includes('submissions') && (<m.div className="absolute origin-right h-1 bg-slate-200 top-9 rounded-2xl"
                        variants={{
                            hidden: {
                                width: 0
                            },
                            show: {
                                width: "100%",
                                transition: {
                                    type: 'tween',
                                    damping: 25,
                                    velocity: 0.025,
                                    stiffness: 50,
                                    restDelta: 0.001,
                                    duration: 0.5
                                }
                            },
                        }}
                        initial='hidden'
                        whileInView='show'
                    >
                    </m.div>)}
                </div>

            </div>
        </>
    )
}

export default NavSection