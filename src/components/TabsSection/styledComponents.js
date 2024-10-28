import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TabItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
background-color: ${props =>
  props.isActive
    ? props.darkMode
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)'
    : 'transparent'};
  color: ${props =>
    props.darkMode ? '#FFFFFF' : props.isActive ? '#000000' : '#555555'};
  border-radius: 8px;
  margin-right: 10px;
   text-decoration: none;

 
`
export const Icon = styled.span`
  margin-right: 8px;
  
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color:inherit
`
export const OverallTabSection = styled.div`
  
  position: sticky;
  top:0px;

  
`
