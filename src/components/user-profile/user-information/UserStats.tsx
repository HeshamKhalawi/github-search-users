import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    padding: 0 0 0 32px;
    margin: 32px 0 0 0;
    background: ${props => props.theme.colors.light.quinary};
    border-radius: 10px;
    gap: 99px;
`
const Headers = styled.h4`
    margin: 0;
    font-family: ${props => props.theme.fonts.h4.family};
    font-size: ${props => props.theme.fonts.h4.size};
    font-weight: ${props => props.theme.fonts.h4.weight};
    line-height: ${props => props.theme.fonts.h4.lineHeight};
    color: ${props => props.theme.colors.light.tertiary};
`
const HeadersValue = styled.h2`
    margin: 0;
    font-family: ${props => props.theme.fonts.h2.family};
    font-size: ${props => props.theme.fonts.h2.size};
    font-weight: ${props => props.theme.fonts.h2.weight};
    line-height: ${props => props.theme.fonts.h2.lineHeight};
    color: ${props => props.theme.colors.light.quaternary};
`
const HeaderWrapper = styled.h4`
    display: flex;
    flex-direction: column;
`

function UserStats() {

    return(
        <Wrapper>
            <HeaderWrapper>
                <Headers>Repos</Headers> 
                <HeadersValue>8</HeadersValue>
            </HeaderWrapper>
            <HeaderWrapper>
                <Headers>Followers</Headers> 
                <HeadersValue>2943</HeadersValue>
            </HeaderWrapper>
            <HeaderWrapper>
                <Headers>Following</Headers> 
                <HeadersValue>29</HeadersValue>
            </HeaderWrapper>
        </Wrapper>
    );
}   


export default UserStats;