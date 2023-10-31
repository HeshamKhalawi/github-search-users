import styled from "styled-components";


const UserName = styled.h1`
    grid-area: name;
    margin: 0;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: ${props => props.theme.fonts.h1.size};
    font-weight: ${props => props.theme.fonts.h1.weight};
    color: ${props => props.theme.colors.light.quaternary};
    @media(max-width: 375px){
        font-size: 16px 
    }   
`
const UserTag = styled.h3`
    grid-area: tag;
    margin: 2px 0 0 0;
    color: ${props => props.theme.colors.light.primary};
    font-family: ${props => props.theme.fonts.h3.family};
    font-size: ${props => props.theme.fonts.h3.size};
    font-weight: ${props => props.theme.fonts.h3.weight};
    @media(max-width: 375px){
        font-size: 13px 
    }
    @media(max-width: 375px){
        margin: 0;
    }  
` 

const DateJoined = styled.span`
    grid-area: date;
    margin-top: 9px;
    color: ${props => props.theme.colors.light.secondary};
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 15px;
    font-weight: 400;
    justify-self: end;
    @media(max-width: 768px){
        margin-top: 5px;
        font-size: 13px; 
    }
    @media(max-width: 375px){
        margin-top: 6px;
    }
`
const UserDetails = styled.div`
    grid-area: heading;
    display: grid;
    grid-template-areas: 'name date'
                         'tag .';
    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        margin: 12px 0 0 41px;
    }
    @media(max-width: 375px){
        margin: 0 0 0 19.5px;
    }
`


function Heading() {

    return(
        <UserDetails>
            <UserName>The Octocat</UserName>
            <UserTag>@Octocat</UserTag>
            <DateJoined>Joined 25 Jan 2011</DateJoined>
        </UserDetails>
    ); 
}      


export default Heading;