import styled from "styled-components";
import Heading from "./Heading";
import UserLinks from "./UserLinks";
import UserStats from "./UserStats";

const Wrapper = styled.div``

function UserInformation() {

    return(
        <Wrapper>
            <img 
                src=''
                height = '117px'
                width = '117px'
                alt = 'user-profile'
            />
            <Heading/ >
            <UserStats/ >
            <UserLinks/ >
        </Wrapper>
    );
}


export default UserInformation;