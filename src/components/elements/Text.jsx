import styled from 'styled-components'

const Text = styled.p`
    width:100%;
    margin: 15px auto;
    font-family: 'Open Sans', sans-serif;
    font-size:1em;
    line-height: ${props => props.line || '1.8'};
    font-weight:300;
    color: ${props => props.color};
    text-align: ${props => props.align};
    align-content: center;
`
export default Text