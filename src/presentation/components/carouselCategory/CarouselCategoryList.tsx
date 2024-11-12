import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import gundamSet from '../../../assets/logo/Image.png';
import CategoryCardSlider from './CategoryCardSilder';

interface Category {
    id: number;
    name: string;
    image: string;
}

const categories: Category[] = [
    { id: 1, name: 'Gundam Set', image: gundamSet },
    { id: 2, name: 'Phu kien', image: gundamSet },
    { id: 3, name: 'Custom', image: gundamSet },
    { id: 4, name: 'Accessories', image: gundamSet },
    { id: 5, name: 'Full set', image: gundamSet },
    { id: 6, name: 'Mobile', image: gundamSet },
    { id: 7, name: 'Iphjon', image: gundamSet },
    { id: 8, name: 'Laptop', image: gundamSet },
    { id: 9, name: 'PC', image: gundamSet },
];

const CarouselCategorySlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 6;

    const scrollNext = () => {
        if (startIndex + visibleCount < categories.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const scrollPrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
            <Typography variant="h5" component="h2" align="center" gutterBottom mt={'60px'} mb={'40px'} sx={{
                color: 'var(--Gray-900, #191C1F)',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '40px',
                padding: '0px 57px 0px 37px'
            }}>
                Shop with Categorys
            </Typography>
            <Box sx={{ position: 'relative' }}>
                <IconButton
                    sx={{ position: 'absolute', left: 22, top: '50%', transform: 'translateY(-50%)', zIndex: 1, bgcolor: 'background.paper' }}
                    onClick={scrollPrevious}
                    disabled={startIndex === 0}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4px',
                        overflow: 'hidden',
                        px: 6,
                        // marginLeft: '20px'
                    }}
                >
                    {categories.slice(startIndex, startIndex + visibleCount).map((category) => (
                        <CategoryCardSlider key={category.id} category={category} />
                    ))}
                </Box>
                <IconButton
                    sx={{ position: 'absolute', right: 37, top: '50%', transform: 'translate(50%, -50%)', zIndex: 1, bgcolor: 'background.paper' }}
                    onClick={scrollNext}
                    disabled={startIndex + visibleCount >= categories.length}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CarouselCategorySlider;
