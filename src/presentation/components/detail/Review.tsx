import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Rating,
  Button,
  Select,
  MenuItem,
  Avatar,
  IconButton,
  styled,
} from "@mui/material";
import { ThumbUp, MoreHoriz } from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 500,
  fontSize: "14px",
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

interface ReviewData {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  likes: number;
}

const reviews: ReviewData[] = [
  {
    id: 1,
    author: "Sofia Harvetz",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti et quas molestias excepturi sint non provident.',
    likes: 2,
  },
  {
    id: 2,
    author: "Nicolas Jensen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now come back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti et quas molestias excepturi sint non provident.',
    likes: 5,
  },
  // Add more reviews as needed
];

export function Reviews() {
  const [tabValue, setTabValue] = useState(2);
  const [sortBy, setSortBy] = useState("newest");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <StyledTab
            sx={{
              fontSizeL: "18px",
              fontWeight: "500",
              color: "var(--Black-500, #807E7E)",
              fontFamily: "Inter",
            }}
            label="Additional info"
          />
          <StyledTab
            sx={{
              fontSizeL: "18px",
              fontWeight: "500",
              color: "var(--Black-500, #807E7E)",
              fontFamily: "Inter",
            }}
            label="Questions"
          />
          <StyledTab
            label="Reviews"
            sx={{
              fontSizeL: "18px",
              fontWeight: "500",
              color: "var(--Black-500, #807E7E)",
              fontFamily: "Inter",
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "500",
                color: "var(--Neutrals-2, #23262F)",
                fontFamily: "Poppins",
                fontStyle: "normal",
              }}
              gutterBottom
            >
              Customer Reviews
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Rating
                sx={{
                  fontSize: "14px",
                  "& .MuiRating-iconFilled": {
                    color: "black", // Màu cho ngôi sao đã chọn
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "#while",
                  },
                }}
                value={4}
                precision={1}
                readOnly
              />
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  color: "var(--neutral-07100, #141718",
                }}
              >
                (11 Reviews)
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              bgcolor: "var(--neutral-07100, #141718);",

              "&:hover": {
                bgcolor: "black",
                opacity: 0.9,
              },
              borderRadius: "80px",
              textTransform: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color: "#fff",
                fontWeight: "500",
                padding: "6px 40px",
              }}
            >
              Write Review
            </Typography>
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            size="small"
            sx={{ width: "256px", padding: "8px 8px 8px 16px" }}
          >
            <MenuItem
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--neutral-07100, #141718)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
              value="newest"
            >
              Newest
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--neutral-07100, #141718)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
              value="highest"
            >
              Highest Rating
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "var(--neutral-07100, #141718)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
              value="lowest"
            >
              Lowest Rating
            </MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {reviews.map((review) => (
            <Box key={review.id} sx={{ display: "flex", gap: 2 }}>
              <Avatar
                sx={{ width: "72px", height: "72px" }}
                src={review.avatar}
                alt={review.author}
              />
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "var(--neutral-07100, #141718)",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                  }}
                  variant="subtitle2"
                  gutterBottom
                >
                  {review.author}
                </Typography>
                <Rating
                  sx={{
                    mb: 1,
                    fontSize: "16px",
                    "& .MuiRating-iconFilled": {
                      color: "black",
                    },
                    "& .MuiRating-iconEmpty": {
                      color: "#while",
                    },
                  }}
                  value={review.rating}
                  size="small"
                  readOnly
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    color: "var(--Neutrals-3, #353945)",
                    fontStyle: "normal",
                  }}
                >
                  {review.content}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button
                    startIcon={<ThumbUp />}
                    sx={{
                      textTransform: "none",
                      color: "text.secondary",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Like
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "text.secondary",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Reply
                  </Button>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: "400" }}
                    variant="caption"
                    color="text.secondary"
                  >
                    {review.date}
                  </Typography>
                </Box>
              </Box>
              <IconButton size="small">
                <MoreHoriz />
              </IconButton>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "16px",
              padding: "6px 40px",
              fontWeight: "500",
              fontFamily: "Inter",
              fontStyle: "normal",
              color: "var(--neutral-07100, #141718)",
              borderRadius: "80px",
              borderColor: "divider",
              "&:hover": {
                borderColor: "primary.main",
              },
            }}
          >
            Load more
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}
