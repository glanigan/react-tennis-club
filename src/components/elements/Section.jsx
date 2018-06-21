import styled from 'styled-components'

const Wrapper = styled.section `
  display: flex;
  flex-wrap: wrap;
  width:100%;
  min-height: 250px;
  justify-content: ${props => props.align ? props.align : 'flex-start'};
  width: ${props => props.width || '100%'};
  margin-top:${props => props.margin_top};
  background:${props => props.background};
`;
export default Wrapper
