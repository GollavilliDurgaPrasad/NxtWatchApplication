import Header from '../Header'
import TabsSection from '../TabsSection'
import TrendingVideosSection from './trendingVideosSection'
import NxtWatchContext from '../../context/nxtWatchContext'
import {HomeContainer, AllContainer} from './styledComponents'

const Home = () => {
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value

        return (
          <AllContainer active={isLightModeOn} data-testid="trending">
            <Header />

            <HomeContainer>
              <TabsSection />

              <TrendingVideosSection active={isLightModeOn} />
            </HomeContainer>
          </AllContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Home
