import React, {useState} from 'react'
import {Link, Route} from 'react-router-dom'

import GenderAge from '../../components/FindingGiftForm/GenderAge'
import Relation from '../../components/FindingGiftForm/Relation'
import Steps from '../../components/FindingGiftForm/Steps'
import Header from '../../components/Header'

function FindGift({giftInfo, setGiftInfo}) {
    const [step, setStep] = useState(1)


    return (
        <>
            <Header />
            <Steps selected={step} setSelected={setStep} />
            <Route path='/find-gift' exact>
                <GenderAge step={step} setStep={setStep} giftInfo={giftInfo} setGiftInfo={setGiftInfo} />
            </Route>
            <Route path='/find-gift/relation' exact>
                <Relation step={step} setStep={setStep} giftInfo={giftInfo} setGiftInfo={setGiftInfo}  />
            </Route>
            <Route path='/find-gift/relation/ocassion' exact>
                <Relation step={step} setStep={setStep} giftInfo={giftInfo} setGiftInfo={setGiftInfo}  />
            </Route>
        </>
    )
}

export default FindGift
