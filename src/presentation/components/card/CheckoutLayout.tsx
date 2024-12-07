import { useState } from "react";
import Image from "../../../assets/logo/09fa5a36e32b2c7e59fab631e2019d47.png";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { CardHeader } from "./CardHeader";

const products = [
  {
    id: 1,
    name: "Gundam Wing Zero Custom",
    color: "Black",
    price: 19.0,
    quantity: 2,
    image: Image,
  },
  {
    id: 2,
    name: "Gundam Unicorn Banshee",
    color: "Red",
    price: 19.0,
    quantity: 2,
    image: Image,
  },
  {
    id: 3,
    name: "Gundam Toolkit",
    color: "Gray",
    price: 39.0,
    quantity: 1,
    image: Image,
  },
];

export function CheckoutLayout() {
  const [couponCode, setCouponCode] = useState("");
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 25;
  const total = subtotal - discount;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CardHeader currentStep={2} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {/* Contact Information */}
            <Box
              sx={{
                bgcolor: "white",
                p: 3,
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="FIRST NAME"
                    placeholder="First name"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="LAST NAME"
                    placeholder="Last name"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="PHONE NUMBER"
                    placeholder="Phone number"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="NOTE"
                    placeholder="Note"
                    multiline
                    rows={3}
                    size="small"
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Shipping Address */}
            <Box
              sx={{
                bgcolor: "white",
                p: 3,
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Shipping Address
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="STREET ADDRESS"
                    placeholder="Street Address"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="COUNTRY"
                    required
                    size="small"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="TOWN / CITY"
                    placeholder="Town / City"
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Use a different billing address (optional)"
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Payment Method */}
            <Box
              sx={{
                bgcolor: "white",
                p: 3,
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Payment method
              </Typography>
              <RadioGroup defaultValue="cod">
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Pay when receiving goods"
                />
                <FormControlLabel
                  value="transfer"
                  control={<Radio />}
                  label="Ví điện tử"
                />
              </RadioGroup>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "black",
                color: "white",
                py: 1.5,
                "&:hover": { bgcolor: "grey.900" },
              }}
            >
              Place Order
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: "grey.50", p: 3, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {products.map((product) => (
                <Box key={product.id} sx={{ display: "flex", gap: 2 }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: 64, height: 64, objectFit: "cover" }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2">{product.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      Color: {product.color}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      <Button
                        sx={{
                          minWidth: 32,
                          p: 0.5,
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        -
                      </Button>
                      <Typography>{product.quantity}</Typography>
                      <Button
                        sx={{
                          minWidth: 32,
                          p: 0.5,
                          border: "1px solid",
                          borderColor: "divider",
                        }}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                  <Typography variant="subtitle2">
                    ${(product.price * product.quantity).toFixed(2)}
                  </Typography>
                </Box>
              ))}

              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  placeholder="Input"
                  size="small"
                  fullWidth
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    "&:hover": { bgcolor: "grey.900" },
                  }}
                >
                  Apply
                </Button>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography>JenkateMW</Typography>
                <Typography color="success.main">-$25.00</Typography>
                <Button size="small" sx={{ ml: "auto", color: "success.main" }}>
                  [Remove]
                </Button>
              </Box>

              <Box sx={{ pt: 2, borderTop: 1, borderColor: "divider" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography>Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography fontWeight="bold">Total</Typography>
                  <Typography fontWeight="bold">${total.toFixed(2)}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
