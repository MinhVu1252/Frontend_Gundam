import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "../../../assets/logo/09fa5a36e32b2c7e59fab631e2019d47.png";

// Stats data
const stats = [
  { text: "Over 5M+ customer served" },
  { text: "600+ Dedicated employee" },
  { text: "20+ Branches all over the world" },
  { text: "Over 150000+ Electronics Products" },
];

// Team members data
const teamMembers = [
  {
    name: "Kevin Gilbert",
    role: "Chief Executive Officer",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "Founder of CEO",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "Head of Designer",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "UI Designer",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "Product Designer",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "Head Development",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "Senior Engineer",
    avatar: Image,
  },
  {
    name: "Kevin Gilbert",
    role: "UI Designer",
    avatar: Image,
  },
];

// Product sections data
const productSections = [
  {
    title: "FLASH SALE TODAY",
    items: [
      {
        name: "New Saint Seiya: Window Of The Soul Pegasus S...",
        price: "$1,345",
        image: Image,
      },
      {
        name: "Simple Mobile 4G LTE Prepaid Phone",
        price: "$1,345",
        image: Image,
      },
      {
        name: "4K UHD LED Smart TVs with Processor Dual Band",
        price: "$1,345",
        image: Image,
      },
    ],
  },
  {
    title: "BEST SELLERS",
    items: [
      {
        name: "Samsung Electronics Galaxy S20 FE",
        price: "$1,345",
        image: Image,
      },
      {
        name: "Sony DCS-RX10 III Cyber-shot",
        price: "$1,345",
        image: Image,
      },
    ],
  },
  {
    title: "TOP RATED",
    items: [
      {
        name: "Portable Spring Meeting & Dual Core",
        price: "$1,345",
        image: Image,
      },
      {
        name: "Dell OptiPlex High End Core",
        price: "$1,345",
        image: Image,
      },
    ],
  },
  {
    title: "NEW ARRIVAL",
    items: [
      {
        name: "TOZO T6 True Wireless",
        price: "$1,345",
        image: Image,
      },
      {
        name: "4K UHD + Waterproof Pocket Robot",
        price: "$1,345",
        image: Image,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="span"
              sx={{
                display: "inline-block",
                bgcolor: "#0066FF",
                color: "white",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              WHAT WE ARE
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.5rem" },
              }}
            >
              Kinbo - largest electronics retail shop in the world.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 4, fontSize: "0.875rem", lineHeight: 1.7 }}
            >
              Pellentesque a rhoncus dui, vel hendrerit dui elit, ipsum velit
              vestibulum nisl, eu rhoncus libero est et magna. Praesent rhoncus
              rhoncus lorem, eu molestie magna hendrerit id.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                >
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      bgcolor: "#22C55E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "0.75rem",
                    }}
                  >
                    ✓
                  </Box>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    {stat.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", width: "100%", pt: "100%" }}>
              <img
                src={Image}
                alt="Robot head illustration"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Our core team member
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      overflow: "hidden",
                      mb: 2,
                    }}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500, fontSize: "0.875rem", mb: 0.5 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Banner Section */}
      <Box
        sx={{ position: "relative", height: 400, bgcolor: "#F3F4F6", mb: 8 }}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: 400, position: "relative", zIndex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Your trusted and reliable retail shop
            </Typography>
            <Typography
              sx={{ mb: 3, fontSize: "0.875rem", color: "text.secondary" }}
            >
              Praesent sed tempor metus. Fusce molestie ex vitae mauris varius,
              at finibus elit gravida.
            </Typography>
            <Button
              sx={{
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: "50%",
                bgcolor: "#0066FF",
                color: "white",
                "&:hover": {
                  bgcolor: "#0052CC",
                },
              }}
            >
              ▶
            </Button>
          </Box>
        </Container>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            backgroundImage: "url('/placeholder.svg?height=400&width=600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>

      {/* Products Sections */}
      <Container sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          {productSections.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: "1rem",
                  textTransform: "uppercase",
                }}
              >
                {section.title}
              </Typography>
              <Grid container spacing={2}>
                {section.items.map((item, itemIndex) => (
                  <Grid item xs={12} sm={6} md={3} key={itemIndex}>
                    <Box
                      sx={{
                        p: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        transition: "all 0.2s",
                        "&:hover": {
                          boxShadow: 1,
                        },
                      }}
                    >
                      <Box sx={{ position: "relative", pt: "100%", mb: 2 }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.875rem",
                          mb: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#0066FF",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
