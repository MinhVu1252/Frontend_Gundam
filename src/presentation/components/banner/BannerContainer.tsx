import { Box } from '@mui/material';

const BannerContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box
        sx={{
            height: { xs: '600px', md: '820px' },
            width: '100%',
            maxWidth: '1440px',
            position: 'relative',
            backgroundColor: '#000',
            overflow: 'hidden',
        }}
    >
        {children}
    </Box>
);

export default BannerContainer;
