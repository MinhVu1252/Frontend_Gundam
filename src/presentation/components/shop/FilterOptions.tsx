"use client";

import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
  "All Models",
  "Gundam Unicorn",
  "Action Figures",
  "Tools & Accessories",
  "Display Cases",
  "Limited Editions",
  "Customization Parts",
];

const priceRanges = [
  "All Price",
  "Under $20",
  "$25 to $100",
  "$100 to $300",
  "$300 to $500",
  "$500 to $1,000",
  "$1,000 to $10,000",
];

const brands = [
  "Apple",
  "Microsoft",
  "Dell",
  "Symphony",
  "Sony",
  "LG",
  "One Plus",
  "Google",
  "Samsung",
  "HP",
  "Xiaomi",
  "Panasonic",
  "Intel",
];

export default function FilterOptions() {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 10000]);
  const [selectedPriceRange, setSelectedPriceRange] =
    React.useState("$300 to $500");

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <Box sx={{ width: 280, bgcolor: "background.paper", p: 2 }}>
      <Typography
        sx={{
          color: "var(--Black-900, #121212)",
          fontFamily: "Inter",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "600",
        }}
        variant="h6"
        gutterBottom
      >
        Filter
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "var(--Black-900, #121212)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            CATEGORIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {categories.map((category) => (
              <Typography
                key={category}
                sx={{
                  py: 0.5,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                  fontFamily: "Inter",
                  color: "var(--Black-500, #807E7E)",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontStyle: "normal",
                }}
              >
                {category}
              </Typography>
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              color: "var(--Gray-900, #191C1F)",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "uppercase",
              fontStyle: "normal",
            }}
          >
            PRICE RANGE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box px={2}>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
            />
            <Box sx={{ display: "flex", gap: 2, mt: 2, mb: 3 }}>
              <TextField
                size="small"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                inputProps={{ type: "number", min: 0 }}
              />
              <TextField
                size="small"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                inputProps={{ type: "number", max: 10000 }}
              />
            </Box>
          </Box>
          <FormControl>
            <RadioGroup
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              {priceRanges.map((range) => (
                <FormControlLabel
                  key={range}
                  value={range}
                  control={<Radio size="small" />}
                  label={range}
                  sx={{
                    "& .MuiTypography-root": {
                      color: "var(--Gray-700, #475156)",
                      fontFamily: "Public Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              color: "var(--Gray-900, #191C1F)",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "uppercase",
              fontStyle: "normal",
            }}
          >
            POPULAR BRANDS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    size="small"
                  />
                }
                label={brand}
                sx={{
                  "& .MuiTypography-root": {
                    color: "var(--Gray-700, #475156)",
                    fontFamily: "Public Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontStyle: "normal",
                  },
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
