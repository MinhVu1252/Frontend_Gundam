import { Box, Button, CardMedia, Typography } from "@mui/material";
import logo from "../../../assets/logo/Group 1.png";
export function HeaderAuthen() {
  return (
    <Box sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          height: "53.082px",
          width: 150,
          flexShrink: 0,
          margin: "39px 61px",
        }}
        src={logo}
      />

      <Box sx={{ marginLeft: "auto", display: "flex" }}>
        <Box
          sx={{
            display: "block",
            marginTop: "49px",
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "19px",
              textTransform: "capitalize",
            }}
          >
            Sign In
          </Typography>
          <Box
            sx={{
              width: "30px",
              height: "0px",
              marginLeft: "14px",
            }}
          >
            <Box
              sx={{
                width: "30px",
                height: "2px",
                background: "#000",
                marginTop: "3px",
              }}
            ></Box>
          </Box>
        </Box>

        <Button
          sx={{
            marginTop: "39px",
            marginRight: "123px",
            marginLeft: "41px",
            width: "81px",
            height: "38.642px",
            flexShrink: 0,
            borderRadius: "18px",
            background: "#FFF",
            "&:hover": {
              backgroundColor: "#000",
            },
            "&:active": {
              backgroundColor: "#000",
              color: "#FFF",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              color: "#000",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              textTransform: "capitalize",
              "&:hover": {
                color: "#FFF",
              },
            }}
          >
            Register
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
