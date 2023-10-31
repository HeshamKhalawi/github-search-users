import styled from 'styled-components';
import DarkIcon from '../../icons/icon-moon.svg'
// import LightIcon from '../../icons/icon-sun.svg'


const Wrapper = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    height: 50px;
    width: 78px;
` 
const ThemeText = styled.span`
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: '13px';
    font-weight: 700;
    color: ${props => props.theme.colors.light.secondary};
    letter-spacing: 2.5px;

`

function   ThemeToggle() {

    return(
        <Wrapper>
                <ThemeText>DARK</ThemeText>
                <img 
                    src={DarkIcon}
                    height="20px"
                    width="20px"
                    alt="mode-icon"
                />
        </Wrapper>
    );
}


export default ThemeToggle;