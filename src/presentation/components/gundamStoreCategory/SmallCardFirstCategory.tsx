import gundam from '../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png';
import {
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    styled
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StyledButton = styled(Button)({
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#333',
    },
    borderRadius: 0,
    padding: '10px 20px',
});

export const SmallCardFirstCategory = () => {
    return (
        <Card sx={{ backgroundColor: '#000', color: '#fff', position: 'relative', overflow: 'visible' }}>
            <CardContent sx={{ padding: '20px' }}>
                <Typography variant="overline" sx={{
                    color: 'var(--Warning-500, #EBC80C)',
                    fontSize: '14px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    textTransform: 'uppercase'
                }}>
                    SUMMER SALES
                </Typography>
                <Typography variant="h5" component="div" sx={{
                    color: 'var(--Gray-00, #FFF)',
                    fontSize: '24px',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '32px',
                    textTransform: 'uppercase'
                }}>
                    New Gundam
                    <br />Pixel 6 Pro
                </Typography>
                <StyledButton sx={{
                    color: 'var(--Gray-00, #FFF)',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '32px',
                    letterSpacing: '0.168px',
                    background: '#A39F9D',
                    borderRadius: '6px',
                    gap: '8px',
                    padding: '5px 28px',
                }} endIcon={<ArrowForwardIcon />}>
                    SHOP NOW
                </StyledButton>
            </CardContent>
            <CardMedia
                component="img"
                image={gundam}
                alt="Gundam Pixel 6 Pro"
                sx={{
                    width: '30%', position: 'absolute', bottom: 0, right: 0, zIndex: 0,
                }}
            />
        </Card>
    )
}
