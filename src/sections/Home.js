import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className='home'>
            <div className="home-content">
                <div className="home-content-text">
                    If your can't decide what to do in 2023, we can gift you some ideas
                </div>
                <div className="home-content-button">
                    <Link to='/gift'>SEE GIFT</Link>
                </div>
            </div>
        </section>
    )
}

export default Home