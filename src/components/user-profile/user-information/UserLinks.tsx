import styled from "styled-components";

const Wrapper = styled.div``
const Reference = styled.span``
const ReferencesLink = styled(Reference) ``

function UserLinks() {

    return(
        <Wrapper>
            <Reference>Example1</Reference>
            <ReferencesLink>Example2</ReferencesLink>
            <ReferencesLink>Example3</ReferencesLink>
            <ReferencesLink>Example4</ReferencesLink>
        </Wrapper>
    );
}


export default UserLinks;