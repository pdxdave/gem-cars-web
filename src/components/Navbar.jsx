import styled from "styled-components";
import { Link } from "react-router-dom";
import {navLinks} from '../utilities/misc';
import {FiMenu} from 'react-icons/fi';
import { useMobileContext } from "../context/nav_context";

const Navbar = () => {
  const {openMobile} = useMobileContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h4>Classic <span style={{color:"var(--clr-blue-accent)"}}>Car Parts</span></h4>
          </Link>
          <button type="button" className='hamburger' onClick={openMobile}>
              <FiMenu />
          </button>
        </div>
        <ul className='nav-links'>
          {navLinks.map(link => {
            const {id, text, url} = link
            return <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 5rem;
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 9;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5em;
  }
  .nav-header h4 {
    color: var(--clr-grey-700);
  }

  .hamburger {
    font-size: 1.6rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 900px){
    .hamburger {
      display: none;
    }
    .nav-links {
      display: flex;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li a {
      padding: 0 .7em;
      text-transform: capitalize;
      color: var(--clr-grey-700)
    }
  }
`

export default Navbar