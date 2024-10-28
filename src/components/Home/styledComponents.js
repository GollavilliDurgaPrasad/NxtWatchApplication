import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row; 
  width:100%;
  height:100vh;
  overflow-y:auto
  
`
export const AllContainer = styled.div`
  background-color: ${props => (props.active ? '#f9f9f9' : '#181818')};
`
