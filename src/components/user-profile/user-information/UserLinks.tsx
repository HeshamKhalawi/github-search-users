import styled from "styled-components";
import LocationIcon from '../../../icons/icon-location.svg'
import TwitterIcon from '../../../icons/icon-twitter.svg'
import CompanyIcon from '../../../icons/icon-company.svg'
import WebsiteIcon from '../../../icons/icon-website.svg'

const Wrapper = styled.div`    
    margin: 37px 0 0 0;
    display: grid;
    grid-template-columns: auto auto;
    gap: 19px;
`
const InformationWrapper = styled.div`
    display: flex;
    gap: 19px;
    align-items: center;
`
const Img = styled.img`

`
const Span = styled.span`
    color: ${props => props.theme.colors.light.tertiary};
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
`

function UserLinks() {

    return(
        <Wrapper>
            <InformationWrapper>
                <Img src={LocationIcon} alt="Location" height="20px" width="14px"></Img>
                <Span>San Francisco</Span>
            </InformationWrapper>
            <InformationWrapper>
                <Img src={TwitterIcon} alt="Twitter" height="17px" width="20px"></Img>
                <Span>twitter.com</Span>
            </InformationWrapper>
            <InformationWrapper>
                <Img src={WebsiteIcon} alt="Website" height="20px" width="20px"></Img>
                <Span>https://github.blog</Span>
            </InformationWrapper>
            <InformationWrapper>
                <Img src={CompanyIcon} alt="Company" height="20px" width="20px"></Img>
                <Span>@github</Span>
            </InformationWrapper>
        </Wrapper>
    );
}


export default UserLinks;