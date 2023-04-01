import { Box, Grid } from '@mui/material'
import Card from '../card/Card'

const Feed = ({ posts }) => {

  return (
    <Box>
      <Grid container spacing={2} p={2}>
        {posts.map((post, index) => (
          <Grid item key={post.id} xs={12} sm={(index===0)?12:6} lg={(index===0)?12:4}>
            <Card index={index} postContent={post} postMedia={`https://picsum.photos/${1200+index}/${1000+index}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Feed