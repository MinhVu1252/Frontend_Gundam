import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

export function ContactSearch() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          py: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "inline-block",
              bgcolor: "warning.light",
              color: "warning.dark",
              px: 1,
              py: 0.5,
              borderRadius: 1,
              mb: 2,
              typography: "caption",
            }}
          >
            HELP CENTER
          </Box>
          <Typography variant="h3" gutterBottom>
            How we can help you!
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your question or keyword"
            sx={{
              maxWidth: 400,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="button"
                    sx={{
                      border: "none",
                      bgcolor: "primary.main",
                      color: "white",
                      px: 3,
                      py: 1,
                      borderRadius: 1,
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    }}
                  >
                    SEARCH
                  </Box>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          component="img"
          src="/placeholder.svg?height=300&width=300"
          alt="Customer Support"
          sx={{
            width: { xs: 200, md: 300 },
            height: "auto",
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
    </Container>
  );
}
