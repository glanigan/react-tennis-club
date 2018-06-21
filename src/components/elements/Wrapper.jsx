import styled from 'styled-components'

const Wrapper = styled.div `
  display: flex;
  justify-content: ${props => props.align ? props.align : 'flex-start'};
  flex-wrap: wrap;
  width: ${props => props.width || '100%'};
  max-width:100%;
  height:${props => props.height};
  margin: ${props => props.margin};
  background: ${props => props.background};
  position: ${props => props.position};
  bottom: ${props => props.bottom};
  &:hover{
    ${props => props.hover && 'opacity:0.9'};
  }
`
export default Wrapper
