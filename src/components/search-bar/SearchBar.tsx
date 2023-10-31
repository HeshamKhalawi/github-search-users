import SearchButton from "./SearchButton";
import SearchIcon from '../../icons/icon-search.svg'
import styled from 'styled-components';

const Input = styled.input`
    &::placeholder{
        opacity: 1;
        color: #4B6A9B;
    }
    &:focus{
        outline: none;
    }
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 18px;
    font-weight: 400;
    color: #4B6A9B;
    line-height: 25px;
    width: 100%;
    height: 69px;
    padding: 0 0 0 80px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px 6px -1px rgb(70 96 187 / 0.1), 0 2px 4px -2px rgb(70 96 187 / 0.1);
    @media(max-width: 375px){
        font-size: 13px;
        padding: 0 0 0 51px; 
        height: 60px;
    }
     
    `
const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 19px 0 0 0;
`
const Icon = styled.img`
    position: absolute;
    left: 32px;
    height: 24px;
    width: 25px;
    @media(max-width: 375px){
        left: 16px;
    }
`

function SearchBar() {

    return(
        <Wrapper>
            <Icon 
                src={SearchIcon}
                alt="search-icon"
            >
            </Icon>
            <Input type="text" placeholder="Search GitHub User..."/>
            <SearchButton/ >
        </Wrapper>
    );
}


export default SearchBar;