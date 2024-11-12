// ProductActions.tsx
import { Box, Button, IconButton, Grid, CardActions } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FavoriteBorderOutlined, VisibilityOutlined } from "@mui/icons-material";

interface ProductActionsProps {
    isFeatured?: boolean;
}

const ProductActions: React.FC<ProductActionsProps> = ({ isFeatured }) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
        <CardActions
            className="action-icons"
            sx={{

                justifyContent: 'center',
                mt: 'auto',
            }}
        >
            {isFeatured ? (
                <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{}}>
                    <Grid item>
                        <Button sx={{
                            width: '48px',
                            height: '48px',
                            background: '#AAA',
                            borderRadius: '2px',
                            color: '#000'
                        }}>
                            <FavoriteBorderOutlined />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            startIcon={<ShoppingCartIcon />}
                            size="large"
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                px: 4,
                                background: '#000',
                                borderRadius: '2px',
                                padding: '0px 24px',
                                color: 'var(--Gray-00, #FFF)',
                                fontSize: '14px',
                                lineHeight: '48px',
                                fontStyle: 'normal',
                                letterSpacing: '0.168px'
                            }}
                        >
                            Add to cart
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button sx={{
                            width: '48px',
                            height: '48px',
                            background: '#AAA',
                            borderRadius: '2px',
                            color: '#000'
                        }}>
                            <VisibilityOutlined />
                        </Button>
                    </Grid>
                </Grid>
            ) : (
                <Box
                    className="action-icons"
                    sx={{
                        display: 'flex',
                        gap: 1,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0,
                        visibility: 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    }}
                >
                    <IconButton aria-label="add to favorites" size="small" sx={{ bgcolor: 'black', color: 'white', '&:hover': { bgcolor: '#38CB89' } }}>
                        <FavoriteIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="add to cart" size="small" sx={{ bgcolor: 'white', border: '1px solid black' }}>
                        <ShoppingCartIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="view" size="small" sx={{ bgcolor: 'white', border: '1px solid black' }}>
                        <VisibilityOutlined fontSize="small" />
                    </IconButton>
                </Box>
            )}
        </CardActions>
        {!isFeatured && (
            <Box
                className="action-icons"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    gap: 1,
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    '&:hover': {
                        opacity: 1,
                        visibility: 'visible',
                        color: '#38CB89'
                    },
                }}
            >
                <IconButton aria-label="add to favorites" size="small" sx={{ bgcolor: 'white', color: '#000', '&:hover': { bgcolor: '#38CB89', color: '#fff' } }}>
                    <FavoriteBorderOutlined fontSize="small" />
                </IconButton>
                <IconButton aria-label="add to cart" size="small" sx={{ bgcolor: 'white', border: '1px solid black', '&:hover': { bgcolor: '#38CB89', color: '#fff' } }}>
                    <ShoppingCartIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="view" size="small" sx={{ bgcolor: 'white', border: '1px solid black', '&:hover': { bgcolor: '#38CB89', color: '#fff' } }}>
                    <VisibilityOutlined fontSize="small" />
                </IconButton>
            </Box>
        )}
    </Box>
);

export default ProductActions;
