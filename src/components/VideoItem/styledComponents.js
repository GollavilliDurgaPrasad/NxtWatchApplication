import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  
`

export const VideoItemContainer = styled.li`
  flex-basis: 20%; /* Takes up around one-third of the row */
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 1.5%; /* Add space between items */
  
  @media (max-width: 1024px) {
    flex-basis: 48%; /* Two videos per row on medium screens */
  }

  @media (max-width: 768px) {
    flex-basis: 100%; /* One video per row on small screens */
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 180px; /* Restrict the height for a more compact look */
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  margin: 0;
  color: #000;
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0 0 0;
`

export const ViewCountAndDate = styled.p`
  font-size: 12px;
  color: #888;
  margin: 5px 0 0 0;
`
