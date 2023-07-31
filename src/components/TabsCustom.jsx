import { memo, useEffect, useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

const TabCustom = ({ testCaseBase, res }) => {
    const [loading, setLoading] = useState(false);
    const [signal, setSignal] = useState(null);
    // const data = [
    //     {
    //         label: "HTML",
    //         value: "html",
    //         desc: `It really matters and then like it really doesn't matter.
    //         What matters is the people who are sparked by it. And the people
    //         who are like offended by it, it doesn't matter.`,
    //     },
    //     {
    //         label: "React",
    //         value: "react",
    //         desc: `It really matters and then like it really doesn't matter.
    //         What matters is the people who are sparked by it. And the people
    //         who are like offended by it, it doesn't matter.`,
    //     },
    // ];
    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
        }, 2000)
    }, [])

    useEffect(()=>{
        console.log(res)
        if (res !== null)
            setSignal(res)
    },[res])

    return (
        <>
            {loading && <>
                <Tabs id="custom-animation" value="html">
                    <div className="inner-wrap">
                        <TabsHeader className="pt-1 gap-2 duration-150">
                            <p className="inner-title">Bấm đây để xem: </p>
                            {testCaseBase.map((val, idx) => (
                                <Tooltip title={`${signal===null ? 'Chấm Vàng: Chưa Nộp':(signal[idx].result!=='Pass' ? 'Chấm Đỏ: Sai':'Chấm Xanh: Đúng')}`} arrow key={idx} >
                                    <Tab value={idx} className="w-auto p-1 bg-[#1a1919] rounded-lg hover:bg-[#413a3a]">
                                        <Badge color={`${signal===null ? 'warning':(signal[idx].result!=='Pass' ? 'error':'success')}`} variant="dot">
                                            <p className="px-2 py-1">{`Test ${idx}`}</p>
                                        </Badge>

                                    </Tab>
                                </Tooltip>
                            ))}

                        </TabsHeader>
                        <TabsBody
                            animate={{
                                initial: { y: 250 },
                                mount: { y: 0 },
                                unmount: { y: 250 },
                            }}
                            className="w-full p-0 pt-2"
                        >
                            {testCaseBase.map((val, idx) => (
                                <TabPanel key={idx} value={idx} className="w-full p-0">
                                    <p className="inner-desc">Input: {Object.values(val.input).map((_val, _idx) => {
                                        return `${_val} `
                                    })}</p>
                                    <div className="inner-desc">Output: {typeof val.output === 'string' ? (<>
                                        {val.output.split('\n').map((_val, _idx) => {
                                            return <p key={_idx}>{_val}</p>
                                        })}
                                    </>) : (<p>{val.output}</p>)}</div>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>

                </Tabs>

            </>}

        </>
    );
}
export default memo(TabCustom)