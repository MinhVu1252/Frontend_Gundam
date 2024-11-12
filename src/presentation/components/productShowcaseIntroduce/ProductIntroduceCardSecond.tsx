import gundam from '../../../assets/logo/18adcac62f74f03d9444856dc528a87e-removebg-preview.png';
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    styled,
    Button,
    Box
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

export const ProductIntroduceCardSecond = () => {
    return (
        <Card sx={{
            backgroundColor: 'var(--Gray-50, #F2F4F5)',
            position: 'relative', overflow: 'visible'
        }}>

            <CardContent sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '51.5px'
            }}>
                <Box sx={{
                    marginRight: '20px',
                    paddingRight: '26px',
                    transform: 'translateY(2%)',
                }}>
                    <Typography variant="h6" component="div" sx={{
                        color: 'var(--Gray-900, #191C1F)',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '32px'
                    }}>.
                        Kaiodell
                        <br /> FlipBuds Pro
                    </Typography>
                    <StyledButton endIcon={<ArrowForwardIcon />} sx={{
                        mt: 2,
                        borderRadius: '6px',
                        background: '#000',
                        padding: '10px 32px',
                    }}>
                        SHOP NOW
                    </StyledButton>
                </Box>
            </CardContent>
            <CardMedia
                component="img"
                image={gundam}
                alt="Gundam Pixel 6 Pro"
                sx={{
                    width: '40%', position: 'absolute', bottom: 0, right: 0, zIndex: 0,
                }}
            />
        </Card>
    )
}
