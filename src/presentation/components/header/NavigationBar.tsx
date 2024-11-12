import { AppBar, Toolbar, Box } from '@mui/material';
import NavLinks from './NavLinks';
import UserActions from './UserActions';
import Logo from './LogoComponent';

const NavigationBar = () => (
    <AppBar elevation={0} sx={{ position: 'static', background: '#fff' }}>
        <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            alignItems: 'center',
        }}>
            <Logo />
            <NavLinks />
            <UserActions />
        </Toolbar>
    </AppBar>
);

export default NavigationBar;
