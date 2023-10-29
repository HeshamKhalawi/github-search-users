import styled from 'styled-components';
import DarkIcon from '../../icons/icon-moon.svg'
// import LightIcon from '../../icons/icon-sun.svg'


const Wrapper = styled.button`` 
const ThemeText = styled.p``

function  ThemeToggle() {

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