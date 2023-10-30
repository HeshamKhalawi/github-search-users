import styled from 'styled-components';
import ThemeToggle from './ThemeToggle'

const Logo = styled.h1`
    cursor: default;
    user-select: none;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: ${props => props.theme.fonts.h1.size};
    line-height: ${props => props.theme.fonts.h1.lineHeight};
    color: #222731;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`

function Header(){

    return(
        <Wrapper>
            <Logo>devfinder</Logo>
            <ThemeToggle/ >
        </Wrapper>
        );
}


export default Header;