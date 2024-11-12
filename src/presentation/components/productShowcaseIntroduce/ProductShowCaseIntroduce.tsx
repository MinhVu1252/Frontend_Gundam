import {
    Box,
    Grid,
} from '@mui/material';
import { MainProductIntroduce } from './MainProductIntroduce';
import { ProductIntroduceCardFirst } from './ProductIntroduceCardFirst';
import { ProductIntroduceCardSecond } from './ProductIntroduceCardSecond';

export default function ProductShowCaseIntroduce() {
    return (
        <Box sx={{ maxWidth: '1440px', margin: '32px auto 0px auto', }}>
            <Grid container spacing={2} sx={{ padding: '0px 35px 0px 37px' }}>
                <Grid item xs={8}>
                    <MainProductIntroduce></MainProductIntroduce>
                </Grid>
                <Grid item xs={4}>
                    <Grid container direction="column" spacing={1.2}>
                        <Grid item>
                            <ProductIntroduceCardFirst></ProductIntroduceCardFirst>
                        </Grid>
                        <Grid item>
                            <ProductIntroduceCardSecond></ProductIntroduceCardSecond>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}