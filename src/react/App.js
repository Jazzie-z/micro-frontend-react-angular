import React, { useState, useEffect } from 'react'
import { event } from '../event-bus'
import { showData } from '../feed/shows';
import { Card } from './components/Card';
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
`
const Container = styled.div`
border: 5px solid #51c9ea;
display:flex;
flex-direction:column;
width:fit-content;
padding: 30px;
margin-right: 20px;
`
const Title = styled.div`
font-size: 24px;
margin-bottom: 10px;
`
const List = styled.div`
display:flex;
`
const LogoContainer = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.img`
width: 300px;

`
export const App = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    {showData.title}
                </Title>
                <List>
                    {showData.items.map((item, index) => <Card key={index} image={item.image} onClick={() => event.emit('message', { data: item })} />)}
                </List>
            </Container>
            <LogoContainer><Logo src={'https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ'}/></LogoContainer>
        </Wrapper>
    )
}