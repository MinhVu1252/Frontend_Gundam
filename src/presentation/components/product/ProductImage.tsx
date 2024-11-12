// ProductImage.tsx
import { CardMedia } from "@mui/material";

interface ProductImageProps {
    image: string;
    alt: string;
    isFeatured?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, alt, isFeatured }) => (
    <CardMedia
        component="img"
        sx={{
            width: '100%',
            height: isFeatured ? '268px' : '188px',
            objectFit: 'contain',
            mx: 'auto',
        }}
        image={image}
        alt={alt}
    />
);

export default ProductImage;
