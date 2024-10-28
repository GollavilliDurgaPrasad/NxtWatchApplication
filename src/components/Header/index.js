import {HiLightBulb} from 'react-icons/hi'
import {FaMoon} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import Popup from 'reactjs-popup'
import {WebsiteLogo} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isLightModeOn, onChangeLightMode} = value

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <nav>
          <Link to="/">
            {isLightModeOn ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            )}
          </Link>
          <button type="button" data-testid="theme" onClick={onChangeLightMode}>
            {isLightModeOn ? <FaMoon /> : <HiLightBulb />}
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <Popup
            modal
            trigger={<button type="button">Logout</button>}
            className="popup-content"
          >
            {close => (
              <div>
                <p>
                  <p>Are you sure, you want to logout</p>
                </p>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <button type="button" onClick={onLogout}>
                  Confirm
                </button>
              </div>
            )}
          </Popup>
        </nav>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
