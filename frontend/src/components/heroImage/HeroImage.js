import styled from 'styled-components';

const HeroImage = styled.div`
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    height: ${props => props.sellPage ? '480px' : props.loggedIn ? '450px' : '700px'}
    margin: 0; 
`

export default HeroImage;