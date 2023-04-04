import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Post = ({ appState }) => {
  const { postId } = useParams();
  const post = appState.posts.find((post) => post.id == postId)

  return (
    <Box p={3} sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,}}>
        <Typography variant="h3" sx={{fontFamily: 'Charter', textAlign:'center'}}>{post.title}</Typography>
        <Typography variant="h5" sx={{
                  display: "initial",
                  fontFamily: 'Charter',
                  marginBottom: "1rem",
                  color: "text.secondary",
                }}>
          {post.text}
        </Typography>
        <Link to="/">
          <Button variant='outlined' size='large'>Home</Button>
        </Link>
    </Box>
  )
}

export default Post