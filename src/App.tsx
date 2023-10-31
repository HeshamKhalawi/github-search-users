// import { useState } from 'react';
import Header from './components/header/Header'
import SearchBar from './components/search-bar/SearchBar'
import UserProfile from './components/user-profile/UserProfile'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  background: #F6F8FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const WrapperBox = styled.div`
  width: 730px;
  @media (max-width: 768px) {
    width: 573px;
  }
  @media (max-width: 375px) {
    width: 327px;
  }
`



function App() {

  return (
    <Wrapper>
      <WrapperBox>
        <Header/ >
        <SearchBar/ >
        <UserProfile/ >
      </WrapperBox>
    </Wrapper>
  );
}

export default App;
