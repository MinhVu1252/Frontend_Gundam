import { CardMedia } from '@mui/material'

interface ImageNews {
    image: string,
    title: string,
}

export const ImageNews: React.FC<ImageNews> = ({ image, title }) => {
    return (
        <CardMedia
            component="img"
            height="248"
            width="360"
            image={image}
            alt={title}
            sx={{ objectFit: 'contain', padding: '32px' }}
        />
    )
}
