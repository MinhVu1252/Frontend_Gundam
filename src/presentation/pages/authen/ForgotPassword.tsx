import { Box, CardContent, Typography, Input, Button } from "@mui/material";

export function ForgetPassword() {
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
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "52px",
            }}
          >
            Forgot password
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
            }}
          >
            Enter your email for the verification proccess, we will send 4
            digits code to your email.
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "14px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              letterSpacing: "0.25px",
            }}
          >
            E mail
          </Typography>

          <Input
            sx={{
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #000",
              padding: "16px 12px",
              fontFamily: "Open Sans",
              fontSize: "16px",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "24px",
              letterSpacing: "0.15px",
              color: "#000",
            }}
          ></Input>

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
