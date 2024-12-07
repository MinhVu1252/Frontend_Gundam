import { Box, Grid } from "@mui/material";
import ToolBar from "./ToolBar";
import gundam from "../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png";
import ProductCard from "../productList/ProductCard";
import { PaginationHandler } from "../pagination/PaginationHandler";
import FilterOptions from "./FilterOptions";

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

const products: Product[] = [
  {
    id: 1,
    name: "Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
    image: gundam,
    originalPrice: 865.99,
    discountedPrice: 442.12,
    discount: "32",
    status: "HOT",
    rating: 4.5,
    reviews: 52677,
    description:
      "Games fgffg qegfifgiqf hqfieghhfg ffhaeifba vàghAIOAVHO vOGFVaioeafbQIOF FHAEOIFHaoif ÀafhaIOfhoav ahbaifbaOdifghad vavhgAIOVH VaeivhAIVHAv ffhoifhÒIHW ffghiofhOIFHWOF FHqiofhÒIHf FHqfiohQFO f hfoiqEFHQEF qèoqefhQEIOFHQèo QÈWeo8fhwÈO qèFHườihƯOEIFHOW built using the Xbox Series X|S development vasvgsafbvsf vasdvsadvas fasfgsgasf sdgsagasrg sgwargawrgaw wegwagwag f aw gfwagawsg wgwargfaws feawgaewgwa gsafgag kit showcase unparalleled load times, visuals.",
  },
  {
    id: 2,
    name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    image: gundam,
    originalPrice: 2300,
    discountedPrice: 2300,
    status: "SOLD OUT",
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 3,
    name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    image: gundam,
    originalPrice: 160,
    discountedPrice: 160,
    status: "HOT",
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 4,
    name: "4K UHD LED Smart with Chromecast Built-in",
    image: gundam,
    originalPrice: 865,
    discountedPrice: 1.5,
    discount: "19",
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 5,
    name: "Sony DSCHX8 High Zoom Point & Shoot",
    image: gundam,
    originalPrice: 1200,
    discountedPrice: 1200,
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 6,
    name: "Dell Optiplex 7000x7480 All-akncbknandbfkasdnbvjn,sdv m,sndv j,sv sj,v in-One Computer Monitor",
    image: gundam,
    originalPrice: 299,
    discountedPrice: 299,
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 7,
    name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    image: gundam,
    originalPrice: 865.99,
    discountedPrice: 70,
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 8,
    name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    image: gundam,
    originalPrice: 160,
    discountedPrice: 160,
    status: "HOT",
    rating: 4.5,
    reviews: 52677,
  },
  {
    id: 9,
    name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    image: gundam,
    originalPrice: 160,
    discountedPrice: 160,
    status: "HOT",
    rating: 4.5,
    reviews: 52677,
  },
];

const FilterProductList = () => {
  const filterProducts = products.filter((product) => product.id !== 1);

  return (
    <Box
      sx={{
        padding: "60px 130px 100px 130px",
        display: "flex",
      }}
    >
      <Box sx={{ width: "312px", marginRight: "24px" }}>
        <FilterOptions />
      </Box>
      <Box sx={{ width: "878px", display: "block" }}>
        <Box>
          <ToolBar />
        </Box>
        <Box>
          {/* {filterProducts.map((product) => (
            <Grid item xs={12} sm={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))} */}

          <Grid container spacing={2}>
            {products.slice(0, 9).map((product) => (
              <Grid item key={product.id} xs={12} sm={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <PaginationHandler />
      </Box>
    </Box>
  );
};

export default FilterProductList;
