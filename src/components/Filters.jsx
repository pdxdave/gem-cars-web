import styled from 'styled-components'
import Sort from './Sort'
import { useFilterContext } from '../context/filter_context'

const Filters = () => {

  const {
    filters: {
      min_price,
      max_price,
      mfg,
      part_type
    },
    updateFilters,
    clearFilters,
    all_parts
  } = useFilterContext()

  const mfgs = getUniqueValues(all_parts, 'mfg')
  const part_types = getUniqueValues(all_parts, 'part_type')

  return (
    <Wrapper>
        <div className="test">
          <Sort />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
    

`
export default Filters