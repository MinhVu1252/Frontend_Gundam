import { Box, CardContent, Typography, Button, CardMedia } from "@mui/material";

export function Success() {
  return (
    <Box
      sx={{
        padding: "80px 0",
      }}
    >
      <Box
        sx={{
          width: "832px",
          height: "488px",
          margin: "auto",
          marginTop: "80px",
          marginBottom: "80px",
        }}
      >
        <CardMedia
          sx={{
            width: "164px",
            height: "164px",
            margin: "auto",
          }}
        ></CardMedia>
        <CardContent
          sx={{
            width: "537px",
            height: "328px",
            margin: "auto",
            marginTop: "80px",
            marginBottom: "80px",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Open Sans",
              fontSize: "45px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "52px",
              textAlign: "center",
            }}
          >
            Successfully
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "0.15px",
              color: "#828282",
              margin: "32px 0",
              textAlign: "center",
            }}
          >
            Your password has been reset successfully
          </Typography>

          <Button
            sx={{
              marginTop: "24px",
              textAlign: "center",
              width: "100%",
              padding: "18px 32px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              background: "#000",
              fontSize: "16px",
              color: "#fff",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0.15px",
              textTransform: "uppercase",
              fontFamily: "Open Sans",
            }}
          >
            Continue
          </Button>
        </CardContent>
      </Box>
    </Box>
  );
}
