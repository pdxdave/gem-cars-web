import styled from "styled-components"

const Part = ({url}) => {
  return (
    <Wrapper>
        <img src={url} alt="location" />
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

`

export default Part