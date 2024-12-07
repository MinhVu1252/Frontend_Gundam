import { Box, Typography, Rating } from "@mui/material";

interface ProductInfoProps {
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  price: number;
  originalPrice: number;
}

export function DetailProductInfo({
  title,
  rating,
  reviewCount,
  description,
  price,
  originalPrice,
}: ProductInfoProps) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Rating
          sx={{
            fontSize: "16px",
            "& .MuiRating-iconFilled": {
              color: "black",
            },
          }}
          value={rating}
          readOnly
          size="small"
        />
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "var(--neutral-07100, #141718)",
            fontFamily: "Inter",
            fontStyle: "normal",
          }}
        >
          {reviewCount} Reviews
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "40px",
          color: "var(--neutral-07100, #141718)",
          fontWeight: "500",
          fontFamily: "poppins",
          fontStyle: "normal",
        }}
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          color: "var(--neutral-04100, #6C7275)",
          fontFamily: "Inter",
          fontStyle: "normal",
        }}
      >
        {description}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "baseline", mb: 3 }}>
        <Typography
          component="span"
          sx={{
            fontSize: "28px",
            color: "var(--Black-900, #121212)",
            fontFamily: "Poppins",
            fontWeight: "500",
            fontStyle: "normal",
            paddingTop: "20px",
          }}
        >
          ${price.toFixed(2)}
        </Typography>
        <Typography
          component="span"
          sx={{
            textDecoration: "line-through",
            fontSize: "20px",
            fontWeight: "500",
            color: "var(--neutral-04100, #6C7275)",
            fontFamily: "Poppins",
            textDecorationLine: "strikethrough",
            fontStyle: "normal",
            marginLeft: "12px",
          }}
        >
          ${originalPrice.toFixed(2)}
        </Typography>
      </Box>
    </>
  );
}
