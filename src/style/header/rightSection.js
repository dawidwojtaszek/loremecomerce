import styled from "styled-components";

export const RightSection = styled.div`
    display: flex;
    justify-content: space-between;
    height: 75px;
    align-items: flex-end;
        & a{
        color:#000;
        text-decoration: none;
    }
    @media(max-width:920px){
        display: none;
    }
`

export const RightElement = styled.div`
    display:flex;
    position: relative;
    cursor: pointer;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    border-right: ${({ border }) => border ? ('1px solid') : ('none')};
    padding: 0 1rem;

`
export const Counter = styled.div`
    color:#fff;
    background: #000;
    width: 23px;
    height: 23px;
    padding:.2rem;
    margin:.5rem;
    border-radius: 100%;
    font-size: 15px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ElementIcon = styled.div`
    padding:0.5rem;
    font-size:1.5rem;
        @media(max-width:1000px){
        font-size: 1rem;
    }
`
export const Hamburger = styled.button`
    display: none;
    border:none;
    background:none;
    padding:2rem;
    font-size: 2rem;
    cursor: pointer;
    @media(max-width:920px){
        display: block;
    }
`