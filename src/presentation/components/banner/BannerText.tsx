import { Box, Typography, useTheme } from '@mui/material';

const BannerText = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: '5%', md: '10%' },
                transform: 'translateY(-50%)',
                color: '#fff',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '48px', md: '72px' },
                    lineHeight: { xs: '56px', md: '80px' },
                    fontWeight: 500,
                    letterSpacing: '-2px',
                    marginBottom: theme.spacing(2),
                }}
            >
                More than
                <br /> just a game.
                <br /> It's a lifestyle.
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '16px', md: '20px' },
                    lineHeight: '32px',
                    fontWeight: 400,
                    maxWidth: '497px',
                    marginBottom: theme.spacing(8),
                }}
            >
                Whether you're just starting out, have played
                <br /> your whole life, or you're a Tour pro, your
                <br /> swing is like a fingerprint.
            </Typography>
        </Box>
    );
};

export default BannerText;
