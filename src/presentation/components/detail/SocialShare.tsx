import { Box, IconButton, Typography } from "@mui/material";
import { Facebook, Twitter, Pinterest } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

interface SocialShareProps {
  likes: number;
}

export function SocialShare({ likes }: SocialShareProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 2 }}>
      <Typography variant="body2">Chia sẻ:</Typography>
      <IconButton color="primary" size="small">
        <Facebook />
      </IconButton>
      <IconButton color="primary" size="small">
        <Twitter />
      </IconButton>
      <IconButton color="error" size="small">
        <Pinterest />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", ml: "auto", gap: 1 }}>
        <Favorite color="error" />
        <Typography variant="body2">Đã thích ({likes})</Typography>
      </Box>
    </Box>
  );
}
