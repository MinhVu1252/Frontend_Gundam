import { Box } from '@mui/material';
import heroImage from '../../../assets/logo/62a02fbee7bc75780b1d09f54bd835f7.png';

const BackgroundImage = () => (
    <Box
        sx={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100%',
            height: '100%',
        }}
    >
        <img
            src={heroImage}
            alt="Hero"
            style={{
                transform: 'rotate(-12deg) scale(1.8) translate(20%, 12%)',
                objectFit: 'cover',
                height: '100%',
            }}
        />
    </Box>
);

export default BackgroundImage;
