import styled from "styled-components";

export const MyOrderForm = styled.form`
  
    div{
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        border: 3px solid #10453b;
        border-radius: 15px;
        margin:1vw 0 0 0;
        width: 99%;
        color: #2B6030;
        
        button{
            background: lavender;
            box-shadow: 0.5px 1px 4px black;
            font-size: 1.3vw;
            font-weight: bold;
            color: #2B6030;
            padding: 0.2vw 1vw 0.2vw 1vw;
            margin-left:1vw;
            border-radius: 50vw;
            :active{
                background-color: lightgrey;
            }
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
            background-color: lightgray;
        }
    }
    #select-product{
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: space-around;
        border: 3px solid #10453b;
        border-radius: 15px;
        p{
            font-size: 1.5vw;
            font-weight: bold;
        }
        label{
            font-size: 1.5vw;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 7px;
            margin-top: 7px;
        }
        input{
            margin-bottom: 7px;
            font-size: 1vw;
            padding: 0.2vw 1vw 0.2vw 1vw ;
            background-color: lightgray;
            box-shadow:2px 2px 5px;
        }
    }
    #selec-client{
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: space-around;
        height: 4vw;
        label{
            margin-right: 0.5vw;
        }
        input{
            width: 50vw;
            background-color: lightgray;
        }
    }
    #order{
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content: space-around;
        border: 3px solid #10453b;
        border-radius: 15px;
        padding: 1vw;
        width: 97%;
        p{
            font-size: 1.2vw;
            font-weight: bold;
        }
        label{
            font-size: 1.5vw;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 7px;
            margin-top: 7px;
        }
        input{
            margin-bottom: 7px;
            font-size: 1vw;
            padding: 0.2vw 1vw 0.2vw 1vw ;
            background-color: lightgray;
            box-shadow:2px 2px 5px;
            text-align: center;
        }
        button{
            font-size: medium;
        }
    }
`;