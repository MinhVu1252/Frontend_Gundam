import {
  Box,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Button,
  CardMedia,
} from "@mui/material";
import eye from "../../../assets/icon/Group.jpg";
import eyeOf from "../../../assets/icon/eyeoff.jpg";

export function NewPassword() {
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
            New password
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
            Set the new password for your account so you can login and access
            all featuress.
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "14px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              letterSpacing: "0.25px",
              lineHeight: "20px",
            }}
          >
            Enter new password
          </Typography>

          <Box
            sx={{
              position: "relative",
              marginBottom: "24px",
            }}
          >
            <TextField
              type="password"
              placeholder="8 symbols at least"
              fullWidth
              sx={{
                fontFamily: "Open Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0.15px",
                color: "#828282",
              }}
            />
            <IconButton sx={{ right: "0", position: "absolute" }}>
              <CardMedia
                component="img"
                sx={{ width: "24px", height: "18px", marginTop: "12px" }}
                src={eye}
              />
            </IconButton>
          </Box>

          <Typography
            sx={{
              color: "#000",
              fontSize: "14px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "400",
              letterSpacing: "0.25px",
              lineHeight: "20px",
            }}
          >
            Confirm password
          </Typography>

          <Box
            sx={{
              position: "relative",
              marginBottom: "24px",
            }}
          >
            <TextField
              type="password"
              placeholder="8 symbols at least"
              fullWidth
              sx={{
                fontFamily: "Open Sans",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0.15px",
                color: "#828282",
              }}
            />
            <IconButton sx={{ right: "0", position: "absolute" }}>
              <CardMedia
                component="img"
                sx={{ width: "24px", height: "18px", marginTop: "12px" }}
                src={eyeOf}
              />
            </IconButton>
          </Box>

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
            UPDATE PASSWORD
          </Button>
        </CardContent>
      </Box>
    </Box>
  );
}
