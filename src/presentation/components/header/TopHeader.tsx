import React from 'react';
import { IconButton, Box, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LocalOfferOutlined } from '@mui/icons-material';

const TopHeader: React.FC = () => {
    return (
        <Box
            sx={{
                background: 'var(--Green, #38CB89)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
                px: 2
            }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1
            }}>
                <IconButton aria-label="localoffer" size="small" sx={{
                    width: '24px',
                    height: '24px',
                    px: 3
                }}>
                    <LocalOfferOutlined />
                </IconButton>
                <Typography variant="body1"
                    sx={{
                        lineHeight: '22px',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        color: 'var(--Brand-color, #000)'
                    }}>
                    30% off storewide — Limited time!{' '}
                </Typography>
                <Link href="#"
                    sx={{
                        fontStyle: 'normal',
                        lineHeight: '24px',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        color: 'var(--Brand-color, #000)',
                        px: 1,
                        textDecoration: 'underline'
                    }}>
                    Shop Now →
                </Link>
            </Box>

            <IconButton aria-label="close" size="small">
                <CloseIcon />
            </IconButton>
        </Box >
    );
};

export default TopHeader;
