import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface Category {
    id: number;
    name: string;
    image: string;
}


const CategoryCardSlider: React.FC<{ category: Category }> = ({ category }) => (
    <Card sx={{
        width: '205px',
        height: '236px',
        boxShadow: 'none',
        textAlign: 'center',
        borderRadius: '10px',
        border: '1px solid var(--Gray-100, #E4E7E9)',
        background: 'var(--Gray-00, #FFF)',
        margin: '0 4px',
    }}>
        <CardMedia
            component="img"
            height="148px"
            width="148px"
            image={category.image}
            alt={category.name}
            sx={{ objectFit: 'contain', padding: '24px 12px 16px 12px' }}
        />
        <CardContent>
            <Typography variant="body2" component="div" sx={{
                color: 'var(--Gray-900, #191C1F)',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '24px',
                fontSize: '16px'
            }}>
                {category.name}
            </Typography>
        </CardContent>
    </Card>
);

export default CategoryCardSlider;