import React from 'react'

const NxtWatchContext = React.createContext({
  isLightModeOn: true,
  activeTab: 'Home',
  savedVideos: [],
})

export default NxtWatchContext
