import styled from 'styled-components'

const Form = styled.form `
    display:${props => props.display || 'flex'}
    flex-wrap: ${props => props.flexWrap || 'wrap'}
    width:${props => props.width || '100%'};
    height:${props => props.height};
    
`
export default Form