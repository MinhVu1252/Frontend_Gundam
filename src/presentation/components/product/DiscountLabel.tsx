// DiscountLabel.tsx
import { Box, Typography } from "@mui/material";

interface DiscountLabelProps {
    discount: string;
}

const DiscountLabel: React.FC<DiscountLabelProps> = ({ discount }) => (
    <Box
        position="absolute"
        top={10}
        right={10}
        bgcolor="var(--Warning-400, #EFD33D)"
        color="var(--Gray-900, #191C1F)"
        px={2}
        py={0.5}
        borderRadius={2}
        sx={{
            padding: '5px 10px',
            borderRadius: '2px',
            gap: '10px'
        }}
    >
        <Typography sx={{
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '16px',
            color: 'var(--Gray-900, #191C1F)'
        }}>
            {`${discount}% OFF`}
        </Typography>
    </Box>
);

export default DiscountLabel;
