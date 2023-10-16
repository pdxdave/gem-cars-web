import styled from "styled-components"
import { formatPrice } from '../utilities/helper'

const Part = ({url, price}) => {
  return (
    <Wrapper>
        <img src={url} alt="location" />
        <header className="parts-header">
          <p className="part-price">{formatPrice(price)}</p>
        </header>
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

`

export default Part