import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { usePartsContext } from '../context/parts_context';
import { single_part_url as url } from '../utilities/misc';
import {ProcessImages, Contact} from '../components'
import { formatPrice } from '../utilities/helper';
import {
  Loading, 
  Error
} from '../components'
import styled from 'styled-components';

const SinglePartsPage = () => {
  const [openModal, setOpenModal] = useState(false)

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
    part_type,
    desc
  } = part

  return (
    <>
    {openModal && <Contact closeModal={setOpenModal} name={name}/>}
      <Wrapper className="page-setting">
        <div className="test">
          <div className="part-divider">
            <ProcessImages images={images} />
            <div className="part-specs">
              <h4><span>{name}</span></h4>
              <p><span>{part_type}</span></p>
              <p>{desc}</p>
              <p>{formatPrice(price)}</p>
              <div>
                <button className='btn-interested' onClick={() => setOpenModal(true)}>I'm Interested!</button>
              </div>
            </div>
            
          </div>
          
        </div>
      </Wrapper>
    </>
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

  span {
    color: var(--clr-grey-900);
  }


  .btn-interested {
    background-color: var(--clr-btn);
    font-family: inherit;
    color: var(--clr-reg-text);
    font-size: 1.2rem;
    padding: .15em .4em;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    margin-top: 1em;
    transition: .2s ease-in-out;
  }

  .btn-interested:hover {
    background-color: var(--clr-btn-hover);
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