import React from 'react'
import Arbol from '../../assets/arbol.svg'
import Adornos from '../../assets/adornos.svg'
import { Container, Image2, Image1, ImagesWrapper, HeroText } from './heroElements'


function Hero() {
    return (
        <>
            <Container>
                <ImagesWrapper>
                    <Image1 src={Adornos}></Image1>
                    <Image2 src={Arbol}></Image2>
                </ImagesWrapper>
                <HeroText>Find the ultimate gifts for your favorite people.</HeroText>
            </Container>
        </>
    )
}

export default Hero
