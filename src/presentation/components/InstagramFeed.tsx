import React from 'react';
import {
    Box,
    Typography,
    Container
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InstagramFeed() {
    return (
        <Container sx={{ maxWidth: '1440px', mx: 'auto', marginTop: '60px' }}>
            <Box
                sx={{
                    textAlign: 'center',
                    paddingTop: '20px'
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'var(--neutral-04100, #6C7275)',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '16px',
                        textTransform: 'uppercase'
                    }}
                >
                    Newsfeed
                </Typography>

                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        color: 'var(--neutral-07100, #141718)',
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '44px',
                        letterSpacing: '-0.4px',
                        marginTop: '16px'
                    }}
                >
                    Instagram
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'var(--neutral-07100, #141718)',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '32px',
                        marginTop: '16px'
                    }}
                >
                    Follow us on social media for more discount & promotions
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: 'var(--neutral-04100, #6C7275)',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '28px',
                        marginTop: '16px'
                    }}
                >
                    @Glitch_official
                </Typography>
            </Box>
        </Container>
    );
}