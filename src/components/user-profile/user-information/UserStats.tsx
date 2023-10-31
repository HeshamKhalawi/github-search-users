import styled from "styled-components";

const Wrapper = styled.div<{currentTheme: string}>`
    grid-area: stats;
    display: flex;
    margin-top: 32px;
    padding: 15px 0 0 32px;
    height: 70px;
    background: ${props => props.currentTheme === "light" ? props.theme.colors.light.quinary : props.theme.colors.dark.tertiary};
    border-radius: 10px;
    gap: 99px;
    @media(max-width: 768px){
        margin-top: 23px;
    }
    @media(max-width: 375px){
        padding: 0;
        justify-content: center;
        align-items: center;
        gap: 33px;
    }
`
const Headers = styled.h4<{currentTheme: string}>`
    margin: 0;
    font-family: ${props => props.theme.fonts.h4.family};
    font-size: ${props => props.theme.fonts.h4.size};
    font-weight: ${props => props.theme.fonts.h4.weight};
    line-height: ${props => props.theme.fonts.h4.lineHeight};
    color: ${props => props.currentTheme === "light" ? props.theme.colors.light.tertiary : "#FFF"};
    @media(max-width: 375px){
        font-size: 11px;
    }
`
const HeadersValue = styled.h2<{currentTheme: string}>`
    margin: 0;
    font-family: ${props => props.theme.fonts.h2.family};
    font-size: ${props => props.theme.fonts.h2.size};
    font-weight: ${props => props.theme.fonts.h2.weight};
    line-height: ${props => props.theme.fonts.h2.lineHeight};
    color: ${props => props.currentTheme === "light" ? props.theme.colors.light.quaternary : "#FFF"};
    @media(max-width: 375px){
        font-size: 16px;
    }
`
const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    @media(max-width: 375px){
        align-items: center;
    }
`

function UserStats({currentTheme}: any) {

    return(
        <Wrapper currentTheme={currentTheme}>
            <HeaderWrapper>
                <Headers currentTheme={currentTheme}>Repos</Headers> 
                <HeadersValue currentTheme={currentTheme}>8</HeadersValue>
            </HeaderWrapper>
            <HeaderWrapper>
                <Headers currentTheme={currentTheme}>Followers</Headers> 
                <HeadersValue currentTheme={currentTheme}>2943</HeadersValue>
            </HeaderWrapper>
            <HeaderWrapper>
                <Headers currentTheme={currentTheme}>Following</Headers> 
                <HeadersValue currentTheme={currentTheme}>29</HeadersValue>
            </HeaderWrapper>
        </Wrapper>
    );
}   


export default UserStats;