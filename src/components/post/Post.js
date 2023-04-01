import React from 'react'

const Post = ({ postContent }) => {
  return (
    <Box>
        <h1>Welcome to {postContent.title}</h1>
        <p>{postContent.text}</p>
    </Box>
  )
}

export default Post