import { Box, Container, Typography, Link } from "@mui/material";

const topics = [
  {
    title: "How do I return my item?",
    link: "#",
  },
  {
    title: "What is Clicon's Return Policy?",
    link: "#",
  },
  {
    title: "How long is the refund process?",
    link: "#",
  },
  {
    title: "What are the Delivery Timelines?",
    link: "#",
  },
  {
    title: "What is Discover Year-End Campaign 2022?",
    link: "#",
  },
  {
    title: "What is the Voucher & Gift Offer in this Campaign?",
    link: "#",
  },
  {
    title: "How to cancel Clicon Order",
    link: "#",
  },
  {
    title: "Ask The Digital and Service Community",
    link: "#",
  },
  {
    title: "How to change my shop name?",
    link: "#",
  },
];

export function ContactTopics() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h5" gutterBottom>
        Popular Topics
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 2,
          mt: 3,
        }}
      >
        {topics.map((topic, index) => (
          <Link
            key={index}
            href={topic.link}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            • {topic.title}
          </Link>
        ))}
      </Box>
    </Container>
  );
}
