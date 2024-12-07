import { useState } from "react";
import { Box, IconButton, styled } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const ProductImage = styled("img")({
  objectFit: "contain",
  width: "100%",
  height: "500px",
});

const DiscountChip = styled(Box)({
  position: "absolute",
  top: 16,
  left: 16,
  backgroundColor: "#4caf50",
  color: "white",
  padding: "4px 8px",
  borderRadius: "4px",
  fontWeight: "bold",
  zIndex: 1,
});

const NewChip = styled(Box)({
  position: "absolute",
  top: 16,
  left: 90,
  backgroundColor: "#000",
  color: "white",
  padding: "4px 8px",
  borderRadius: "4px",
  fontWeight: "bold",
  zIndex: 1,
});

const ThumbnailContainer = styled(Box)({
  position: "relative",
  display: "flex",
  gap: "8px",
  padding: "0 40px",
  marginTop: "16px",
});

const ThumbnailScroller = styled(Box)({
  display: "flex",
  gap: "8px",
  overflowX: "hidden",
  scrollBehavior: "smooth",
});

interface ProductImagesProps {
  images: string[];
  thumbnails: string[];
}

export function DetailProductImages({
  images,
  thumbnails,
}: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleThumbnails = 3;

  const scrollThumbnails = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setStartIndex(Math.max(0, startIndex - 1));
    } else {
      setStartIndex(
        Math.min(thumbnails.length - visibleThumbnails, startIndex + 1)
      );
    }
  };

  return (
    <Box>
      <Box>
        <Box sx={{ position: "relative" }}>
          <ProductImage src={images[currentImage]} alt="Gundam Model" />
          <DiscountChip>-50%</DiscountChip>
          <NewChip>NEW</NewChip>
          <IconButton
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              zIndex: 1,
            }}
            onClick={() =>
              setCurrentImage((prev) =>
                prev > 0 ? prev - 1 : images.length - 1
              )
            }
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              zIndex: 1,
            }}
            onClick={() =>
              setCurrentImage((prev) =>
                prev < images.length - 1 ? prev + 1 : 0
              )
            }
          >
            <NavigateNext />
          </IconButton>
        </Box>
      </Box>

      <ThumbnailContainer>
        {thumbnails.length > visibleThumbnails && (
          <IconButton
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              zIndex: 1,
            }}
            onClick={() => scrollThumbnails("prev")}
            disabled={startIndex === 0}
          >
            <NavigateBefore />
          </IconButton>
        )}

        <ThumbnailScroller>
          {thumbnails
            .slice(startIndex, startIndex + visibleThumbnails)
            .map((thumb, index) => (
              <Box
                key={startIndex + index}
                sx={{
                  cursor: "pointer",
                  border:
                    currentImage === startIndex + index
                      ? "2px solid #1976d2"
                      : "none",
                  width: "167px",
                  height: "167px",
                  flexShrink: 0,
                }}
                onClick={() => setCurrentImage(startIndex + index)}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${startIndex + index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
        </ThumbnailScroller>

        {thumbnails.length > visibleThumbnails && (
          <IconButton
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "white",
              zIndex: 1,
            }}
            onClick={() => scrollThumbnails("next")}
            disabled={startIndex >= thumbnails.length - visibleThumbnails}
          >
            <NavigateNext />
          </IconButton>
        )}
      </ThumbnailContainer>
    </Box>
  );
}
