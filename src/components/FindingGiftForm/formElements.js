import styled from 'styled-components'

export const TextInput = styled.input`
    font-family: Montserrat;
    display: block;
    font-size: 36px;
    font-weight: 300;
    border: none;
    color: #777777;
    border-bottom: 1px solid #777777;
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    ::placeholder {
        font-weight: 300;
    }
`

export const List = styled.ul`
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const ListItem = styled.li`
    list-style: none;
    font-size: 30px;
    margin: 30px;
    color: ${props => props.selected ? '#FF5E8D' : '#777777'};
    font-weight: ${props => props.selected ? '400' : '300'};
    cursor: pointer;
`