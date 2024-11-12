import { Headset, LocalShipping, Payment, Undo } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import ServiceItem from "./ServiceInfo";

export default function GundamService() {
    const services = [
        { icon: <LocalShipping sx={{ width: 40, height: 40 }} />, title: 'FASTED DELIVERY', subtitle: 'Delivery in 24/H' },
        { icon: <Undo sx={{ width: 40, height: 40 }} />, title: '24 HOURS RETURN', subtitle: '100% money-back guarantee' },
        { icon: <Payment sx={{ width: 40, height: 40 }} />, title: 'SECURE PAYMENT', subtitle: 'Your money is safe' },
        { icon: <Headset sx={{ width: 40, height: 40 }} />, title: 'SUPPORT 24/7', subtitle: 'Live contact/message' },
    ];

    return (
        <Box sx={{ maxWidth: '1440px', margin: '0 auto', padding: '0 37px' }}>
            <Grid
                container
                spacing={0}
                sx={{
                    borderRadius: '6px',
                    border: '1px solid var(--Gray-100, #E4E7E9)',
                    backgroundColor: 'var(--Gray-00, #FFF)',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {services.map((service, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <ServiceItem
                            icon={service.icon}
                            title={service.title}
                            subtitle={service.subtitle}
                            showDivider={index < services.length - 1}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
