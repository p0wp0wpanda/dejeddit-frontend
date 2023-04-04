import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Box p={3} sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,}}
    >
        <Typography variant="h3">
            404: Page not found
        </Typography>

        <Typography pb={2} variant="body2" color="text.secondary" sx={{fontSize:'20px'}}>
            You just hit a route that does not exist...
        </Typography>

        <Link to="/">
          <Button variant='outlined' size='large'>Back Home</Button>
        </Link>
    </Box>
  )
}

export default Error