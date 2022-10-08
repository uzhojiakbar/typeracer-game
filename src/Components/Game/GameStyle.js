import styled from "styled-components";


export const Container = styled.div`
    background-color: #282c34;
    width:1366px;
    height:100vh;
    margin: 0 auto;
    padding: 10px;
`

export const Text = styled.p`
    color:white;
    font-size:30px;
`
export const Input = styled.input`
    border:none;
    outline:none;
    padding:2px;
    font-size:20px;
`

export const P = styled.p`
    color:white;
    font-size: 30px;
    margin-left: ${(props) =>props.margin? props.margin :'100px'};
`
export const Main = styled.div`
`