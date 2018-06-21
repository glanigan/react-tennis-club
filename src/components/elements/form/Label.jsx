import styled from 'styled-components'

const Label = styled.label `
    width:${props => props.width || '100%'};
    height:${props => props.height};
    margin: 5px 0 0 0;
    padding:0;
    font-size:0.8em;
`
export default Label