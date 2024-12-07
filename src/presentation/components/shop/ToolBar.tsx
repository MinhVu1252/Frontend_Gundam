import { Box, Typography, IconButton, CardMedia } from "@mui/material";
import icon1 from "../../../assets/icon/chevron-down.png";
import icon2 from "../../../assets/icon/bi_grid-3x3-gap-fill.png";
import icon3 from "../../../assets/icon/Toolbar Selector Buttons1.png";
import icon4 from "../../../assets/icon/Toolbar Selector Buttons2.png";
import icon5 from "../../../assets/icon/Toolbar Selector Buttons.png";

const ToolBar = () => {
  return (
    <Box sx={{ display: "flex", height: "40px", marginBottom: "40px" }}>
      <Box sx={{ marginRight: "385px" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "40px",
            color: "#000",
          }}
        >
          Gundam Unicorn
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "40px",
          }}
        >
          Sort by
        </Typography>
        <IconButton sx={{ marginRight: "32px" }}>
          <CardMedia
            component="img"
            sx={{ width: "20px", height: "20px" }}
            src={icon1}
          />
        </IconButton>

        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "46px",
              height: "40px",
              padding: "8px 11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid var(--neutral-03100, #E8ECEF)",
              background: "#F3F5F7",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "22px",
                height: "22px",
              }}
              src={icon2}
            />
          </Box>

          <Box
            sx={{
              width: "46px",
              height: "40px",
              padding: "8px 11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid var(--neutral-03100, #E8ECEF)",
              background: "#F3F5F7",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "36px",
                height: "36px",
              }}
              src={icon3}
            />
          </Box>

          <Box
            sx={{
              width: "46px",
              height: "40px",
              padding: "8px 11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid var(--neutral-03100, #E8ECEF)",
              background: "#F3F5F7",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "36px",
                height: "36px",
              }}
              src={icon4}
            />
          </Box>
          <Box
            sx={{
              width: "46px",
              height: "40px",
              padding: "8px 11px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "1px solid var(--neutral-03100, #E8ECEF)",
              background: "#F3F5F7",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "36px",
                height: "36px",
              }}
              src={icon5}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToolBar;
