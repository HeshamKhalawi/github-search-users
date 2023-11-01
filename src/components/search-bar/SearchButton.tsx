import styled from 'styled-components';
import {User} from '../../App';
import axios from 'axios';

interface SearchButtonProps{
    setSearchResult: React.Dispatch<React.SetStateAction<User | null>>,
    searchResult: User | null,
    input: string,
    setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>,
}

const Button = styled.button`
    &:hover{
        background: #60ABFF; 
    }
    position: absolute;
    right: 0;
    margin: 0 10px 0 0;
    background: #0079FF;
    border: none;
    height: 50px;
    width: 106px;
    border-radius: 10px;
    color: white;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    @media(max-width: 375px){
        height: 46px;
        width: 84px;
        font-size: 14px;
    }

`

function SearchButton({setSearchResult, searchResult, input, setIsInvalid}: SearchButtonProps) {
    const handleSubmit = async () => {
        if(input !== ""){
            try{
                const response = await axios.get(`https://api.github.com/users/${input}`);
                if(response.status === 200){
                    setIsInvalid(false);
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
                    });
                }
            }catch(error){
                console.error("error: " + error);
                setIsInvalid(true);
            }
        }
    }
    return(
        <Button onClick={handleSubmit}>
            Search
        </Button>
    );
}


export default SearchButton;