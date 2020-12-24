import React from 'react'
import { CommonButtonL } from '../commonElements'
import { Container, TextInput, Title } from './startingFormElements'

function StartingForm({giftInfo, setGiftInfo}) {
    return (
        <>
            <Container>
            <Title>The gift is for...</Title>
            <TextInput placeholder='Name' value={giftInfo.name} onChange={(e) => setGiftInfo({...giftInfo, name: e.target.value})}></TextInput>
                <CommonButtonL to='/find-gift'>Next</CommonButtonL>
            </Container>
        </>
    )
}

export default StartingForm
