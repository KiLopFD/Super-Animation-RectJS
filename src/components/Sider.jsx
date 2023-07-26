import React, { useEffect, useMemo, useState } from 'react'
import { memo } from 'react'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Drawer,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  CodeBracketSquareIcon,
  BookmarkSquareIcon,
  CodeBracketIcon
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  ChevronDoubleLeftIcon
} from "@heroicons/react/24/outline";
import { Link, useLocation, useParams } from 'react-router-dom';
import { getLessons } from '../services/api/utils/getLesson';
import { motion as m } from 'framer-motion';
import { slideIn } from '../services/motion';
import { getEx } from '../services/api/utils/getEx';
const Sider = ({ method }) => {
  // set up state:
  const location = useLocation();
  const { categories, param } = location.state
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [openSider, setSider] = useState(0);

  // end set up state
  // call api:
  const [data, setData] = useState([]);
  useEffect(() => {
    if (method === 'lesson')
      getLessons('timeline', categories, setData)
    else getEx('list-chap', categories, setData)
  }, [])
  // end call api

  return (
    <>
      <div className={`z-10 absolute top-0 left-0 h-full w-full backdrop-blur-sm blur-sm ${openSider === 0 ? 'hidden' : 'block'}`}></div>
      <Card className={`h-auto w-m-max lg:w-[25rem] ${openSider === 0 ? 'w-[4rem] duration-300 transition-all ease-out' : 'w-[25rem] duration-300 transition-all'} p-4 bg-blue-700 mt-10 relative z-20`}>
        <Button className='relative top-0 -left-10 p-3 bg-blue-600 rounded-full shadow-lg w-fit lg:hidden block' onClick={() => {
          if (openSider === 0)
            setSider(1);
          else setSider(0);
        }}>
          <ChevronDoubleLeftIcon className={'h-8 w-8'} strokeWidth={2.5} />
        </Button>

        <div className="mb-2 flex items-center gap-4 py-2">
          <p>C++</p>
          <Typography className={`lg:text-2xl md:text-2xl text-sm font-sans font-bold lg:block ${(openSider === 0) ? 'hidden' : 'block'}`}>
            {/* <Link to='/lesson/cpp/chap-0-1'></Link> */}
            {method==='lesson'?'Danh sách bài học':'Danh sách bài tập'}
          </Typography>
        </div>
        <List className='p-0'>
          {data.map((val, idx) => {
            return (
              <Accordion
                open={open === (idx + 1) && (openSider !== 0 || window.innerWidth >= 968)}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`lg:block ${(openSider === 0) ? 'hidden' : 'block'} mx-auto h-4 w-4 transition-transform ${open === (idx + 1) ? "rotate-180" : ""}`}
                  />
                }
                key={idx}
              >
                <ListItem className="p-0" selected={open === (idx + 1)}>
                  <AccordionHeader onClick={() => handleOpen(idx + 1)} className="border-b-0 py-2 justify-center">
                    <ListItemPrefix>
                      <BookmarkSquareIcon className={`h-7 w-7 ${openSider === 0 ? 'block' : 'hidden'}`} />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className={`lg:text-2xl md:text-2xl text-sm text-start pl-2 mr-auto font-normal lg:block ${(openSider === 0) ? 'hidden' : 'block'}`}>
                      {/* <Link to={`/${method}/${categories}/${val["param"]}`} state={{categories:categories, param:val["param"]}}></Link> */}
                      {method==='exercise'?val["title"]:(<Link to={`/${method}/${categories}/${val["param"]}`} state={{categories:categories, param:val["param"]}}></Link>)}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  <List className="p-0 border-l-2">
                    {val["list"].map((_val, _idx) => {
                      return (
                        <ListItem key={_idx} className='lg:text-2xl md:text-2xl text-sm '>
                          <ListItemPrefix>
                            <CodeBracketIcon strokeWidth={3} className="h-5 w-5 ml-3 mr-2 hidden sm:block md:block lg:block" />
                          </ListItemPrefix>
                          <Typography className='lg:text-2xl md:text-2xl text-sm'>
                            <Link to={method==='exercise'?`/code-submit/${method}/${_val.param}`:`lesson/${categories}/${_val.param}`} state={{categories: categories,param:_val["param"]}}>{_val["title"]}</Link>
                          </Typography>

                        </ListItem>
                      )
                    })}
                  </List>
                </AccordionBody>
              </Accordion>
            )
          })}


          {/* End List */}
          <hr className="my-2 border-blue-gray-50" />
          {/* <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem> */}
        </List>
        {/* <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
          <CubeTransparentIcon className="mb-4 h-12 w-12" />
          <Typography variant="h6" className="mb-1">
            Upgrade to PRO
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
            and premium.
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
            <Typography as="a" href="#" variant="small" className="font-medium">
              Upgrade Now
            </Typography>
          </div>
        </Alert> */}
      </Card>
    </>
  )
}

export default memo(Sider)
