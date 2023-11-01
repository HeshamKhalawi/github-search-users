import { useState, useEffect } from 'react';
import Header from './components/header/Header'
import SearchBar from './components/search-bar/SearchBar'
import UserProfile from './components/user-profile/UserProfile'
import styled from 'styled-components'
import axios from 'axios';

export type User = {
  login: string,
  avatar_url: string,
  name: string | null,
  company: string | null,
  blog: string | null,
  location: string | null,
  bio: string | null,
  twitter_username: string | null,
  public_repos: number,
  followers: number,
  following: number,
  created_at: string,
}

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
  const fetchUser = async () => {
    try{
      const response = await axios.get(`https://api.github.com/users/octocat`);
        const RD = response.data;
        setSearchResult({
            login: RD.login,
            avatar_url: RD.avatar_url,
            name: RD.name,
            company: RD.company,
            blog: RD.blog,
            location: RD.location,
            bio: RD.bio,
            twitter_username: RD.twitter_username,
            public_repos: RD.public_repos,
            followers: RD.followers,
            following: RD.following,
            created_at: RD.created_at,
        })   
    }catch(error){
      console.error("error: " + error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, [])

  const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [currentTheme, setCurrentTheme] = useState(systemTheme);
  const [searchResult, setSearchResult] = useState<User | null>(null);
  return (
    <Wrapper currentTheme={currentTheme}>
      <WrapperBox>
        <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
        <SearchBar currentTheme={currentTheme} setSearchResult={setSearchResult} searchResult={searchResult}/>
        <UserProfile currentTheme={currentTheme} searchResult={searchResult} />
      </WrapperBox>
    </Wrapper>
  );
}

export default App;
