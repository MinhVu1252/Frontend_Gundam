import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Stack,
    IconButton,
} from '@mui/material';
import { Instagram, Facebook, YouTube } from '@mui/icons-material';
import gundam from '../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png';

export default function Footer() {
    return (
        <Box sx={{
            bgcolor: 'black',
            color: 'white',
            pt: 8,
            pb: 4,
            marginTop: '16px',
            maxWidth: '1120x',
            mx: 'auto'
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Glitch
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            More than just a game.
                            <br />
                            It's a lifestyle.
                        </Typography>
                        <Stack direction="row" spacing={0}>
                            <IconButton
                                aria-label="Instagram"
                                sx={{ color: 'white', '&:hover': { color: '#ccc' } }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                aria-label="Facebook"
                                sx={{ color: 'white', '&:hover': { color: '#ccc' } }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                aria-label="YouTube"
                                sx={{ color: 'white', '&:hover': { color: '#ccc' } }}
                            >
                                <YouTube />
                            </IconButton>
                        </Stack>
                    </Grid>

                    {/* Page Links */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Page
                        </Typography>
                        <Stack spacing={1}>
                            {['Home', 'Shop', 'Product', 'Articles', 'Contact Us'].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: 'white',
                                        '&:hover': { color: '#ccc' }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Info Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Info
                        </Typography>
                        <Stack spacing={1}>
                            {['Shipping Policy', 'Return & Refund', 'Support', 'FAQs'].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: 'white',
                                        '&:hover': { color: '#ccc' }
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Office Info */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Office
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            43111 Hai Trieu street,
                            <br />
                            District 1, HCMC
                            <br />
                            Vietnam
                        </Typography>
                        <Typography variant="body2">
                            84-756-3237
                        </Typography>
                    </Grid>
                </Grid>

                {/* Bottom Section */}
                <Box sx={{ mt: 8, pt: 3, borderTop: '1px solid var(--neutral-04100, #6C7275)' }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="body2" color="grey.500">
                                Copyright © 2024 Glitch. All rights reserved
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ my: { xs: 2, md: 0 } }}>
                            <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'center' }}>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{ color: 'grey.500', '&:hover': { color: 'grey.300' } }}
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{ color: 'grey.500', '&:hover': { color: 'grey.300' } }}
                                >
                                    Terms & Conditions
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
                            >
                                {['visa', 'amex', 'mastercard', 'stripe', 'paypal', 'apple-pay'].map((payment) => (
                                    <Box
                                        key={payment}
                                        component="img"
                                        src={gundam}
                                        alt={payment}
                                        sx={{ height: 20, filter: 'brightness(0) invert(1)' }}
                                    />
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}