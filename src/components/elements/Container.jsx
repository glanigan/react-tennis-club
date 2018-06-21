import styled from 'styled-components'

const Container = styled.div `
  display:flex;
  flex-wrap: wrap;
  justify-content: ${props => props.align};
  align-items:center;
  align-content:center;
  max-width:800px;
  width:100%;
  background:${props => props.background};
  margin:0 auto;
  margin-top:${props => props.margin_top};
`;
export default Container
