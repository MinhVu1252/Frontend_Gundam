import { HeaderAuthen } from "../../components/headerAuthen/HeaderAuthen";
import avatar from "../../../assets/logo/wepik-export-202308081622374Se3-removebg-preview 1.jpg";
import google from "../../../assets/icon/flat-color-icons_google.png";
import facebook from "../../../assets/icon/logos_facebook.png";
import apple from "../../../assets/icon/ion_logo-apple.png";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Input,
  Typography,
} from "@mui/material";

export function Login() {
  return (
    <Box>
      <HeaderAuthen />
      <Card
        sx={{
          height: "auto",
          width: "100%",
          display: "flex",
          position: "fixed",
          bottom: "0",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "770.102px",
            width: "587px",
            flexShrink: 0,
            marginLeft: "172px",
          }}
          src={avatar}
        />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Box sx={{ display: "block", marginRight: "139px" }}>
            <CardContent>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "nomal",
                  textTransform: "capitalize",
                  width: "340px",
                  height: "84px",
                  marginBottom: "50px",
                }}
              >
                Welcome back! Glad to see you, Again!
              </Typography>

              <Input
                placeholder="Enter Username"
                sx={{
                  width: "375px",
                  height: "61px",
                  borderRadius: "8px",
                  background: "#EAF0F7",
                  color: "#9A9A9A",
                  fontFamily: "Roboto",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  paddingLeft: "15px",
                }}
              ></Input>
              <Box></Box>
              <Input
                placeholder="Enter Password"
                sx={{
                  width: "375px",
                  height: "61px",
                  borderRadius: "8px",
                  background: "#EAF0F7",
                  paddingLeft: "15px",
                  color: "#9A9A9A",
                  fontFamily: "Roboto",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  marginTop: "20px",
                }}
              ></Input>

              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Roboto",
                  textAlign: "right",
                  fontSize: "18px",
                  fontStyle: "normal",
                  textTransform: "capitalize",
                  marginTop: "20px",
                }}
              >
                Forgot Password?
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{
                  width: "372px",
                  height: "55px",
                  borderRadius: "8px",
                  background: "#050505",
                  margin: "0 10px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "20px",
                    textTransform: "capitalize",
                  }}
                >
                  Sign In
                </Typography>
              </Button>
            </CardActions>
            <CardContent
              sx={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}
            >
              <Box
                sx={{
                  width: "115px",
                  height: "2px",
                  background: "#000",
                  marginTop: "10px",
                }}
              ></Box>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  padding: "0 5px",
                }}
              >
                Or Continue With
              </Typography>
              <Box
                sx={{
                  width: "115px",
                  height: "2px",
                  background: "#000",
                  marginTop: "10px",
                }}
              ></Box>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "390px",
                margin: "0 10px",
              }}
            >
              <IconButton
                sx={{
                  width: "87px",
                  height: "52px",
                  borderRadius: "10px",
                  background: "#000",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "30px", height: "30px" }}
                  src={google}
                />
              </IconButton>

              <IconButton
                sx={{
                  width: "87px",
                  height: "52px",
                  borderRadius: "10px",
                  background: "#000",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "30px", height: "30px" }}
                  src={facebook}
                />
              </IconButton>

              <IconButton
                sx={{
                  width: "87px",
                  height: "52px",
                  borderRadius: "10px",
                  background: "#000",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "30px", height: "30px" }}
                  src={apple}
                />
              </IconButton>
            </CardActions>

            <CardContent sx={{ display: "flex", marginTop: "30px" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: "300",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                  marginRight: "5px",
                }}
              >
                Dont't Have An Account?
              </Typography>
              <Typography
                sx={{
                  color: "#20202",
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: "900",
                  lineHeight: "normal",
                  textTransform: "capitalize",
                }}
              >
                Create Account!
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
