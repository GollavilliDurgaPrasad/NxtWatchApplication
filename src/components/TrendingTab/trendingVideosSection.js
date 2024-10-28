import React, {Component} from 'react'

import {FaFire} from 'react-icons/fa'
import {VideosListContainer, OverallVideosContainer} from './styledComponents' // Importing styled components
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoItem from '../VideoItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideosSection extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      //console.log(fetchedData)
      this.setState({
        videosList: fetchedData.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => {
    const {active} = this.props

    return (
      <div>
        {active ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure view"
          />
        )}
        <h1>Oops! Something Went Wrong</h1>
        <p>We have some trouble compeleting your request</p>
        <p>Please try again.</p>
        <button type="button" onClick={this.getVideosApi}>
          Retry
        </button>
      </div>
    )
  }
  renderVideos = () => {
    const {videosList} = this.state
    const videosFound = videosList.length > 0
    if (videosFound) {
      return (
        <VideosListContainer>
          {videosList.map(video => (
            <VideoItem videoDetails={video} key={video.id} />
          ))}
        </VideosListContainer>
      )
    } else {
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1>No Search Results Found</h1>
          <p>Try different keywords or remove the search filter.</p>
        </>
      )
    }
  }

  renderVideosSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <OverallVideosContainer>
        <h1>
          <FaFire /> Trending
        </h1>
        {this.renderVideosSection()}
      </OverallVideosContainer>
    )
  }
}

export default TrendingVideosSection