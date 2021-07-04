import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavWrapper=styled.div`
    margin-top:1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index:200;
    
`;

export const Btn=styled.button`
    cursor: pointer;
    color:white;
    font-family: "Yanone Kaffeesatz", sans-serif;
    letter-spacing: 1px;
    box-shadow: 1px 1px 1px 0px black;
	background-color:transparent;
	border-radius:16px;
	border:1px solid black;
	display:inline-block;
    padding:16px 31px;
    text-decoration:none;
	text-shadow:0px 2px 0px #283966;
`;

export const NavItem=styled(Link)`
    color:white;
    text-decoration:none;
    &:hover{
        border-bottom:2px solid #9e2a2b;
    }
`