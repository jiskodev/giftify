import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 30vh;
`

export const Title = styled.h3`
    font-size: 26px;
    font-weight: 300;
`

export const TextInput = styled.input`
    font-family: Montserrat;
    display: block;
    font-size: 22px;
    font-weight: 300;
    border: none;
    color: #777777;
    border-bottom: 1px solid #777777;
    text-align: center;
    padding: 10px;

    ::placeholder {
        font-weight: 300;
    }
`