import styled from 'styled-components';

export const UserContainer=styled.div`
width: 90%;
height: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
place-items: center;
gap: 3rem;
padding-top: 2rem;

@media(max-width:768px){
    grid-template-columns: 1fr 1fr;
}
`

export const UserWrapper=styled.div`
width: 400px;
height: 450px;
border: 1px solid #dfe6e9;
border-radius:1px ;
&:hover{
    opacity: 0.9;
    transition: all 0.3s ease-in-out;
}
`

export const UserInfo=styled.div`
padding-left: 2rem;
padding-top: 2rem;
padding-bottom: 2rem;
height: 35%;

form{
    margin-top: 0 auto;
    input{
        padding: 8px 7px;
        outline: none;
        border: 2px solid gray;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 5px;
        margin-top: 0.8rem;
        margin-right: 1rem;
        outline: none;
        border: 1px solid #111;
        cursor: pointer;
        background-color: black;
        border-radius: 4px;
        color: #fff;
        &:last-child{
            background-color: transparent;
            color: #111;
        }
    }
}

h2{
    font-size: 1.3rem;
    font-weight: 500;
}
p{
    color: rgba(1,1,1,0.6);
    font-size: 1.1rem;
    padding-top: 0.5rem;

    svg{
        margin-right: 0.5rem;
    }
}
`
export const BottomSection=styled.div`
height: 15%;
background-color:#ecf0f1;
margin-top: 1rem;
border: 1px solid #dfe6e7 ;
display: flex;
align-items: center;
justify-content: space-around;
color: #b2bec9;

svg{
    font-size: 1.5rem;
    cursor: pointer;
    color: gray;
    &:hover{
        color: red;
    }
    &:first-child{
       &:hover{
        transform: scale(1.1);
       }
    }
    &:last-child{
        &:hover{
            transform: rotate(20deg);
        }
    }
}
`