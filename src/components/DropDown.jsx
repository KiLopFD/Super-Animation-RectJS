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
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25.5" cy="12" r="6" fill="#FCFCFC" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6293 9.50828C28.587 9.50282 28.5438 9.5 28.5 9.5H22.3773C21.9266 10.0622 21.6246 10.7488 21.5309 11.5H28.5C28.874 11.5 29.2 11.2947 29.3716 10.9906C29.2289 10.4418 28.9726 9.93884 28.6293 9.50828ZM17.5154 11.5C17.5582 10.8056 17.6896 10.1353 17.8984 9.5H7.5C6.94772 9.5 6.5 9.94772 6.5 10.5C6.5 11.0523 6.94772 11.5 7.5 11.5H17.5154ZM19.2546 17C19.9047 17.8109 20.7094 18.4925 21.624 19H7.5C6.94772 19 6.5 18.5523 6.5 18C6.5 17.4477 6.94772 17 7.5 17H19.2546ZM7.5 24.5C6.94772 24.5 6.5 24.9477 6.5 25.5C6.5 26.0523 6.94772 26.5 7.5 26.5H28.5C29.0523 26.5 29.5 26.0523 29.5 25.5C29.5 24.9477 29.0523 24.5 28.5 24.5H7.5Z" fill="#FCFCFC" />
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