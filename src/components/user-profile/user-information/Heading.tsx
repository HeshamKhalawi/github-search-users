import styled from "styled-components";

const Wrapper = styled.div``
const UserName = styled.h1``
const UserTag = styled.h3`` 
const UserDescription = styled.p``
const DateJoined = styled.p``
const UserDetails = styled.div``


function Heading() {

    return(
        <Wrapper>
            <UserDetails>
                <UserName>Temp Name</UserName>
                <UserTag>@TempTag</UserTag>
                <DateJoined>Joined 25 Jan 2011</DateJoined>
            </UserDetails>
            <UserDescription>Temp Description</UserDescription>
        </Wrapper>
    );
}      


export default Heading;