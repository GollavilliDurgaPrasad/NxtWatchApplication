import NxtWatchContext from '../../context/nxtWatchContext'
import Header from '../Header'
import TabsSection from '../TabsSection'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  AllContainer,
  VideosListContainer,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedVideos, isLightModeOn} = value

      const failureView = () => {
        return (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <h1>No Saved Videos Found</h1>
            <p>You can save your videos while watching them.</p>
          </div>
        )
      }

      return (
        <AllContainer active={isLightModeOn} data-testid="savedVideos">
          <Header />

          <HomeContainer>
            <TabsSection />
            <VideosListContainer>
              {savedVideos.length > 0 ? (
                <div>
                  <h1>Saved Videos</h1>
                  {savedVideos.map(video => (
                    <VideoItem videoDetails={video} key={video.id} />
                  ))}
                </div>
              ) : (
                failureView()
              )}
            </VideosListContainer>
          </HomeContainer>
        </AllContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
