import React , {useEffect, useRef} from 'react';
import { links } from '../navLinks';
import { icons } from '../navLinks';
import { Link } from 'react-router-dom'; 
import {AiOutlineMenu} from "react-icons/ai"
import { useLocation } from 'react-router-dom';

export const NavBar = () => {

    const [isClicked, setIsClicked] = React.useState(false)
    const linksContainer = useRef()
    const pageLinks = useRef()

    useEffect(()=> {
        const height = pageLinks.current.getBoundingClientRect().height
        if (isClicked) {
            linksContainer.current.style.height = `${height}px`
        } else {
            linksContainer.current.style.height = `0px`
        }
        
    }, [isClicked])

  return (
    <nav>
        <div className='nav-content-container'>
        <div className='nav-header'>
            <h3>
                <span
                    style={{
                        color: useLocation().pathname == "/menu"? "#c59d5f" : "rgb(99, 196, 252)"
                    }}>
                        Saad_Shahrour
                    </span> 
            </h3>
            <button className='toggle-button'
             onClick={() => setIsClicked(prevValue => !prevValue)}>
                    <AiOutlineMenu style={{fontSize: "20px",
                     fontWeight: "bold",
                     verticalAlign: "bottom",
                     transition: "all ease .5s",
                     transform: isClicked? "rotate(-90deg)" : "rotate(0deg)",
                     color: useLocation().pathname == "/menu"? "#c59d5f" : "rgb(99, 196, 252)"}}
                     />
            </button>
        </div>
        <div className='links-container' ref={linksContainer}>
            <ul ref={pageLinks}>
                {links.map(link => 
                <Link key={link.id} to={link.url}>
                    <li>
                        {link.link}
                    </li>
                </Link>)}
            </ul>
        </div>
        <ul className='icons-container'>
            {icons.map(icon =>
                <a key= {icon.id} href={icon.url}>
                    <li>
                        {icon.icon}
                    </li>
                </a>
                )}
        </ul>
        </div>
    </nav>
    
  )
}
