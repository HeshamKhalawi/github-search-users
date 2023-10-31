import styled from 'styled-components';
import ThemeToggle from './ThemeToggle'

const Logo = styled.h1<{currentTheme: string}>`
    cursor: default;
    user-select: none;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: ${props => props.theme.fonts.h1.size};
    line-height: ${props => props.theme.fonts.h1.lineHeight};
    color: ${props => props.currentTheme === "light" ? "#222731" : "#FFFFFF"};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`

function Header({setCurrentTheme, currentTheme}: any){
    return(
        <Wrapper>
            <Logo currentTheme={currentTheme}>devfinder</Logo>
            <ThemeToggle setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
        </Wrapper>
        );
}


export default Header;