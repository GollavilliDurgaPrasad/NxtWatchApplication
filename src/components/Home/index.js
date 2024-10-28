import Header from '../Header'
import TabsSection from '../TabsSection'
import VideosSection from '../VideosSection'
import NxtWatchContext from '../../context/nxtWatchContext'
import {HomeContainer, AllContainer} from './styledComponents'

const Home = () => {
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value

        return (
          <AllContainer active={isLightModeOn} data-testid="home">
            <Header />

            <HomeContainer>
              <TabsSection />

              <VideosSection active={isLightModeOn} />
            </HomeContainer>
          </AllContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Home
