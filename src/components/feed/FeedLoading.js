import React from 'react'
import Feed from './Feed'

const FeedLoading = ({ appState }) => {
    if(appState.loading) {
        return <p>Loading...</p>
    }

    return <Feed posts={appState.posts} />
}

export default FeedLoading