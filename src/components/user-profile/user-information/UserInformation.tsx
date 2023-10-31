import styled from "styled-components";
import Heading from "./Heading";
import UserLinks from "./UserLinks";
import UserStats from "./UserStats";
import Bitmap from '../../../icons/Bitmap.jpg'

const Wrapper = styled.div`
    display: grid;
    grid-template-areas: 'image heading'
                         'image description'
                         'image stats'
                         'image links';
    grid-template-columns: 1fr 3.1fr;
    @media(max-width: 768px){
        grid-template-areas: 'image heading'
                             'description description'
                             'stats stats'
                             'links links';

        grid-template-rows: auto auto auto auto;
    }
    
`;

const UserImage = styled.img`
    grid-area: image;
    height: 117px;
    width: 117px;
    border-radius: 60px;
    @media(max-width: 375px){
        height: 70px;
        width: 70px;
    }
`;

const UserDescription = styled.p`
    grid-area: description;
    margin: 20px 0 0 0;
    color: ${props => props.theme.colors.light.tertiary};
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
    @media(max-width: 768px){
        margin-top: 24px;
    }
    @media(max-width: 375px){
        font-size: 13px;
    }
`

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
                >
            </UserImage>
            <StyledHeading />
            <UserDescription>This profile has no description dsa joijs adi asj diu ash diusa dhiuashd uiasdh</UserDescription>
            <StyledUserStats />
            <StyledUserLinks />
        </Wrapper>
    );
}

export default UserInformation;