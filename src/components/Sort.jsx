import { useFilterContext } from '../context/filter_context'
import styled from 'styled-components'

const Sort = () => {

    const {
        sort,
        updateSort
    } = useFilterContext()

  return (
    <Wrapper>
        <form>
            <label htmlFor="sort">Sort</label>
            <select 
                name="sort"
                id="sort"
                className='sort-input'
                value={sort}
                onChange={updateSort}
            >
            <option value='price-lowest'>Price (lowest)</option>
            <option value='price-highest'>Price (highest)</option>  

            </select>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    
    select {
        margin-bottom: 1em;
    }

    .sort-input {
    border-color: transparent;
    background: #fff;
    font-size: 1rem;
  }
`


export default Sort