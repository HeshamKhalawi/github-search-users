import styled from "styled-components";
import LocationIcon from '../../../icons/icon-location.svg'
import TwitterIcon from '../../../icons/icon-twitter.svg'
import CompanyIcon from '../../../icons/icon-company.svg'
import WebsiteIcon from '../../../icons/icon-website.svg'

const Wrapper = styled.div`    
    grid-area: links;
    margin: 37px 0 0 0;
    display: grid;
    grid-template-columns: auto auto;
    gap: 19px;
    @media(max-width: 375px){
        display: flex;
        flex-direction: column;
    }
`
const InformationWrapper = styled.div`
    display: flex;
    gap: 19px;
    align-items: center;
`
const Span = styled.span`
    color: ${props => props.theme.colors.light.tertiary};
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
`
const LocationStyle = styled(Span)`
    margin-left: 6px;
`

function UserLinks() {
    return(
        <Wrapper>
            <InformationWrapper>
                <img src={LocationIcon} alt="Location" height="20px" width="14px" />
                <LocationStyle>San Francisco</LocationStyle>
            </InformationWrapper>
            <InformationWrapper>
                <img src={TwitterIcon} alt="Twitter" height="17px" width="20px"/>
                <Span>twitter.com</Span>
            </InformationWrapper>
            <InformationWrapper>
                <img src={WebsiteIcon} alt="Website" height="20px" width="20px"/>
                <Span>https://github.blog</Span>
            </InformationWrapper>
            <InformationWrapper>
                <img src={CompanyIcon} alt="Company" height="20px" width="20px"/>
                <Span>@github</Span>
            </InformationWrapper>
        </Wrapper>
    );
}


export default UserLinks;