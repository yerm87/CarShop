import React, { Component } from 'react';
import classes from './MessagesWindow.css';
import MessageItem from './messageItem/MessageItem';
import axios from 'axios';

class MessagesWindow extends Component {
    state={
        messageItems: [
            {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                content: '',
                itemId: '',
                visited: false,
                image: '',
                year: '',
                male: '',
                model: ''
            }
        ],
        currentItem: null
    }

    componentDidMount(){
        const listingItems = this.props.listingItems.map(item => {
        const image = item.images.length > 0 ? item.images[0] : '';

            return {
                id: item._id,
                year: item.year,
                model: item.model,
                make: item.make,
                image: image
            }
        });

        const listingItemsIds = this.props.listingItems.map(current => current._id);

        axios.post('/get_messageItems', {
            listingItemsIds: listingItemsIds
        }).then(response => {
            this.setState({
                messageItems: response.data
        }, () => {
                const messageItems = this.state.messageItems;
                const messageItemsModified = messageItems.map(element => {
                    const index = listingItems.findIndex(current => current.id === element.itemId);
                        
                    const image = listingItems[index].image !== '' ? 
                    `data:jpeg;base64,${listingItems[index].image}` : '../../assets/no_photo.jpg';

                    const year = listingItems[index].year;
                    const make = listingItems[index].make;
                    const model = listingItems[index].model;

                    return {
                        ...element,
                        image: image,
                        year: year,
                        make: make,
                        model: model
                    }
                });

                this.setState({
                    messageItems: messageItemsModified
                });
            });
        });
    }

    readMessageHandler = currentElement => {
        if(!currentElement.visited){
            axios.get(`/message_visited?id=${currentElement._id}`).then(response => {
                
                if(response.data === 'updated'){
                    const messageItems = this.state.messageItems;
                    const index = messageItems.findIndex(item => item === currentElement);
                    messageItems[index].visited = true;

                    this.props.decrement();

                    this.setState({
                        messageItems: messageItems
                    });
                }
            });
        }
        this.setState({
            currentItem: {
                content: currentElement.content,
                firstName: currentElement.firstName,
                lastName: currentElement.lastName,
                phoneNumber: currentElement.phoneNumber,
                email: currentElement.email
            }
        });
    }

    deleteMessage = currentItem => {
        axios.get(`/delete_message?id=${currentItem._id}`).then(response => {
            if(response.data === 'deleted'){
                const messageItems = this.state.messageItems;
                const index = messageItems.findIndex(item => item === currentItem);
                messageItems.splice(index, 1);

                this.setState({
                    messageItems: messageItems,
                    currentItem: null
                });
            }
        });
    }

    render(){
        const messageItemsRender = this.state.messageItems.map(element => {
            return <MessageItem image={element.image}
                                year={element.year}
                                make={element.make}
                                model={element.model}
                                visited={element.visited}
                                readMessage={() => this.readMessageHandler(element)}
                                deleteMessage={() => this.deleteMessage(element)} />
        });

        let content;

        if(this.state.currentItem === null){
            content = (
                <div className={classes.selectItem}>
                    <p>Click item to read message</p>
                </div>
            )
        } else {
            content = (
                <div className={classes.content}>
                    <div className={classes.name}>
                        <p>{`${this.state.currentItem.firstName} ${this.state.currentItem.lastName}`}</p>
                    </div>
                    <p>{this.state.currentItem.content}</p>
                    <p>Phone: {this.state.currentItem.phoneNumber}</p>
                    <p>Email: {this.state.currentItem.email}</p>
                </div>
            )
        }

        const classList = [classes.messageItems];
        if(this.state.messageItems.length >= 8){
            classList.push(classes.extraItems);
        }

        let component = (
            <div className={classes.container}>
                <div className={classList.join(' ')}>
                    {messageItemsRender}
                </div>
                {content}
            </div>
        )

        if(this.state.messageItems.length === 0){
            component = (
                <div className={classes.container}>
                    <div className={classes.messageItems}>
                    </div>
                    <div className={classes.selectItem}>
                        <p>No Messages</p>
                    </div>
                </div>
            )
        }

        return component
    }
}

export default MessagesWindow;