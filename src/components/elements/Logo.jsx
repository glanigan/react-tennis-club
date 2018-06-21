import styled from 'styled-components'

const Logo = styled.img `
  width:${props => props.width ? props.width : '45px'};
  height:${props => props.height ? props.height : '45px'};

`
export default Logo
