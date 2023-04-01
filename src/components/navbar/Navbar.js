import styled from '@emotion/styled'
import { AppBar, Box, CssBaseline, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {
    Facebook,
    Instagram,
    Twitter,
  } from "@mui/icons-material/";

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const SocialBox = styled(Box)({
        display: "flex",
        gap: 10,
        cursor: "pointer",
    })

    const TitleBox = styled(Box)({
        display: "flex",
        gap: 30,
    })

    const SearchBox = styled(Box)({
        display: "flex",
        gap: 5,
    });

  return (
    <Box>
        <CssBaseline/>
        <AppBar sx={{background: "black"}} position={"static"}>
            <StyledToolbar>
                
                <SocialBox>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </SocialBox>

                <TitleBox>
                    <Typography sx={{ typography: { sm: 'h4', xs: 'h5' } }}>Title Text</Typography>
                </TitleBox>
                
                <SearchBox>
                    <InputBase placeholder="Search ..." sx={{ color: "white" }} />
                </SearchBox>
            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar