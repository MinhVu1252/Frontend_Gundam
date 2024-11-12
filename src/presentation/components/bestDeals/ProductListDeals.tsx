import React from "react";
import { Card } from "@mui/material";
import ProductImage from "../product/ProductImage";
import StatusLabel from "../product/StatusLabel";
import DiscountLabel from "../product/DiscountLabel";
import ProductInfo from "../product/ProductInfo";
import ProductActions from "../product/ProductActions ";

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

const ProductCardDeals: React.FC<{ product: Product; isFeatured?: boolean }> = ({ product, isFeatured = false }) => {
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
            <ProductImage image={product.image} alt={product.name} isFeatured={isFeatured}></ProductImage>

            <ProductInfo
                name={product.name}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                rating={product.rating}
                reviews={product.reviews}
                description={product.description}
                isFeatured={isFeatured}
            ></ProductInfo>

            <ProductActions isFeatured={isFeatured}></ProductActions>

            {product.status && <StatusLabel status={product.status}></StatusLabel>}
            {product.discount && <DiscountLabel discount={product.discount}></DiscountLabel>}

        </Card>
    );
};

export default ProductCardDeals;