import styled from 'styled-components'
import {Filters, PartsList} from '../components'

const PartsPage = () => {
  return (
    <main>
      <Wrapper className="page-setting">
        <div className="parts">
          <Filters />
          <div>
            <PartsList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div `
  .parts {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px){
    .parts {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default PartsPage