import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import TrendingTab from './components/TrendingTab/index'
import GamingTab from './components/GamingTab/index'
import NxtWatchContext from './context/nxtWatchContext'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLightModeOn: true, activeTab: 'Home', savedVideos: []}

  onChangeLightMode = () => {
    this.setState(prevState => ({isLightModeOn: !prevState.isLightModeOn}))
  }

  onChangeActiveTab = tabName => {
    this.setState({activeTab: tabName})
  }

  addToSavedVideos = video => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  removeSavedVideo = video => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(
        eachVideo => eachVideo.id !== video.id,
      ),
    }))
  }

  render() {
    const {isLightModeOn, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isLightModeOn: isLightModeOn,
          onChangeLightMode: this.onChangeLightMode,
          activeTab: activeTab,
          onChangeActiveTab: this.onChangeActiveTab,
          savedVideos: savedVideos,
          addToSavedVideos: this.addToSavedVideos,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path='/login' component={Login} />
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/trending' component={TrendingTab} />
          <ProtectedRoute exact path='/gaming' component={GamingTab} />
          <ProtectedRoute
            exact
            path='/videos/:id'
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path='/saved-videos' component={SavedVideos} />
          <Route path='/not-found' component={NotFound} />
          <Redirect to='not-found' />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
