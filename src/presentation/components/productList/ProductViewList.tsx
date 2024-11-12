import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import NewsDiscount from "./NewsDiscount";
import ProductCard from "./ProductCard";
import gundam from '../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png';
import NavBarProductList from "./NavBarProductList";

// Define the Product interface
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

// Define categories and mock products
const categories = ['All Product', 'Phụ kiện', 'Full set', 'Custom', 'Mo'];

const productData: { [key: string]: Product[] } = {
    'All Product': [
        { id: 1, name: "Series S - 512GB SSD Console with Wireless Controller", image: gundam, originalPrice: 865.99, discountedPrice: 442.12, discount: "32", status: "HOT", rating: 4.5, reviews: 52677 },
        { id: 2, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
        { id: 3, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
        { id: 4, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
        { id: 5, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
        { id: 6, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
        { id: 7, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
        { id: 8, name: "Bose Sport Earbuds", image: gundam, originalPrice: 2300, discountedPrice: 2300, status: "SOLD OUT", rating: 4.5 },
    ],
    'Phụ kiện': [
        { id: 1, name: "Simple Mobile 4G LTE Prepaid wings", image: gundam, originalPrice: 220, discountedPrice: 220, rating: 4.5 },
        { id: 2, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 3, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 4, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 5, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 6, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 7, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 8, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
    ],
    'Full set': [
        { id: 1, name: "Simple Mobile 4G LTE Prepaid wings", image: gundam, originalPrice: 220, discountedPrice: 220, rating: 4.5 },
        { id: 2, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 3, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 4, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 5, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 6, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 7, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 8, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
    ],
    'Custom': [
        { id: 1, name: "Simple Mobile 4G LTE Prepaid wings", image: gundam, originalPrice: 220, discountedPrice: 220, rating: 4.5 },
        { id: 2, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 3, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 4, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 5, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 6, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 7, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 8, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
    ],
    'Mo': [
        { id: 1, name: "Simple Mobile 4G LTE Prepaid wings", image: gundam, originalPrice: 220, discountedPrice: 220, rating: 4.5 },
        { id: 2, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 3, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 4, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 5, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 6, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 7, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
        { id: 8, name: "4K UHD LED Smart with Chromecast Built-in", image: gundam, originalPrice: 865, discountedPrice: 1.50, discount: "19", rating: 4.5 },
    ],
};

export default function ProductViewList() {
    const [activeCategory, setActiveCategory] = useState<string>('All Product');
    const [products, setProducts] = useState<Product[]>(productData[activeCategory] || []);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (index + 1) % categories.length;
            setIndex(nextIndex);
            setActiveCategory(categories[nextIndex]);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [index]);


    useEffect(() => {
        setProducts(productData[activeCategory] || []);
    }, [activeCategory]);


    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setIndex(categories.indexOf(category));
    };

    return (
        <>
            <Box sx={{ display: 'flex', maxWidth: '1440px', width: '100%', mx: 'auto', marginTop: '60px', padding: '0px 28px 72px 0px' }}>
                <Box sx={{ marginTop: '20px' }}>
                    <NewsDiscount />
                </Box>
                <Box sx={{ flexGrow: 1, px: 1 }}>
                    <Box>
                        <NavBarProductList
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                            categories={categories}
                        />
                    </Box>
                    <Grid container spacing={1} sx={{ marginTop: '19px' }}>
                        {products.length > 0 ? (
                            products.map((product: Product) => (
                                <Grid item xs={12} sm={6} md={3} key={product.id}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))
                        ) : (
                            <Typography variant="h6" component="p" sx={{ padding: 2 }}>
                                No products available for this category.
                            </Typography>
                        )}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
