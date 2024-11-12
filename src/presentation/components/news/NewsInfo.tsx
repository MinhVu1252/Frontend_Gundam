import { ArrowForward, CalendarToday, ChatBubbleOutline, PersonRounded } from '@mui/icons-material'
import { Box, Button, CardContent, Typography } from '@mui/material'
import React from 'react'

interface NewsInfo {
    author: string;
    date: string;
    comments: number;
    title: string;
    description: string;
}

export const NewsInfo: React.FC<NewsInfo> = ({ author, date, comments, title, description }) => {
    return (
        <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonRounded sx={{
                        color: '#ff6b00',
                        fontSize: 20
                    }} />
                    <Typography variant="body2" sx={{
                        color: 'var(--Gray-700, #475156)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '40px'
                    }}>
                        {author}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarToday sx={{ color: '#ff6b00', fontSize: 20 }} />
                    <Typography variant="body2" sx={{
                        color: 'var(--Gray-700, #475156)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '40px'
                    }}>
                        {date}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ChatBubbleOutline sx={{ color: '#ff6b00', fontSize: 20 }} />
                    <Typography variant="body2" sx={{
                        color: 'var(--Gray-700, #475156)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '40px'
                    }}>
                        {comments}
                    </Typography>
                </Box>
            </Box>

            <Typography
                variant="h6"
                component="h2"
                sx={{
                    color: 'var(--Gray-900, #191C1F)',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    marginTop: '12px', color: 'var(--Gray-500, #77878F)',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                }}
            >
                {description}
            </Typography>

            <Button
                endIcon={<ArrowForward />}
                sx={{
                    borderRadius: '2px',
                    border: '2px solid var(--Primary-100, #FFE7D6)',
                    marginTop: '24px',
                    color: 'var(--Primary-500, #FA8232)',
                    fontSize: '14px',
                    fontWeight: 700,
                    lineHeight: '48px',
                    letterSpacing: '0.168px',
                    textTransform: 'uppercase',
                    padding: '0px 24px'
                }}
            >
                READ MORE
            </Button>
        </CardContent>
    )
}
