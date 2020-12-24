import React from 'react'
import StartingForm from '../../components/StartingForm'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

function Home({ giftInfo, setGiftInfo }) {
    return (
        <>
            <Header />
            <Hero />
            <StartingForm setGiftInfo={setGiftInfo} giftInfo={giftInfo} />
        </>
    )
}

export default Home
