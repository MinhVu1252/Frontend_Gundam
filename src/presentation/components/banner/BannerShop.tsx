import { Box } from "@mui/material";
import bannerShop from "../../../assets/logo/Paste Image.png";
const BannerShop = () => {
  return (
    <Box
      sx={{
        width: "1120px",
        height: "392px",
        marginLeft: "160px",
        marginRight: "160px",
      }}
    >
      <img src={bannerShop} alt="Hero" />
    </Box>
  );
};

export default BannerShop;
