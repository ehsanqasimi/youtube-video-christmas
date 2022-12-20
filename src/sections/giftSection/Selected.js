import React from 'react'
import GiftImage from './../images/GiftImage.svg'

function Selected(props) {
    const [open, setOpen] = React.useState(false)
    const img = React.useRef()
    function opening() {
        img.current.classList.add('fade-out')
        img.current.addEventListener('transitionend', () => {
            setOpen(true)
        })
    }
    return (
        <div className='selected'>
            {
                open === false ?
                    <img onClick={opening} ref={img} src={GiftImage} alt="gift image"/> :
                    <h1>{props.gift}</h1>
            }
        </div>
    )
}

export default Selected