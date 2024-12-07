import { Box, Container, Typography, Button } from "@mui/material";
import { CardHeader } from "./CardHeader";
import Image from "../../../assets/logo/09fa5a36e32b2c7e59fab631e2019d47.png";

const orderDetails = {
  orderCode: "#0123.45678",
  date: "October 19, 2023",
  total: 1345.0,
  paymentMethod: "Credit Card",
  items: [
    {
      id: 1,
      image: Image,
      quantity: 2,
    },
    {
      id: 2,
      image: Image,
      quantity: 2,
    },
    {
      id: 3,
      image: Image,
      quantity: 1,
    },
  ],
};

export function CompleteLayout() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <CardHeader currentStep={3} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 480,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Thank you! 🎉
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Your order has been received
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
          {orderDetails.items.map((item, index) => (
            <Box key={item.id} sx={{ position: "relative" }}>
              <img
                src={item.image}
                alt={`Product ${index + 1}`}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  bgcolor: "black",
                  color: "white",
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {item.quantity}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 2,
            mb: 4,
            textAlign: "left",
          }}
        >
          <Typography color="text.secondary">Order code:</Typography>
          <Typography>{orderDetails.orderCode}</Typography>

          <Typography color="text.secondary">Date:</Typography>
          <Typography>{orderDetails.date}</Typography>

          <Typography color="text.secondary">Total:</Typography>
          <Typography>${orderDetails.total.toFixed(2)}</Typography>

          <Typography color="text.secondary">Payment method:</Typography>
          <Typography>{orderDetails.paymentMethod}</Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "grey.900",
            },
            px: 4,
          }}
        >
          Purchase history
        </Button>
      </Box>
    </Container>
  );
}
