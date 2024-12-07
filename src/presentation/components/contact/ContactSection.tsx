import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { Phone, Chat } from "@mui/icons-material";

export function ContactSection() {
  return (
    <Box sx={{ bgcolor: "grey.50", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            component="span"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: 1,
              display: "inline-block",
              mb: 2,
            }}
          >
            CONTACT US
          </Typography>
          <Typography variant="h4" gutterBottom>
            Don't find your answer.
          </Typography>
          <Typography variant="h4">Contact with us</Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Phone color="primary" />
                <Typography variant="h6">Call us now</Typography>
              </Box>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                We are available online from 9:00 AM to 5:00 PM
                <br />
                Call us now and get your answer
              </Typography>
              <Typography variant="h5" sx={{ mb: 3 }}>
                +1-202-555-0126
              </Typography>
              <Button variant="outlined" startIcon={<Phone />}>
                CALL NOW
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Chat color="primary" />
                <Typography variant="h6">Chat with us</Typography>
              </Box>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                We are available online from 9:00 AM to 5:00 PM
                <br />
                Chat with us now and get your answer
              </Typography>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Support@clicon.com
              </Typography>
              <Button variant="contained" startIcon={<Chat />}>
                CONTACT US
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
