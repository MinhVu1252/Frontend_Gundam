import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useCountdown = (targetDate: Date) => {
    const [countdown, setCountdown] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setCountdown({ days, hours, minutes, seconds });

            if (difference < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return countdown;
};

const CountTimeBestDeals = () => {

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 16);
    targetDate.setHours(targetDate.getHours() + 21);
    targetDate.setMinutes(targetDate.getMinutes() + 57);
    targetDate.setSeconds(targetDate.getSeconds() + 23);


    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '55px 10px 16px 15px' }}>
            <Toolbar sx={{ px: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h4" component="h1" sx={{
                        color: 'var(--Gray-900, #191C1F)',
                        fontSize: '24px',
                        fontWeight: 600,
                        lineHeight: '32px',
                        fontStyle: 'normal'
                    }}>
                        Best Deals
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2" mr={2} ml={4} sx={{
                            color: '#000',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '20px',
                            fontStyle: 'normal',
                            paddingTop: '2px'
                        }}>
                            Deals ends in
                        </Typography>
                        <Box sx={{
                            padding: '6px 12px',
                            alignItems: 'center',
                            gap: '2px',
                            borderRadius: '2px',
                            background: 'var(--Warning-300, #F3DE6D)',
                        }} px={2} py={0.5}>
                            <Typography variant="body2" sx={{
                                color: ' var(--Gray-900, #191C1F)',
                                fontSize: '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '24px'
                            }}>
                                {`${days}d : ${hours}h : ${minutes}m : ${seconds}s`}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Button color="primary" endIcon={<ArrowForwardIcon />} sx={{
                    textTransform: 'none',
                    color: 'var(--Secondary-500, #2DA5F3)',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '20px'
                }}>
                    Browse All Product
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default CountTimeBestDeals;