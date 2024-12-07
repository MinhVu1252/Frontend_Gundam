import { Container, Typography, Grid, Paper } from "@mui/material";
import {
  LocalShipping,
  LockReset,
  Payment,
  Person,
  Favorite,
  LocalShippingOutlined,
  ShoppingCart,
  Store,
} from "@mui/icons-material";

const categories = [
  { icon: LocalShipping, title: "Track Order" },
  { icon: LockReset, title: "Reset Password" },
  { icon: Payment, title: "Payment Option" },
  { icon: Person, title: "User & Account" },
  { icon: Favorite, title: "Wishlist & Compare" },
  { icon: LocalShippingOutlined, title: "Shipping & Billing" },
  { icon: ShoppingCart, title: "Shopping Cart & Wallet" },
  { icon: Store, title: "Sell on Clicon" },
];

export function ContactCategories() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center" gutterBottom>
        What can we assist you with today?
      </Typography>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: "primary.light",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Icon sx={{ color: "primary.main" }} />
                <Typography>{category.title}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
