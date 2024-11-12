import { Button, useTheme } from '@mui/material';

const ActionButton = () => {
    const theme = useTheme();

    return (
        <Button
            variant="contained"
            size="large"
            sx={{
                color: 'var(--neutral-07100, #141718)',
                backgroundColor: '#38CB89',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '32px',
                letterSpacing: '-0.4px',
                padding: '12px 56px',
                marginTop: theme.spacing(6),
                ':hover': {
                    backgroundColor: '#2EA773',
                },
            }}
            aria-label="Shop Now"
        >
            Shopping Now
        </Button>
    );
};

export default ActionButton;
