import NxtWatchContext from '../../context/nxtWatchContext'
import {FaHome, FaFire, FaBookmark, FaGamepad} from 'react-icons/fa'
import {TabItem, Icon, StyledLink, OverallTabSection} from './styledComponents'

const TabsSection = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeTab, onChangeActiveTab} = value

      const setActiveTab = tabName => {
        onChangeActiveTab(tabName)
      }

      return (
        <OverallTabSection>
          <ul>
            <TabItem isActive={activeTab === 'Home'}>
              <StyledLink to="/" onClick={() => setActiveTab('Home')}>
                <Icon>
                  <FaHome />
                </Icon>
                Home
              </StyledLink>
            </TabItem>
            <TabItem isActive={activeTab === 'Trending'}>
              <StyledLink
                to="/trending"
                onClick={() => setActiveTab('Trending')}
              >
                <Icon>
                  <FaFire />
                </Icon>
                Trending
              </StyledLink>
            </TabItem>

            <TabItem isActive={activeTab === 'Gaming'}>
              <StyledLink to="/gaming" onClick={() => setActiveTab('Gaming')}>
                <Icon>
                  <FaGamepad />
                </Icon>
                Gaming
              </StyledLink>
            </TabItem>
            <TabItem isActive={activeTab === 'Saved Videos'}>
              <StyledLink
                to="/saved-videos"
                onClick={() => setActiveTab('Saved Videos')}
              >
                <Icon>
                  <FaBookmark />
                </Icon>
                Saved Videos
              </StyledLink>
            </TabItem>
          </ul>
          <div>
            <p>CONTACT US</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </OverallTabSection>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default TabsSection
