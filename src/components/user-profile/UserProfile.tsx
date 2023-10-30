import UserInformation from './user-information/UserInformation'
import styled from 'styled-components';
 

const Wrapper = styled.div`
    disply: flex;
    padding: 48px;
    margin: 24px 0 0 0;
    border-radius: 15px;
    background: #FEFEFE;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.20);
`

function UserProfile() {

    return(
        <Wrapper>
            <UserInformation/ >
        </Wrapper>
    );
}


export default UserProfile;