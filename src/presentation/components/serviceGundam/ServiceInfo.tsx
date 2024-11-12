import { Box, Typography } from '@mui/material';
import React from 'react'

interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    showDivider?: boolean;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, subtitle, showDivider }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '20px',
        }}
    >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {icon}
            <Box>
                <Typography variant="subtitle1" sx={{
                    color: 'var(--Gray-900, #191C1F)',
                    fontSize: '14px',
                    fontWeight: 500,
                    textTransform: 'uppercase'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{
                    color: 'var(--Gray-600, #5F6C72)',
                    fontSize: '14px',
                    fontWeight: 400,
                    textTransform: 'uppercase'
                }}>
                    {subtitle}
                </Typography>
            </Box>
        </Box>
        {showDivider && (
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    height: '60%',
                    width: '1px',
                    backgroundColor: '#E4E7E9',
                }}
            />
        )}
    </Box>
);

export default ServiceItem;
