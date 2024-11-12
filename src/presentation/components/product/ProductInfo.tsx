// ProductInfo.tsx
import { Box, Typography, Rating } from "@mui/material";

interface ProductInfoProps {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    rating?: number;
    reviews?: number;
    description?: string;
    isFeatured?: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, originalPrice, discountedPrice, rating, reviews, description, isFeatured }) => (
    <Box sx={{ padding: isFeatured ? '10px 24px 10px 45px' : '10px', flexGrow: 1 }}>
        {rating && (
            <Box display="flex" alignItems="center" sx={{ padding: isFeatured ? '10px 0px' : '8px 0px' }}>
                <Rating value={rating} readOnly size={isFeatured ? "medium" : "small"} precision={0.1} />
                <Typography variant="body2" sx={{
                    fontSize: isFeatured ? '14px' : null,
                    color: isFeatured ? 'var(--Gray-500, #77878F)' : null,
                }}>
                    ({reviews?.toLocaleString()})
                </Typography>
            </Box>
        )}
        <Typography variant="body2" component="div" sx={{
            fontSize: isFeatured ? '16px' : '14px',
            mb: 1,
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: isFeatured ? '24px' : '20px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
        }}>
            {name}
        </Typography>
        <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="body2" sx={{
                textDecorationLine: 'line-through',
                fontSize: isFeatured ? '16px' : '14px',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: isFeatured ? '24px' : 'null',
                color: 'var(--Gray-300, #ADB7BC)'
            }}>
                ${originalPrice.toFixed(2)}
            </Typography>
            <Typography variant="body1" sx={{
                fontSize: isFeatured ? '18px' : '14px',
                marginLeft: '3px',
                fontWeight: 600,
                fontStyle: 'normal',
                lineHeight: isFeatured ? '24px' : '20px',
                color: ' var(--Secondary-500, #2DA5F3)',
            }}>
                ${discountedPrice.toFixed(2)}
            </Typography>
        </Box>
        {description && (
            <Typography variant="body2" mt={1} sx={{
                fontSize: isFeatured ? '14px' : 'null',
                fontWeight: 400,
                fontStyle: 'normal',
                color: 'var(--Gray-600, #5F6C72)',
                lineHeight: isFeatured ? '20px' : '18px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 8,
                WebkitBoxOrient: 'vertical',
                display: '-webkit-box',
                textAlign: 'justify'
            }}>
                {description}
            </Typography>
        )}
    </Box>
);

export default ProductInfo;
