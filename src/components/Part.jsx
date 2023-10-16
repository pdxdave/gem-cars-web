import styled from "styled-components"
import { formatPrice } from '../utilities/helper'
import { Link } from "react-router-dom"

const Part = ({url, price}) => {
  return (
    <Wrapper>
        <img src={url} alt="location" />
        <header className="parts-header">
          <p className="part-price">{formatPrice(price)}</p>
        </header>

        <Link>
          <button className="btn">more info</button>
        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article `
    width: 400px;
    max-width: 100%;

    img{
    width: 100%;
    height: 300px;
    object-fit: fill;
    padding: 0px;
    margin: 0px;
  }

  .parts-header > p {
    margin: 0px;
    text-transform: capitalize;
  }

  .btn {
    width: 100%;
    font-family: inherit;
    text-transform: capitalize;
    font-size: 1.2rem;
    border: none;
    padding: .25em 0;
    margin-top: .25em;
    background: #5D668D;
    color: #fff;
    cursor: pointer;
  }
`

export default Part