import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';

const Post = ({ appState }) => {
  const { postId } = useParams();
  const post = appState.posts.find((post) => post.id == postId)

  return (
    <Box>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
    </Box>
  )
}

export default Post