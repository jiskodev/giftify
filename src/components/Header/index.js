import React from 'react'
import LogoImg from '../../assets/giftify.svg'
import { Container, Logo } from './headerElements'

function Header() {
    return (
        <>
            <Container>
                <Logo src={LogoImg}></Logo>
            </Container>
        </>
    )
}

export default Header
