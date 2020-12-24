import React, {useState} from 'react'
import { Container, LightGrayBar, NumberBox, StepsTitle } from './stepsElements'
import GiftIcon from '../../../assets/giftIcon.svg'


function Steps({selected, setSelected}) {

    return (
        <>
            <StepsTitle>Step {selected} of 6</StepsTitle>
            <Container selected={selected}>
                <NumberBox pink completed={selected < 2 ? false : true}>1</NumberBox><LightGrayBar completed={selected < 2 ? false : true}></LightGrayBar>
                <NumberBox pink={selected < 2 ? false : true}
                completed={selected < 3 ? false : true}>2</NumberBox><LightGrayBar completed={selected < 3 ? false : true}></LightGrayBar>
                <NumberBox pink={selected < 3 ? false : true}
                completed={selected < 4 ? false : true}>3</NumberBox><LightGrayBar completed={selected < 4 ? false : true}></LightGrayBar>
                <NumberBox pink={selected < 4 ? false : true}
                completed={selected < 5 ? false : true}>4</NumberBox><LightGrayBar completed={selected < 5 ? false : true}></LightGrayBar>
                <NumberBox pink={selected < 5 ? false : true}
                completed={selected < 6 ? false : true}>5</NumberBox><LightGrayBar completed={selected < 6 ? false : true}></LightGrayBar>
                <NumberBox pink={selected < 6 ? false : true}
                completed={selected < 7 ? false : true}><img src={GiftIcon}></img></NumberBox>
            </Container>
        </>
    )
}

export default Steps
