import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  ChevronDoubleLeftIcon
} from "@heroicons/react/24/outline";

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

const CollapseDefault = ({ categories, setCategories, data }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (val) => {
    setCategories(val)
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="flex items-center gap-1">
          <p>{categories}</p>
          <ChevronDownIcon className={`w-5 h-5 duration-150 ${open ? 'rotate-180' : ''}`} strokeWidth={2.5} />
        </div>

      </IconButton>
      <Menu

        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose('javascript')}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {data.map((option, idx) => (
          <MenuItem className='bg-[#333]' key={idx} selected={option === data[0]} onClick={() => handleClose(option)}>
            <p className='text-black text-sm'>{option}</p>
          </MenuItem>
        ))}
      </Menu>
    </div>)
}

export default React.memo(CollapseDefault)