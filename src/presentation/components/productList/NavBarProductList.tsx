import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface NavBarProductListProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    categories: string[];
}

const NavBarProductList: React.FC<NavBarProductListProps> = ({ activeCategory, onCategoryChange, categories }) => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '0px 0px 0px 0px', boxShadow: 'none', backgroundColor: 'transparent' }}>
            <Toolbar sx={{ px: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h4" component="h1" sx={{
                        color: 'var(--Gray-900, #191C1F)',
                        fontSize: '24px',
                        fontWeight: 600,
                        lineHeight: '32px',
                        fontStyle: 'normal'
                    }}>
                        Featured Products
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    {categories.map((category, idx) => (
                        <Button
                            key={idx}
                            sx={{
                                color: activeCategory === category ? '#f97316' : '#5F6C72',
                                fontWeight: activeCategory === category ? 'bold' : 'normal',
                                '&:hover': {
                                    fontWeight: 'bold',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: '#FFD700',
                                        bottom: -2,
                                        left: 0,
                                    }
                                },
                            }}
                            onClick={() => onCategoryChange(category)} // Manual category change
                        >
                            {category}
                        </Button>
                    ))}
                    {/* Right-aligned button with arrow icon */}
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            textTransform: 'none',
                            color: '#f97316',
                            fontSize: '14px',
                            fontWeight: 600,
                        }}>
                        Browse All Product
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBarProductList;
