import styled from 'styled-components';

const HeroImage = styled.div`
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    height: ${props => props.sellPage ? '480px' : props.loggedIn ? '450px' : props.listings ? '240px' 
    : '700px'}
    margin: 0; 
`

export const ImageListing = styled.div`
    background: url(data:image/png;base64,${props => props.img}) no-repeat center center;
    background-size: cover;
    min-height: 240px;
    min-width: 300px;
    margin: 0; 
`

export default HeroImage;