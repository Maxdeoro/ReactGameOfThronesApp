import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 27px;
    font-weight: bold;
    color: # 974ee0;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <a href='#'>Game of Thrones DB</a>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <a href='#'>CHARACTERS</a>
                </li>
                <li>
                    <a href='#'>HOUSES</a>
                </li>
                <li>
                    <a href='#'>BOOKS</a>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;