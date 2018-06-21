import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavLink = styled(Link) `
  color:#222222;
  text-decoration:none;
  padding: 0 5px;
  &:hover{
    color:#22aa22;
  }
`;

export default NavLink
