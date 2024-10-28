import {formatDistanceToNowStrict} from 'date-fns'
import Header from '../Header'
import TabsSection from '../TabsSection'
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/nxtWatchContext'

import {
  HomeContainer,
  AllContainer,
  LikeDislikeCotainer,
  ActionButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: {},
    isLiked: false,
    isDisliked: false,
    savedVideos: [],
    isSaved: false,
  }

  componentDidMount() {
    this.getApiCall()
  }

  getApiCall = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    //console.log(fetchedData)
    if (response.ok) {
      this.setState({
        videoData: fetchedData.video_details,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = isLightModeOn => {
    return (
      <div>
        {isLightModeOn ? (
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
        <button type="button" onClick={this.getApiCall}>
          Retry
        </button>
      </div>
    )
  }

  toggleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isLiked ? prevState.isDisliked : false, // Remove dislike if like is clicked
    }))
  }

  // Toggle dislike button
  toggleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? prevState.isLiked : false, // Remove like if dislike is clicked
    }))
  }

  renderVideoDetailsView = () => {
    const {videoData, isLiked, isDisliked} = this.state
    const {
      title,
      video_url,
      thumbnail_url,
      description,
      view_count,
      published_at,
      channel: {name, profile_image_url, subscriber_count},
    } = videoData

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const onClickAddtoSavedVideos = () => {
            isVideoSaved()
          }

          const {addToSavedVideos, removeSavedVideo, savedVideos} = value
          console.log(savedVideos)

          const isVideoSaved = () => {
            const {videoData} = this.state
            const isVideoFound = savedVideos.find(
              eachVideo => eachVideo.id === videoData.id,
            )
            if (isVideoFound) {
              removeSavedVideo(videoData)
              this.setState({isSaved: false})
            } else {
              addToSavedVideos(videoData)
              this.setState({isSaved: true})
            }
          }

          return (
            <div className="video-details-container">
              {/* ReactPlayer to display the video */}
              <ReactPlayer
                light={<img src={thumbnail_url} alt="video thumbnail" />}
                url={video_url}
                controls
                className="video-player"
              />

              {/* Video title and view count */}
              <div className="video-info">
                <p className="video-title">{title}</p>
                <p className="video-views">
                  {view_count} views •{' '}
                  {formatDistanceToNowStrict(new Date(published_at), {
                    addSuffix: true,
                  })}
                </p>

                <LikeDislikeCotainer>
                  <ActionButton
                    type="button"
                    active={isLiked}
                    onClick={this.toggleLike}
                  >
                    <BiLike /> Like
                  </ActionButton>
                  <ActionButton
                    type="button"
                    active={isDisliked}
                    onClick={this.toggleDislike}
                  >
                    <BiDislike /> Dislike
                  </ActionButton>

                  <ActionButton
                    type="button"
                    active={this.state.isSaved}
                    onClick={onClickAddtoSavedVideos}
                  >
                    <CgPlayListAdd /> {this.state.isSaved ? 'Saved' : 'Save'}
                  </ActionButton>
                </LikeDislikeCotainer>
              </div>
              <hr />
              {/* Channel info */}
              <div>
                <img src={profile_image_url} alt="channel logo" />
                <div className="channel-details">
                  <p>{name}</p>
                  <p>{subscriber_count} subscribers</p>
                </div>
              </div>

              {/* Video description */}
              <p>{description}</p>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideoDetails = isLightModeOn => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetailsView()

      case apiStatusConstants.failure:
        return this.renderFailureView(isLightModeOn)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <AllContainer active={isLightModeOn} data-testid="videoItemDetails">
              <Header />

              <HomeContainer>
                <TabsSection />
                {this.renderVideoDetails(isLightModeOn)}
              </HomeContainer>
            </AllContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
