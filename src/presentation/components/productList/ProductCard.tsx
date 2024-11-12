import { FavoriteBorderOutlined, FavoriteOutlined, ShoppingCartOutlined, VisibilityOutlined } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Rating, Typography } from "@mui/material";
import ProductImage from "../product/ProductImage";
import ProductInfo from "../product/ProductInfo";
import ProductActions from "../product/ProductActions ";
import StatusLabel from "../product/StatusLabel";
import DiscountLabel from "../product/DiscountLabel";

interface Product {
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    discountedPrice: number;
    discount?: string;
    status?: string;
    rating?: number;
    reviews?: number;
    description?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Card className="h-100 position-relative" sx={{
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'none',
            border: '1px solid var(--Gray-100, #E4E7E9)',
            background: 'var(--Gray-00, #FFF)',
            position: 'relative',
            '&:hover .action-icons': {
                opacity: 1,
                visibility: 'visible',
            },
        }}>
            <ProductImage image={product.image} alt={product.name}></ProductImage>

            <ProductInfo
                name={product.name}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                rating={product.rating}
                reviews={product.reviews}
            ></ProductInfo>

            <ProductActions></ProductActions>

            {product.status && <StatusLabel status={product.status}></StatusLabel>}
            {product.discount && <DiscountLabel discount={product.discount}></DiscountLabel>}

        </Card>
    );
};
export default ProductCard;
