import styled from 'styled-components';

const Button = styled.button`
    &:hover{
        background: #60ABFF; 
    }
    position: absolute;
    right: 0;
    margin: 0 10px 0 0;
    background: #0079FF;
    border: none;
    height: 50px;
    width: 106px;
    border-radius: 10px;
    color: white;
    font-family: ${props => props.theme.fonts.h1.family};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    @media(max-width: 375px){
        height: 46px;
        width: 84px;
        font-size: 14px;
    }

`

function SearchButton() {

    return(
        <Button>
            Search
        </Button>
    );
}


export default SearchButton;