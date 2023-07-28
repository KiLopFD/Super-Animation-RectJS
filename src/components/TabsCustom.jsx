import { memo } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const TabCustom = () => {
    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people
            who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people
            who are like offended by it, it doesn't matter.`,
        },
    ];

    return (
        <Tabs id="custom-animation" value="html">
            <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} className="w-[70px]">
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
                className="w-full p-0"
            >
                {data.map(({ value, desc }) => (
                    <TabPanel  key={value} value={value} className="w-full p-0">
                        <p className="inner-desc">{desc}</p>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
export default memo(TabCustom)