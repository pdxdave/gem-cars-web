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

`

export default Part