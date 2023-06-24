import { Box, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {

  return (

    <Box>
      <Box
        sx={{
          backgroundImage: `url("https://picsum.photos/1920/1080")`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%" },
            padding: { xs: 3, sm: 10, md: 20 },
          }}
        >
          <Box 
            sx={{ 
              background: "white", 
              opacity: "0.8",
            }}>
            <Typography variant={"h4"} align="center" pt={10} pb={10} pl={5} pr={5}>
              Welcome to the blog
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero
