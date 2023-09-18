import React from 'react';
import {Link} from 'react-router-dom';
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
    // color: #fff;
    color: #c96f02;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <div>
             <HeaderBlock>
                <HeaderTitle>
                    <Link to='/'>Game of Thrones DB</Link>
                </HeaderTitle>
                <HeaderLinks>
                    <li>
                        <Link to='/characters/'>CHARACTERS</Link>
                    </li>
                    <li>
                        <Link to='/houses/'>HOUSES</Link>
                    </li>
                    <li>
                        <Link to='/books/'>BOOKS</Link>
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        </div>
    );
};

export default Header;