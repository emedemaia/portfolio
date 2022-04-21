import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import "../styles/Home.css"

export const Home = () => {
    return (
        <>

            <div className="home En" id="home"></div>
            <Header />
            <Main />
            <Footer />

        </>
    )
}
