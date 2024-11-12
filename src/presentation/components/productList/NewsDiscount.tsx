import React, { useState, useEffect } from 'react';
import { Box, Button, CardContent, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gundam from '../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png';
import gundamImage from '../../../assets/logo/5f0118b49850ce36ca7f7a619a6f2d3e-removebg-preview.png';
import gundamImage2 from '../../../assets/logo/62a02fbee7bc75780b1d09f54bd835f7.png';

const promotions = [
    {
        title: 'FULL SET & ACCESSORIES',
        discount: '32% Discount',
        description: 'For all electronics products',
        endDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
        image: gundam,
    },
    {
        title: 'GUNDAM MODELS',
        discount: '25% Discount',
        description: 'On all Gundam models',
        endDate: new Date(new Date().getTime() + 5 * 60 * 60 * 1000),
        image: gundamImage,
    },
    {
        title: 'CUSTOM ACCESSORIES',
        discount: '15% Discount',
        description: 'Custom accessories for models',
        endDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
        image: gundamImage2,
    }
];

export default function NewsDiscount() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const currentPromotion = promotions[currentIndex];

    const calculateTimeRemaining = () => {
        const now = new Date().getTime();
        const endDate = currentPromotion.endDate.getTime();

        const timeDiff = endDate - now;

        if (timeDiff <= 0) {
            return "Expired";
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return `${days} days : ${hours}h : ${minutes}m : ${seconds}s`;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, [currentPromotion]);

    return (
        <Box sx={{}}>
            <Box sx={{
                width: '312px',
                bgcolor: 'var(--Warning-300, #F3DE6D)',
                display: 'flex',
                flexDirection: 'column',
                height: '716px',
                marginLeft: '35px',
                borderRadius: '4px',
                padding: '32px 18px 0px 18px',
            }}>
                <CardContent sx={{ maxWidth: '276px' }}>
                    <Typography variant="h6" gutterBottom sx={{
                        color: 'var(--Danger-600, #BE4646)',
                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '20px',
                        fontStyle: 'normal',
                    }}>
                        {currentPromotion.title}
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{
                        color: 'var(--Gray-900, #191C1F)',
                        textAlign: 'center',
                        fontSize: '32px',
                        fontWeight: 600,
                        lineHeight: '40px',
                        fontStyle: 'normal'
                    }}>
                        {currentPromotion.discount}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{
                        color: 'var(--Gray-700, #475156)',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '24px',
                        fontStyle: 'normal',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                    }}>
                        {currentPromotion.description}
                    </Typography>
                    <Box
                        sx={{
                            marginTop: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'var(--Gray-900, #191C1F)',
                                fontSize: '14px',
                                fontWeight: 500,
                                lineHeight: '20px',
                                fontStyle: 'normal',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Offers ends in:
                        </Typography>
                        <Chip
                            label={timeRemaining}
                            variant="outlined"
                            sx={{
                                borderRadius: '4px',
                                backgroundColor: '#FFF',
                                border: 'none',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '20px',
                                padding: '6px 0px',
                                whiteSpace: 'nowrap',
                                marginLeft: '6px'
                            }}
                        />
                    </Box>
                </CardContent>
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        padding: '4px 32px',
                        marginTop: '16px',
                        borderRadius: '3px',
                        background: 'var(--Primary-500, #FA8232)',
                        color: 'var(--Gray-00, #FFF)',
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: '56px',
                        fontStyle: 'normal',
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.192px'
                    }}
                >
                    SHOP NOW
                </Button>
                <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                    <img src={currentPromotion.image} alt="Robot figure" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            </Box>
        </Box>
    );
}
