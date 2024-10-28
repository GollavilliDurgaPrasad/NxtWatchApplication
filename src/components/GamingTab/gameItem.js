import {GameImage, StyledLink} from './styledComponents'

const GameItem = props => {
  const {gameDetails} = props
  const {id, thumbnail_url, title, view_count} = gameDetails
  //console.log(thumbnail_url)
  return (
    <li>
      <StyledLink to={`/videos/${id}`}>
        <GameImage src={thumbnail_url} alt="video thumbnail" />
        <p>{title}</p>
        <p>{view_count} Watching Worldwide</p>
      </StyledLink>
    </li>
  )
}

export default GameItem
