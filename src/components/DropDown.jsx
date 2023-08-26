import { memo, useState } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const DropDown = () => {

    return (
        <Menu>
            <MenuHandler>
                {/* <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        /> */}
                <div className="wrap-avatar cursor-pointer">
                    <svg className='h-10 w-10 p-1 border-[#ffffff26] border rounded-3xl hover:bg-[#000000] duration-500 ease-in-out bg-[#0F051D] hover:shadow-pink transition-all' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="4" r="2" fill="white" />
                        <circle cx="12" cy="12" r="2" fill="#DF1463" />
                        <circle cx="12" cy="20" r="2" fill="white" />
                    </svg>


                </div>
            </MenuHandler>
            <MenuList className='relative z-50 min-w-[150px]'>
                <MenuItem className="flex items-center gap-2">

                    <Typography className="font-normal">
                        <Link to={'/'}>Trang chủ</Link>
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <Typography className="font-normal">
                        <Link to={'/courses'}>Khóa học</Link>
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <Typography className="font-normal">
                        <Link to={'/about'}>Giới Thiệu</Link>
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <Typography className="font-normal">
                        <Link to={'/contact'}>Liên hệ</Link>
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default memo(DropDown)