import styled from "styled-components"

export const Container = styled.div`
    background-color: #222222;
    width:1365.5px;
    height:100vh;
    margin: 0 auto;
    color: white;
    font-family:cursive;
    *::selection{
        background-color:white;
        color:black;
    }
`
export const Box = styled.div`
    width:95%;
    height: 80%;
    padding: 20px;
    display:flex;
    align-items:start;
    gap: 20px;
    flex-direction:column;
`
export const Trace = styled.div`
    width:950px;
    border-bottom: 5px dotted white;
    padding: 15px 0;
`
export const Car = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    padding-left:10px;
`
export const CarImage = styled.div`
    position:absolute;
    left:50px;
    bottom:-15px;
    img{
        width:70px;
    }
`
export const Name = styled.p`
    position:relative;
    display:flex;
    .nickname{
        font-size:15px;
        margin-right:100px;
        z-index:1;
    }
`
export const Speed = styled.p``
export const Head = styled.div`
    background-color:#444444;
    width:950px;
    min-height:150px;
    border-radius:15px;
    padding:10px 10px 20px 10px;
`
export const Text = styled.div`
    height: 80%;
`
export const MainText = styled.div`
    font-size:25px;
    font-family:sans-serif;
    font-weight:900;
    width:900px;
`
export const Input = styled.div`
    height: 20%;
    width: 100%;
`
export const InputText = styled.input`
    width: 100%;
    height: 90%;
    min-height: 30px;
    background-color:#222222;
    outline:none;
    color:white;
    border:none;
    font-size:25px;
    font-family:sans-serif;
    font-weight:900;
    border-radius:7px;
`