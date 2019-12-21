import React, { Component } from 'react';
import classes from './DeleteModal.css';

class DeleteModal extends Component {
    render(){
        const classesModal = [classes.modalWrapper];
        if(this.props.active){
            classesModal.push(classes.show);
        }

        return (
            <div className={classesModal.join(' ')}>
                <p>Are you sure you want to delete this item?</p>
                <div className={classes.modalButtons}>
                    <button onClick={this.props.deleteElement}>Yes</button>
                    <button onClick={this.props.closeModal}>No</button>
                </div>
            </div>
        )
    }
}

export default DeleteModal;