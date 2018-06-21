import styled from 'styled-components'

const Image = styled.img `
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    border-radius: ${props => (props.circle && '50%') || (props.round && '8px')};
    margin: ${props => props.margin};
    object-fit: cover;
`
export default Image