import React from 'react'
import giftImage from './../images/GiftImage.svg'

function Selecting(props) {
    const giftContainer = React.useRef()
    let gifts = [
        'start doing martial art',
        'start learning web development',
        'start writing a book',
        'start learning a music instrument',
        'start a YouTube channel',
        'start exercising everyday',
        'start learning graphic designing',
        'start doing shoe customization',
        'start learn to hack',
        'start learn to code',
        'travel to as much places as possible',
        'start learning to become a tailor'
    ]
    function giveGift() {
        let gift = gifts[Math.floor(Math.random() * gifts.length)]
        let children = giftContainer.current.children
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.classList.add('fade-out')
            child.addEventListener('transitionend', () => {
                props.getGift(gift)
            })
        }
    }
    return (
        <div ref={giftContainer} className='gift-container'>
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
            <img onClick={giveGift} src={giftImage} alt="gift image" />
        </div>
    )
}

export default Selecting