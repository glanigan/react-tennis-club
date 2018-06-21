import styled from 'styled-components'

const Heading = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size:${props => props.size || '2em'};
    font-weight:300;
    color: ${props => props.color};
    text-align: ${props => props.align};
    width:${props => props.width};
    margin: 0;
    padding: 0;
`
export default Heading