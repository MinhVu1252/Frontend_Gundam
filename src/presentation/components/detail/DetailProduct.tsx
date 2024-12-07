import { Box, Breadcrumbs, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { DetailProductImages } from "./DetailProductImage";
import { DetailProductInfo } from "./DetailProductInfo";
import { CountdownTimer } from "./CountdownTimer";
import { DetailProductOptions } from "./DetailProductOption";
import { ShippingInfo } from "./ShippingInfo";
import { SocialShare } from "./SocialShare";
import { Reviews } from "./Review";
import logo from "../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png";

const theme = createTheme();

export default function DetailPage() {
  const images = [logo, logo, logo];

  const thumbnails = [logo, logo, logo, logo, logo, logo];

  const colorOptions = [
    { image: logo, label: "Black" },
    { image: logo, label: "White" },
    { image: logo, label: "Red" },
    { image: logo, label: "Blue" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 3,
          px: { xs: 3, md: "160px" },
          maxWidth: "1440px",
          mx: "auto",
          boxSizing: "border-box",
        }}
      >
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--Black-600, #605F5F)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
            >
              Home
            </Typography>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--Black-600, #605F5F)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
            >
              Shop
            </Typography>
          </Link>
          <Link to="/mo-hinh-gundam" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "var(--Black-600, #605F5F)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
            >
              Mô hình Gundam
            </Typography>
          </Link>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
              color: "var(--Black-900, #121212)",
              fontFamily: "Inter",
              fontStyle: "normal",
            }}
          >
            Product
          </Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <DetailProductImages images={images} thumbnails={thumbnails} />
            <SocialShare likes={159000} />
          </Box>

          <Box sx={{ flex: 1 }}>
            <DetailProductInfo
              title="Gundam RX-78-2"
              rating={5}
              reviewCount={11}
              description="The RX-78-2 Gundam is the titular mobile suit of Mobile Suit Gundam. Part of the RX-78 Gundam series, it was built in secret on Side 7. The Gundam would turn the tide of war in favor of the Earth Federation during the One Year War against the Principality of Zeon."
              price={199.0}
              originalPrice={400.0}
            />

            <ShippingInfo />

            <CountdownTimer />

            <DetailProductOptions
              measurements="18.5 cm x 7.8 cm x 4.3 cm"
              colorOptions={colorOptions}
            />

            <Box sx={{ mt: 3 }}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginRight: "98px",
                    fontStyle: "normal",
                    fontFamily: "Inter",
                    color: "var(--neutral-04100, #6C7275)",
                  }}
                >
                  SKU
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    color: "var(--neutral-07100, #141718)",
                  }}
                >
                  {" "}
                  1117
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginRight: "58px",
                    fontStyle: "normal",
                    fontFamily: "Inter",
                    color: "var(--neutral-04100, #6C7275)",
                  }}
                >
                  CATEGORY
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    color: "var(--neutral-07100, #141718)",
                  }}
                >
                  {" "}
                  Light Wing, Custom
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Reviews />
      </Box>
    </ThemeProvider>
  );
}
