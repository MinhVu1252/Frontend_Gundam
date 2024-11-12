import { CardMedia } from '@mui/material';
import logo from '../../../assets/logo/JoyBoy.png';

const Logo = () => (
    <CardMedia
        component="img"
        sx={{
            width: '100px',
            height: '54px',
            objectFit: 'contain',
            alignItems: 'flex-start',
            paddingLeft: '16px'
        }}
        image={logo}
        alt="Logo"
    />
);

export default Logo;
