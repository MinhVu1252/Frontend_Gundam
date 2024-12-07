import { Box,  IconButton } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const linkStyles = {
    fontSize: '15px',
    gap: '2px',
    fontWeight: 500,
    lineHeight: '24px',
    textDecoration: 'none',
    color: 'var(--neutral-07100, #141718)',
    transition: 'color 0.3s',
    '&:hover': {
        color: '#38CB89',
    },
};

const NavLinks = () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
        <NavLink to="/" style={linkStyles}>Trang Chủ</NavLink>
        <NavLink to="/danh-muc" style={linkStyles}>
            Danh Mục
            <IconButton
                aria-label='arrowDropDown'
                size='small'
                sx={{ width: '18px', height: '18px' }}
            >
                <ArrowDropDown />
            </IconButton>
        </NavLink>
        <NavLink to="/san-pham" style={linkStyles}>Sản Phẩm</NavLink>
        <NavLink to="/tin-tuc" style={linkStyles}>Tin Tức</NavLink>
        <NavLink to="/ket-noi" style={linkStyles}>Kết Nối</NavLink>
    </Box>
);

export default NavLinks;
