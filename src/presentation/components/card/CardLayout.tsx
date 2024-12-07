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
} from "@mui/material";
import { CardHeader } from "./CardHeader";

const initialProducts = [
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

export function CardLayout() {
  const [products, setProducts] = useState(initialProducts);
  const [shippingMethod, setShippingMethod] = useState("free");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setProducts(
      products.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p))
    );
  };

  const removeItem = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost =
    shippingMethod === "free" ? 0 : shippingMethod === "express" ? 15.0 : 21.0;
  const total = subtotal + shippingCost;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CardHeader currentStep={1} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Grid
              container
              sx={{ borderBottom: "1px solid", borderColor: "divider", pb: 1 }}
            >
              <Grid item xs={6}>
                <Typography>Product</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Quantity</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Price</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>Subtotal</Typography>
              </Grid>
            </Grid>

            {products.map((product) => (
              <Grid
                container
                key={product.id}
                alignItems="center"
                sx={{ py: 2, borderBottom: "1px solid #333" }}
              >
                <Grid item xs={6}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: 80, height: 80, objectFit: "cover" }}
                    />
                    <Box>
                      <Typography fontWeight={500}>{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Color: {product.color}
                      </Typography>
                      <Button
                        onClick={() => removeItem(product.id)}
                        sx={{
                          color: "text.secondary",
                          p: 0,
                          minWidth: "auto",
                          textTransform: "none",
                          "&:hover": {
                            background: "none",
                            color: "text.primary",
                          },
                        }}
                      >
                        × Remove
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                      sx={{ minWidth: 32, p: 0.5 }}
                    >
                      -
                    </Button>
                    <Typography sx={{ width: 32, textAlign: "center" }}>
                      {product.quantity}
                    </Typography>
                    <Button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                      sx={{ minWidth: 32, p: 0.5 }}
                    >
                      +
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Typography>${product.price.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>
                    ${(product.price * product.quantity).toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            ))}

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Have a coupon?
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Add your code for an instant cart discount
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  placeholder="Coupon Code"
                  size="small"
                  sx={{ flex: 1 }}
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
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: "grey.50", p: 3, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Cart summary
            </Typography>

            <RadioGroup
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <FormControlLabel
                value="free"
                control={<Radio />}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Free shipping</Typography>
                    <Typography>$0.00</Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="express"
                control={<Radio />}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Express shipping</Typography>
                    <Typography>+$15.00</Typography>
                  </Box>
                }
              />
              <FormControlLabel
                value="pickup"
                control={<Radio />}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography>Pick Up</Typography>
                    <Typography>$21.00</Typography>
                  </Box>
                }
              />
            </RadioGroup>

            <Box
              sx={{
                mt: 3,
                pt: 2,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography>Subtotal</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography fontWeight={500}>Total</Typography>
                <Typography fontWeight={500}>${total.toFixed(2)}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "black",
                  "&:hover": { bgcolor: "grey.900" },
                }}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

// import { Container, Grid, Box } from "@mui/material";
// import { CartHeader } from "./CardHeader";
// import { CartList } from "./CardList";
// import { CartSummary } from "./CardSummary";
// import { CouponSection } from "./CouponSection";

// export function CartLayout() {
//   return (
//     <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <CartHeader />
//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           <Grid item xs={12} lg={8}>
//             <CartList />
//             <CouponSection />
//           </Grid>
//           <Grid item xs={12} lg={4}>
//             <CartSummary />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
