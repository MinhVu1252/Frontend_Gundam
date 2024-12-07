import { Box, IconButton, Badge } from "@mui/material";
import {
  Search,
  AccountCircleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const UserActions = () => (
  <Box sx={{ display: "flex", gap: 1 }}>
    <IconButton sx={{ color: "#141718", padding: "0px 16px" }}>
      <Search />
    </IconButton>

    <IconButton sx={{ color: "#141718", padding: "0px 16px" }}>
      <NavLink to="/login">
        <AccountCircleOutlined />
      </NavLink>
    </IconButton>
    <IconButton sx={{ color: "#141718", padding: "0px 16px" }}>
      <Badge badgeContent={4} color="error">
        <ShoppingCartOutlined />
      </Badge>
    </IconButton>
  </Box>
);

export default UserActions;
