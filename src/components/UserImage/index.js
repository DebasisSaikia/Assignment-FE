import React from 'react'
import styled from 'styled-components';


const ImageContainer=styled.div`
width: 400px;
height: 50%;
background-color: red;
`
const Image=styled.img`

`

const UserImage = () => {
    return (
        <ImageContainer>
            <h1>Image</h1>
        </ImageContainer>
    )
}

export default UserImage
