import SearchButton from "./SearchButton";
import SearchIcon from '../../icons/icon-search.svg'
import styled from 'styled-components';

const Input = styled.input``
const Wrapper = styled.div``

function SearchBar() {

    return(
        <Wrapper>
            <img 
                src={SearchIcon}
                height="24px"
                width="24px"
                alt="search-icon"
            />
            <Input type="text"/>
            <SearchButton/ >
        </Wrapper>
    );
}


export default SearchBar;