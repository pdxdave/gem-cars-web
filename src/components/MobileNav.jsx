import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {navLinks} from '../utilities/misc'
import styled from 'styled-components'
import { useMobileContext } from '../context/nav_context'

const MobileNav = () => {
    const {isMobileOpen, closeMobile } = useMobileContext()
    
    return (
        <Wrapper>
            <div className={`${isMobileOpen ? 'mobile show-mobile' : 'mobile'}`}>
                <div className="mobile-header">
                <h4>Classic<span style={{color:"var(--clr-blue-accent)"}}>Car Parts</span></h4>
                    <button className='close-btn' type="button">
                        <FaTimes onClick={closeMobile}/>
                    </button>
                </div>
                <ul className="links">
                    {navLinks.map(({id, text, url}) => {
                        return <li key={id}>
                            <Link to={url} onClick={closeMobile}>{text}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    
    .mobile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }

    .links {
        margin-bottom: 2rem;
    }

    .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    color: gray;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
  }
    .mobile {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #fff;
        transform: translate(-100%);
        transition: 0.3s ease-in-out;
    }
    .show-mobile {
    transform: translate(0);
    z-index: 999;
  }

    .close-btn {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor:pointer;
    }

    @media screen and (min-width: 900px) {
    .mobile {
      display: none;
    }
  }
`
export default MobileNav