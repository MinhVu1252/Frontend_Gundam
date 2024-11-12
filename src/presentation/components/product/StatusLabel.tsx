// StatusLabel.tsx
import { Box, Typography } from "@mui/material";

interface StatusLabelProps {
    status: string;
}

const StatusLabel: React.FC<StatusLabelProps> = ({ status }) => (
    <Box
        position="absolute"
        top={10}
        left={10}
        bgcolor={status === "HOT" ? "var(--Danger-500, #EE5858)"
            : "var(--Gray-400, #929FA5)"}
        color="var(--Gray-00, #FFF)"
        px={1}
        py={0.5}
        borderRadius={2}
        sx={{
            fontFamily: 'Public Sans',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '16px',
            borderRadius: '2px',
        }}
    >
        <Typography sx={{
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '16px',
            color: 'var(--Gray-00, #FFF)'
        }}>
            {status}
        </Typography>
    </Box>
);

export default StatusLabel;
