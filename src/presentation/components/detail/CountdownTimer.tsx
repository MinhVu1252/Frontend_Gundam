import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontSize: "16px",
          color: "var(--neutral-05100, #343839)",
          fontWeight: "400",
          fontFamily: "Inter",
          fontStyle: "normal",
        }}
        gutterBottom
      >
        Offer expires in:
      </Typography>
      <Stack direction="row" spacing={2}>
        {Object.entries(timeLeft).map(([key, value]) => (
          <Box key={key} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "32px",
                color: "var(--neutral-07100, #141718)",
                fontWeight: "500",
                fontFamily: "Poppins",
                fontStyle: "normal",
                padding: "9px 18px",
                background: "var(--neutral-02100, #F3F5F7);",
              }}
            >
              {String(value).padStart(2, "0")}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "var(--neutral-04100, #6C7275)",
                fontSize: "12px",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
