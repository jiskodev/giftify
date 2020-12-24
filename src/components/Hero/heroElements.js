import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6252FF;
`

export const ImagesWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100;
`

export const Image1 = styled.img`
    position: absolute;
    height: 30%;
    top: 0;
    left: 30;
`
export const Image2 = styled.img`
    position: absolute;
    left: 300px;
    height: 50%;
    bottom: 0;
`

export const HeroText = styled.h2`
    color: white;
    max-width: 800px;
    font-size: 30px;
    font-weight: 500;
    padding: 20px;
    margin-top: -40px;
`