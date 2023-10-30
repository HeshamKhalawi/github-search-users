import styled from "styled-components";

const Wrapper = styled.div`

`
const UserName = styled.h1`
    margin: 0;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: ${props => props.theme.fonts.h1.size};
    font-weight: ${props => props.theme.fonts.h1.weight};
    line-height: ${props => props.theme.fonts.h1.lineHeight};
    color: ${props => props.theme.colors.light.quaternary};


    
`
const UserTag = styled.h3`
    margin: 2px 0 0 0;
    color: ${props => props.theme.colors.light.primary};
    font-family: ${props => props.theme.fonts.h3.family};
    font-size: ${props => props.theme.fonts.h3.size};
    font-weight: ${props => props.theme.fonts.h3.weight};
    line-height: ${props => props.theme.fonts.h3.lineHeight};
` 
const UserDescription = styled.p`
    margin: 20px 0 0 0;
    color: ${props => props.theme.colors.light.tertiary};
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
`
const DateJoined = styled.span`
    margin-top: 4px;
    color: ${props => props.theme.colors.light.secondary};
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 15px;
    font-weight: 400;
`
const UserDetails = styled.div`
    
`
const NameDateHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
`


function Heading() {

    return(
        <Wrapper>
            <UserDetails>
                <NameDateHolder>
                    <UserName>The Octocat</UserName>
                    <DateJoined>Joined 25 Jan 2011</DateJoined>
                </NameDateHolder>
                <UserTag>@Octocat</UserTag>
            </UserDetails>
            <UserDescription>This profile has no description</UserDescription>
        </Wrapper>
    );
}      


export default Heading;