import styled from "styled-components";
import LocationIconLight from '../../../icons/icon-location.svg'
import TwitterIconLight from '../../../icons/icon-twitter.svg'
import CompanyIconLight from '../../../icons/icon-company.svg'
import WebsiteIconLight from '../../../icons/icon-website.svg'
import LocationIconDark from '../../../icons/icon-location-dark.svg'
import TwitterIconDark from '../../../icons/icon-twitter-dark.svg'
import CompanyIconDark from '../../../icons/icon-company-dark.svg'
import WebsiteIconDark from '../../../icons/icon-website-dark.svg'

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
const Span = styled.span<{currentTheme: string}>`
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
    color: ${props => props.currentTheme === "light" ? props.theme.colors.light.tertiary : "#FFFFFF"};
    @media(max-width: 375px){
        font-size: 13px;
    };
`
const LocationStyle = styled(Span)<{currentTheme: string}>`
    margin-left: 6px;
`

function UserLinks({currentTheme}: any) {
    return(
        <Wrapper>
            <InformationWrapper>
                <img src={currentTheme === "light" ? LocationIconLight : LocationIconDark} alt="Location" height="20px" width="14px" />
                <LocationStyle currentTheme={currentTheme}>San Francisco</LocationStyle>
            </InformationWrapper>
            <InformationWrapper>
                <img src={currentTheme === "light" ? TwitterIconLight : TwitterIconDark} alt="Twitter" height="17px" width="20px"/>
                <Span currentTheme={currentTheme}>twitter.com</Span>
            </InformationWrapper>
            <InformationWrapper>
                <img src={currentTheme === "light" ? WebsiteIconLight : WebsiteIconDark} alt="Website" height="20px" width="20px"/>
                <Span currentTheme={currentTheme}>https://github.blog</Span>
            </InformationWrapper>
            <InformationWrapper>
                <img src={currentTheme === "light" ? CompanyIconLight : CompanyIconDark} alt="Company" height="20px" width="20px"/>
                <Span currentTheme={currentTheme}>@github</Span>
            </InformationWrapper>
        </Wrapper>
    );
}


export default UserLinks;