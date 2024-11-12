import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    styled
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import gundamImage from '../../../assets/logo/09fa5a36e32b2c7e59fab631e2019d47.png';
import gundam from '../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png';

const StyledButton = styled(Button)({
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#333',
    },
    borderRadius: 0,
    padding: '10px 20px',
});

const SLIDESCategory = [
    {
        title: "PX01-Consoles",
        description: "Save up to 50% on select Gundam games. Get 3 months of Game Pass for $2 USD.",
        price: "$299",
        image: gundamImage,
    },
    {
        title: "PX02-Consoles",
        description: "Exclusive on Gundam PX02. Buy now and get extra perks!",
        price: "$399",
        image: gundam,
    },
    {
        title: "PX03-Consoles",
        description: "Get 3 months of Game Pass for $3 USD with PX03.",
        price: "$499",
        image: gundamImage,
    },
];

export const MainCarouselCardCategory = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SLIDESCategory.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Card sx={{
            position: 'relative',
            background: '#F2F4F5',
            borderRadius: '6px'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center'
            }}>

                {/* Left side: Card Content */}
                <CardContent
                    sx={{
                        paddingLeft: '40px',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="overline" sx={{ color: '#2484C2', fontSize: '14px', fontWeight: 600, lineHeight: '20px' }}>
                        THE BEST PLACE TO PLAY
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ color: '#191C1F', fontSize: '48px', fontWeight: 600, lineHeight: '56px' }}>
                        {SLIDESCategory[currentSlide].title}
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: '#475156',
                        fontSize: '18px',
                        fontWeight: 400,
                        width: '356px',
                        lineHeight: '24px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                    }}>
                        {SLIDESCategory[currentSlide].description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 2 }}>
                        <StyledButton endIcon={<ArrowForwardIcon />}>
                            SHOP NOW
                        </StyledButton>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '25px', gap: '10px' }}>
                            {SLIDESCategory.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        background: currentSlide === index ? '#000' : '#ccc',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </Box>
                    </Box>
                </CardContent>

                {/* Right side: Card Media */}
                <CardMedia
                    component="img"
                    image={SLIDESCategory[currentSlide].image}
                    alt="Gundam Robot"
                    sx={{
                        objectFit: 'contain',
                        width: '326px',
                        height: '408px',
                        flexShrink: 0,
                    }}
                />
            </Box>
        </Card>
    );
};
