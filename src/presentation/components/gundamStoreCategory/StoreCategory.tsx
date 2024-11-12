import {
    Box,
    Grid,
} from '@mui/material';
import { MainCarouselCardCategory } from './MainCarouselCardCategory';
import { SmallCardFirstCategory } from './SmallCardFirstCategory';
import { SmallCardSecondCategory } from './SmallCardSecondCategory';



export default function GundamStoreCategory() {
    return (
        <Box sx={{ maxWidth: '1440px', margin: '0 auto', }}>
            <Grid container spacing={2} sx={{ padding: '37px 37px 37px 37px' }}>
                <Grid item xs={8}>
                    <MainCarouselCardCategory></MainCarouselCardCategory>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="column" spacing={1.2}>
                        <Grid item>
                            <SmallCardFirstCategory></SmallCardFirstCategory>
                        </Grid>
                        <Grid item>
                            <SmallCardSecondCategory></SmallCardSecondCategory>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}