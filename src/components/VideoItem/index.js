import React from 'react'

import {formatDistanceToNowStrict} from 'date-fns'
import {
  VideoItemContainer,
  Thumbnail,
  VideoDetailsContainer,
  ProfileImage,
  VideoTextContainer,
  Title,
  ChannelName,
  ViewCountAndDate,
  StyledLink,
} from './styledComponents' // Importing styled components

const VideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnail_url, channel, view_count, published_at} =
    videoDetails
  const {name, profile_image_url} = channel

  return (
    <VideoItemContainer>
      <StyledLink to={`/videos/${id}`}>
        {/* Video Thumbnail */}
        <Thumbnail src={thumbnail_url} alt="video thumbnail" />

        {/* Video Details */}
        <VideoDetailsContainer>
          <ProfileImage src={profile_image_url} alt="channel logo" />
          <VideoTextContainer>
            <Title>{title}</Title>
            <ChannelName>{name}</ChannelName>
            <ViewCountAndDate>
              {view_count} views •{' '}
              {formatDistanceToNowStrict(new Date(published_at), {
                addSuffix: true,
              })}
            </ViewCountAndDate>
          </VideoTextContainer>
        </VideoDetailsContainer>
      </StyledLink>
    </VideoItemContainer>
  )
}

export default VideoItem
