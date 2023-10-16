import styled from 'styled-components'
import Sort from './Sort'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utilities/helper'

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
          <div className="content">
            <form onSubmit={(e) => e.preventDefault()}>


              {/* manufacturer */}
              <div className="form-settings">
              <h5>Brand</h5>
                <div className="agents">
                  {mfgs.map((mf, index) => {
                    return <button
                        key={index}
                        onClick={updateFilters}
                        name="mfg"
                        type="button"
                        className={`${mfg === mf.toLowerCase() ? 'active' : null}`}
                      >
                        {mf}
                    </button>
                  })}
                </div>
              </div>
            {/* end of part type */}

            {/* part types */}
            <div className='form-settings'>
              <h5>Part Types</h5>
                <select 
                    name="part_type" 
                    id="part_type" 
                    value={part_type} 
                    onChange={updateFilters}
                    className=""
                  >
                    {part_types.map((pt, index) => {
                      return <option key={index}>{pt}</option>
                    })}
                </select>
            </div>
            {/* end of part types */}

            {/* price range */}
            <div className="form-settings">
              <h5>Price</h5>
              <p>{formatPrice(price)}</p>
              <input type="range" 
                      name="price" 
                      onChange={updateFilters} 
                      min={min_price} 
                      max={max_price}
                      value={price}
                />
            </div>

           {/* end price range */}

            </form>
            <button className='btn-clear' onClick={clearFilters}>Clear Filters</button>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section `
    
    .form-settings {
    margin-bottom: 1.3em;
  }

  .agents {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5em;
  }

  button {
    text-align: left;
    border: none;
    font-size: 1rem;
    color: var( --clr-grey-600);
    background: transparent;
    text-transform: capitalize;
    cursor: pointer;
    
  }
  .active {
    color: var( --clr-grey-900);
    text-decoration: underline;
  }

  .btn-clear {
    background: #5D668D;
    color: #fff;
    font-family: inherit;
    padding: .5em 1em;
    font-size: 1rem;
  }

  @media (min-width: 768px){
    .test{
      position: sticky;
      top: 5em;
  }
}

`
export default Filters