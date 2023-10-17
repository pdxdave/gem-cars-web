import styled from "styled-components"

const Loading = () => {
  return (
    <Wrapper>
      <div>Loading...</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  div {
    text-align: center;
    font-size: 2rem;
  }
`

export default Loading