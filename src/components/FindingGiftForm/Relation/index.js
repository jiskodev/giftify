import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from '../formElements'

function Relation({giftInfo, setGiftInfo, step, setStep}) {

    return (
        <>
            <h2>{giftInfo.name} is my...</h2>
            <List>
                <div>
                <ListItem selected={giftInfo.relation === 'friend' ? true : false} onClick={() => setGiftInfo({...giftInfo, relation: 'friend'})}>Friend</ListItem>
                <ListItem selected={giftInfo.relation === 'family' ? true : false} onClick={() => setGiftInfo({...giftInfo, relation: 'family'})}>Family</ListItem>
                </div>
                <div>
                <ListItem selected={giftInfo.relation === 'boyfriend' ? true : false} onClick={() => setGiftInfo({...giftInfo, relation: 'boyfriend'})}>Boyfriend</ListItem>
                <ListItem selected={giftInfo.relation === 'workMate' ? true : false} onClick={() => setGiftInfo({...giftInfo, relation: 'workMate'})}>Work mate</ListItem>
                </div>
                <div>
                <ListItem selected={giftInfo.relation === 'son' ? true : false} onClick={() => setGiftInfo({...giftInfo, relation: 'son'})}>Son</ListItem>
                <ListItem selected={giftInfo.relation === 'father' ? true : false} onClick={() => setGiftInfo({...giftInfo, relation: 'father'})}>Father</ListItem>
                </div>
            </List>
            <Link onClick={() => setStep(step + 1)} to='/find-gift/relation/ocassion'>Next</Link>
        </>
    )
}

export default Relation
