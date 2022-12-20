import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const [active, setActive] = React.useState(window.location.pathname.replace('/', '') || 'home')
    const location = useLocation()

    React.useEffect(() => {
        setActive(location.pathname.replace('/','')===''?'home':'gift')
    },[location])

    return (
        <header>
            <nav className='nav'>
                <div className="logo">
                   <Link to='/'>Chirstmas</Link> 
                </div>
                <ul className={active}>
                    <Link to='/'>Home</Link>
                    <Link to='/gift'>Gift</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav