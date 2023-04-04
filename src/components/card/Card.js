import React from 'react'
import { Box, Card as MUICard, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Card = ({index, postContent, postMedia}) => {
  return (
    <Box>
      <MUICard>
            <CardMedia
              sx={{ height: (index===0) ? 500 : 300 }}
              image={postMedia}
              title="latest post"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {postContent.title}
              </Typography>
              <Typography variant="body2" color="text.secondary"
                sx={{overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",}}>
                {postContent.text}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/posts/${postContent.id}`}>
                <Button size="small">Read More</Button>
              </Link>
            </CardActions>
        </MUICard>
        </Box>
  )
}

export default Card