import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { usePartsContext } from '../context/parts_context';
import { single_part_url as url } from '../utilities/misc';
import {ProcessImages} from '../components'
import { formatPrice } from '../utilities/helper';
import {
  Loading, 
  Error
} from '../components'
import styled from 'styled-components';

const SinglePartsPage = () => {

  const {id} = useParams()

  const {
    single_part_loading: loading,
    single_part_error: error,
    single_part: part,
    fetchSinglePart
  } = usePartsContext()

  useEffect(() => {
    fetchSinglePart(`${url}${id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if(loading){
    return <Loading msg="Your Property Is Loading" />
  }
  if(error){
    return <Error msg="There was an error loading the page"/>
  }


  const {
    images,
    name,
    price,
    part_type
  } = part

  return (
    <Wrapper className="page-setting">
      <div className="test">
        <div className="part-divider">
          <ProcessImages images={images} />
          <div className="part-specs">
            <h4>{name}</h4>
            <p>{formatPrice(price)}</p>
            <p>{part_type}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main `
  
  .part-divider {
    display: grid;
    gap: 4rem;
    margin-top: 1em;
  }

  .part-specs {
    color: var(--clr-grey-600);
  }

  @media (min-width: 900px){
  .part-divider {
    grid-template-columns: 1fr 1fr;
    /* border: 1px solid red; */
    
  }
  .test {
    /* height: calc(100vh - (5em + 13em)); */
    height: calc(100vh - 5em);
  }

}
`

export default SinglePartsPage