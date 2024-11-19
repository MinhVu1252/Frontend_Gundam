import { Box, CardContent, Typography, Input, Button } from "@mui/material";

export function VertifiOTP() {
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
            Verification
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
            Enter your 4 digits code that you received on your email.
          </Typography>

          <CardContent
            sx={{
              margin: "0 35px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Input
              sx={{
                width: "84px",
                height: "76px",
                padding: "16px 33px",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid #000",
                borderRadius: "5px",
                fontSize: "36px",
                fontWeight: "400",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: "44px",
              }}
            ></Input>

            <Input
              sx={{
                width: "84px",
                height: "76px",
                padding: "16px 33px",
                justifyContent: "center",
                textAlign: "center",
                gap: "10px",
                border: "1px solid #000",
                borderRadius: "5px",
                fontSize: "36px",
                fontWeight: "400",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: "44px",
              }}
            ></Input>

            <Input
              sx={{
                width: "84px",
                height: "76px",
                padding: "16px 33px",
                justifyContent: "center",
                textAlign: "center",
                gap: "10px",
                border: "1px solid #000",
                borderRadius: "5px",
                fontSize: "36px",
                fontWeight: "400",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: "44px",
              }}
            ></Input>

            <Input
              sx={{
                width: "84px",
                height: "76px",
                padding: "16px 33px",
                justifyContent: "center",
                textAlign: "center",
                gap: "10px",
                border: "1px solid #000",
                borderRadius: "5px",
                fontSize: "36px",
                fontWeight: "400",
                fontFamily: "Open Sans",
                fontStyle: "normal",
                lineHeight: "44px",
              }}
            ></Input>
          </CardContent>

          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#FF0000", // Màu đỏ
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            00:30
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

          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              textAlign: "center",
              color: "#828282",
              marginTop: "24px",
              letterSpacing: "0.25px",
            }}
          >
            If you didn’t receive a code!{" "}
            <span
              style={{
                color: "#F2451C",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0.25px",
                fontStyle: "normal",
              }}
            >
              Resend
            </span>
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
}
