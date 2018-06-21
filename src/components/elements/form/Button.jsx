import styled from 'styled-components'

const Button = styled.button `
    width:${props => props.width || '100px'};
    height:${props => props.height || '30px'};
    margin:20px 0;
    padding: 2px 5px;
    border: none;
    border-radius:6px;
    color:#ffffff;
    background-color:#77a069;
    &:hover{
        opacity:0.8;
    }
    &:focus{
        outline:none;
    }
`
export default Button