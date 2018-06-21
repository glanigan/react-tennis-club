import styled from 'styled-components'

const Input = styled.input `
    width:${props => props.width || '100%'};
    height:${props => props.height || '30px'};
    padding: 2px 5px;
    margin:0;
    border: solid 1px #dfdfdf;
    border-radius:6px;
    &:focus{
        outline: none;
        box-shadow: #77a069 0 0 3px;
    }
`
export default Input