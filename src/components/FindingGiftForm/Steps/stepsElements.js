import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 1000px;
    margin-left: ${props => props.selected === 1 ? '46%' : props.selected === 2 ? '25%' : props.selected === 3 ? '4%' : props.selected === 4 ? '-17%' : props.selected === 5 ? '-38%' : props.selected === 6 ? '-59%' : null};
    transition: 1s;
`
export const StepsTitle = styled.h4`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin: 50px;
`


export const NumberBox = styled.div`
    border-radius: 50%;
    border: ${props => props.pink ? '1px solid #FF5E8D' : '1px solid #707070'};
    background-color: ${props => props.completed ? '#FF5E8D' : 'none'};
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LightGrayBar = styled.div`
    width: 70px;
    height: 1px;
    background-color: ${props => props.completed ? '#FF5E8D' : '#707070'};

`