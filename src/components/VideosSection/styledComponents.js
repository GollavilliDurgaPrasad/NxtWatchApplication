import styled from 'styled-components'

export const SearchButtonContainer = styled.div`
  display:flex;
  width:50px;
  align-items:center;

`

export const OverallVideosContainer = styled.div`

  height: 100vh;
  padding: 16px;
  width:100%
  overflow-y:auto;
  
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: space-between;
  padding: 0;
  list-style-type: none;
  
`

export const AdContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  margin: 16px 0;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  
`

export const SearchInput = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
`
