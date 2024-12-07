import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  styled,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add, Remove, Favorite } from "@mui/icons-material";

const ColorOption = styled(Paper)(({ selected }: { selected?: boolean }) => ({
  width: 80,
  height: 80,
  cursor: "pointer",
  border: selected ? "2px solid #1976d2" : "2px solid transparent",
  overflow: "hidden",
}));

interface ProductOptionsProps {
  measurements: string;
  colorOptions: Array<{ image: string; label: string }>;
}

export function DetailProductOptions({
  measurements,
  colorOptions,
}: ProductOptionsProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Typography
        sx={{
          fontSize: "16px",
          color: "var(--neutral-04100, #6C7275)",
          fontWeight: "600",
          fontFamily: "Inter",
        }}
        variant="subtitle1"
        gutterBottom
      >
        Measurements
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "20px",
          color: "#000",
          fontWeight: "400",
          fontFamily: "Inter",
        }}
      >
        {measurements}
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          color: "var(--neutral-04100, #6C7275)",
          fontFamily: "Inter",
          marginTop: "20px",
        }}
        gutterBottom
      >
        Choose Color
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
        {colorOptions.map((option, index) => (
          <ColorOption
            key={index}
            selected={selectedColor === index}
            onClick={() => setSelectedColor(index)}
          >
            <img
              src={option.image}
              alt={option.label}
              width={72}
              height={72}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ColorOption>
        ))}
      </Stack>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <ButtonGroup variant="outlined" size="large">
          <Button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
            <Remove />
          </Button>
          <Button sx={{ minWidth: 60 }} disableRipple>
            {quantity}
          </Button>
          <Button onClick={() => setQuantity((prev) => prev + 1)}>
            <Add />
          </Button>
        </ButtonGroup>
        <Button
          variant="outlined"
          startIcon={<Favorite />}
          size="large"
          sx={{ minWidth: 200 }}
        >
          Wishlist
        </Button>
      </Box>

      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          py: 2,
          bgcolor: "black",
          "&:hover": {
            bgcolor: "black",
            opacity: 0.9,
          },
        }}
      >
        Add to Cart
      </Button>
    </>
  );
}
