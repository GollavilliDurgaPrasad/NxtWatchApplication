import Header from '../Header'
import TabsSection from '../TabsSection'
import Games from './games'
import NxtWatchContext from '../../context/nxtWatchContext'
import {HomeContainer, AllContainer} from './styledComponents'

const GamingTab = () => {
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value

        return (
          <AllContainer active={isLightModeOn} data-testid="gaming">
            <Header />

            <HomeContainer>
              <TabsSection />

              <Games active={isLightModeOn} />
            </HomeContainer>
          </AllContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingTab
