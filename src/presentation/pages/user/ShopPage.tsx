import { Box } from "@mui/material";
import BannerShop from "../../components/banner/BannerShop";
import FilterProductList from "../../components/shop/FitterProductList";

export function ShopPage() {
  return (
    <Box sx={{ height: "auto", maxWidth: "1440px" }}>
      <BannerShop />
      <FilterProductList />
    </Box>
  );
}
