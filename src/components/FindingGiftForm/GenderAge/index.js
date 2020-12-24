import React from 'react'
import { Link } from 'react-router-dom'
import { TextInput } from '../formElements'

function GenderAge({step, setStep, giftInfo, setGiftInfo}) {
    return (
        <>
            <TextInput placeholder='Age' value={giftInfo.age} onChange={(e) => setGiftInfo({...giftInfo, age: e.target.value})}></TextInput>
            <TextInput placeholder='Gender'></TextInput>
            <Link to='/find-gift/relation' onClick={() => setStep(step + 1)}>Next</Link>
        </>
    )
}

export default GenderAge
