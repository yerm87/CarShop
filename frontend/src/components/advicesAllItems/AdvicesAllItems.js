import React from 'react';
import AdvicesItem from './advicesItem/AdvicesItem';

const AdvicesAllItems = props => {
    const items = props.elements.map(element => {
        return <AdvicesItem element={element}
                            reviews={props.reviews} />
    })

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    )
}

export default AdvicesAllItems;