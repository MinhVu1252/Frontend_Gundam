import React from 'react';
import {
    Typography,
    Container,
    Grid,
    Card,
} from '@mui/material';
import gundam from '../../../assets/logo/b312ae96491b54debcc767369360fb47.jpg';
import { ImageNews } from './ImageNews';
import { NewsInfo } from './NewsInfo';

interface NewsItem {
    id: number;
    image: string;
    author: string;
    date: string;
    comments: number;
    title: string;
    description: string;
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        image: gundam,
        author: "Kristin",
        date: "19Dec, 2013",
        comments: 453,
        title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
        description: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."
    },
    {
        id: 2,
        image: gundam,
        author: "Robert",
        date: "28 Nov, 2015",
        comments: 738,
        title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
        description: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem."
    },
    {
        id: 3,
        image: gundam,
        author: "Arlene",
        date: "9 May, 2014",
        comments: 826,
        title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
        description: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."
    }
];

export default function LatestNews() {
    return (
        <Container sx={{ maxWidth: '1440px', mx: 'auto', marginTop: '72px' }}>
            <Typography
                variant="h2"
                component="h1"
                align="center"
                sx={{
                    color: 'var(--Gray-900, #191C1F)',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '40px',
                    marginBottom: '40px'
                }}
            >
                Latest News
            </Typography>

            <Grid container spacing={4}>
                {newsItems.map((item) => (
                    <Grid item xs={12} md={4} key={item.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-100, #E4E7E9)',
                                background: 'var(--Gray-00, #FFF)',
                                boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.04)',
                            }}
                        >
                            <ImageNews image={item.image} title={item.title}></ImageNews>
                            <NewsInfo author={item.author} date={item.date} comments={item.comments} title={item.title} description={item.description}></NewsInfo>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}