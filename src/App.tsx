import { useState } from 'react';
import Header from './components/header/Header'
import SearchBar from './components/search-bar/SearchBar'
import UserProfile from './components/user-profile/UserProfile'
import styled from 'styled-components'

const Wrapper = styled.div<{currentTheme: string}>`
  background: ${props => props.currentTheme === "light" ? props.theme.colors.light.quinary : props.theme.colors.dark.tertiary};
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
  const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [currentTheme, setCurrentTheme] = useState(systemTheme);
  return (
    <Wrapper currentTheme={currentTheme}>
      <WrapperBox>
        <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
        <SearchBar currentTheme={currentTheme} />
        <UserProfile currentTheme={currentTheme} />
      </WrapperBox>
    </Wrapper>
  );
}

export default App;
