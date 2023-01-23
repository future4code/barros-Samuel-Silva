import styled from 'styled-components';

export const MyProductsList = styled.div`
div{
    display: flex;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    border: 3px solid #10453b;
    border-radius: 15px;
    margin:1vw 0 0 0;
    width: 97%;
    color: #2B6030;
    padding: 1vw;
    button{
        background: lavender;
        box-shadow: 0.5px 1px 4px black;
        font-size: 1vw;
        font-weight: bold;
        padding: 0.2vw 1vw 0.2vw 1vw;
        margin-left:1vw;
        border-radius: 50vw;
        :active{
            background-color: lightgrey;
        }
    }
    h2{
        display: flex;
        text-align: center;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 2.0vw;
        font-weight: bold;
        height: 0.1vw;
        
}
    p{
            font-size: 1.2vw;
            font-weight: bold;
            text-transform: uppercase;
    }
    label{
        font-size: 1vw;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 7px;
        margin-top: 7px;
    }
    input{
        margin-bottom: 7px;
        font-size: 1vw;
        padding: 0.2vw 1vw 0.2vw 1vw ;
        box-shadow:1px 2px 5px;
    }
};
`;

export const MySum = styled.h2`
    text-align: center;
    color: lightgray;
    border-bottom: #2B6030;
    font-weight: bold;
    font-size: xx-large;
    text-transform: uppercase;
    background-color: #2B6030;
`;