import React from 'react'
import styled from 'styled-components'
const Image = styled.img`
width: 200px;
height: 300px;
margin-right: 10px;
border-radius:5px;
&:hover{
    transform:scale(1.1);
}
`
export const Card = ({ image, onClick }) => {
    return (
        <Image src={image} onClick={onClick}/>
    )
}
