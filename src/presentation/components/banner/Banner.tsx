import { Box } from '@mui/material';
import BannerContainer from './BannerContainer';
import BackgroundImage from './BackgroundImageBanner';
import BannerText from './BannerText';
import ActionButton from './ActionButtonBanner';

const Banner = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
        }}
    >
        <BannerContainer>
            <BackgroundImage />
            <BannerText />
            <Box
                sx={{
                    position: 'absolute',
                    top: '65%',
                    left: { xs: '5%', md: '10%' },
                }}
            >
                <ActionButton />
            </Box>
        </BannerContainer>
    </Box>
);

export default Banner;
