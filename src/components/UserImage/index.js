import React from 'react'
import styled from 'styled-components';
import { userImages } from '../../utils/apis';


const ImageContainer=styled.div`
width: 398px;
height: 50%;
margin: 0 auto;
background-color: #ecf0f1;
display: flex;
align-items: center;
justify-content: center;
`
const Image=styled.img`
height: 200px;
object-fit: contain;
`

const UserImage = () => {
    return (
        <ImageContainer>
           <Image src={userImages} alt="user_image" />
        </ImageContainer>
    )
}

export default UserImage
