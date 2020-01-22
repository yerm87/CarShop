import React from 'react';
import classes from './MessageItem.css';
import { ListingInfoScrollImageItem } from '../../../components/heroImage/HeroImage';

const MessageItem = props => {
    const classList = [classes.wrapper];

    if(props.visited){
        classList.push(classes.visited);
    }

    return (
        <div className={classList.join(' ')}
             onClick={props.readMessage}>
            <ListingInfoScrollImageItem img={props.image} />
            <p>{`${props.year} ${props.make} ${props.model}`}</p>
            <div className={classes.deleteButton}
                 onClick={props.deleteMessage}>X</div>
        </div>
    )
}

export default MessageItem;