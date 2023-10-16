import { useFilterContext } from "../context/filter_context"
import styled from "styled-components"
import Part from './Part'

const PartsList = () => {
  const {filtered_parts: parts} = useFilterContext()
  return (
    <Wrapper>
       {parts.map((part) => {
        return <Part key={part.id} {...part}/>
       })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    row-gap: 20px;
    column-gap: 10px;
    justify-items: center; 

`
export default PartsList