import styled from 'styled-components';

export const ScreenWrapper=styled.div`
    height:75%;
    width:95%;
    display: flex;
    margin:1em auto;
    justify-content: center;
    align-items: center;
    gap:1.5em;
`;
export const Title=styled.h1`
    color:#FEBA35;
    letter-spacing: 1.5px;
    font-weight:300;
    font-size:75px;
`;

export const Section=styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    justify-content: space-around;
    align-items: center;
    gap:2em;
`
export const Content=styled.p`
    color:#fff3b0;
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 1.5px;
    line-height: 1.5em;
`;
export const Image=styled.img`
flex:2;
    display: block;
    width:100%;
`