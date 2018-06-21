import styled from 'styled-components'

const TextArea = styled.textarea `
    width:${props => props.width || '100%'};
    height:${props => props.height || '80px'};
    padding: 5px 5px;
    margin:0;
    resize:none;
    font-family:arial;
    border: solid 1px #dfdfdf;
    border-radius:6px;
    &:focus{
        outline: none;
        box-shadow: #77a069 0 0 3px;
    }
`
export default TextArea