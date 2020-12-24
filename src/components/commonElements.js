import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CommonButtonL = styled(Link)`
    border: 1px solid #6252FF;
    border-radius: 50%;
    padding: 12px 36px;
    color: #6252FF;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;

    :hover {
        background-color: #6252FF;
        color: white;
    }
`