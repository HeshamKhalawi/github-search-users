import styled from "styled-components";
import Heading from "./Heading";
import UserLinks from "./UserLinks";
import UserStats from "./UserStats";
import Bitmap from '../../../icons/Bitmap.jpg'

const Wrapper = styled.div`
    display: grid;
    grid-template-areas: 'image content'
                         'image stats'
                         'image links';
    grid-template-columns: 1fr 3.1fr;
`;

const UserImage = styled.img`
    grid-area: image;
    height: 117px;
    width: 117px;
    border-radius: 60px;
`;

const StyledHeading = styled(Heading)`
    grid-area: heading;
`;

const StyledUserStats = styled(UserStats)`
    grid-area: stats;
`;

const StyledUserLinks = styled(UserLinks)`
    grid-area: links;
`;

function UserInformation() {
    return (
        <Wrapper>
            <UserImage 
                src={Bitmap}
                alt='user-profile'
            />
            <StyledHeading />
            <StyledUserStats />
            <StyledUserLinks />
        </Wrapper>
    );
}

export default UserInformation;