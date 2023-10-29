import styled from "styled-components";

const Wrapper = styled.div``
const Headers = styled.h4``
const HeadersValue = styled.h2``

function UserStats() {

    return(
        <Wrapper>
            <div>
                <Headers>Repos</Headers> 
                <HeadersValue>8</HeadersValue>
            </div>
            <div>
                <Headers>Followers</Headers> 
                <HeadersValue>2943</HeadersValue>
            </div>
            <div>
                <Headers>Following</Headers> 
                <HeadersValue>29</HeadersValue>
            </div>
        </Wrapper>
    );
}   


export default UserStats;