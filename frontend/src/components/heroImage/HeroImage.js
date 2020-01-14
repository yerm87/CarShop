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

export const BuyingAdviceImage = styled.div`
    background: url(data:image/png;base64,${props => props.img}) no-repeat center center;
    background-size: cover;
    height: 250px;
    width: 330px;
    min-width: 330px;
    margin: 0; 
`

export const BuyingAdviceItemImage = styled.div`
    background: url(data:image/png;base64,${props => props.img}) no-repeat center center;
    background-size: cover;
    height: 350px;
    width: 100%; 
`

export const BuyingAdviceItemNoImage = styled.div`
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    height: 350px;
    width: 330px;
    min-width: 330px; 
`

export const ListingMainImage = styled.div`
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    height: 350px;
    width: 730px;
`

export const ListingInfoScrollImageItem = styled.div`
    background: url(${props => props.img}) no-repeat center center;
    background-size: cover;
    height: 40px;
    width: 93px;
    border: ${props => props.active ? '2px solid var(--mainRed);' : '2px solid var(--mainWhite)'}
`

export default HeroImage;