import React from 'react'
import Hero from '../hero/Hero'
import FeedLoading from './FeedLoading'

const FeedRoot = ({ appState }) => {
  return (
    <>
        <Hero />
        <FeedLoading appState={appState} />
    </>
  )
}

export default FeedRoot