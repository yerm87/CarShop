import React, { Component } from 'react';
import classes from './SideBar.css';
import FilterComponent from './filterComponent/FilterComponent';

class SideBar extends Component {
    state={
        activeField: true
    }

    filterResultsFieldActive = () => {
        this.setState({
            activeField: true
        })
    }

    newSearchActive = () => {
        this.setState({
            activeField: false
        })
    }

    render(){
        const arrayOfFilterResults = [classes.filterResults];
        const arrayOfNewSearch = [classes.newSearch];

        if(this.state.activeField){
            arrayOfFilterResults.push(classes.active);
        } else if(!this.state.activeField){
            arrayOfNewSearch.push(classes.active);
        }

        return (
            <div className={classes.mainContainer}>
                <div className={classes.buttonsContainer}>
                    <div className={arrayOfFilterResults.join(' ')}>
                        <button onClick={() => this.filterResultsFieldActive()}>Filter Results</button>
                    </div>
                    <div className={arrayOfNewSearch.join(' ')}>
                        <button onClick={() => this.newSearchActive()}>New Search</button>
                    </div>
                </div>
                <div className={classes.content}>
                    {this.state.activeField ? <FilterComponent resultsNumber={this.props.resultsNumber}
                                                               changeHandler={this.props.changeHandler}
                                                               makesItems={this.props.makesItems}
                                                               modelsItems={this.props.modelsItems}
                                                               onChangeInputNumber={this.props.onChangeInputNumber} 
                                                               zipValid={this.props.zipValid} /> : 
                                               <p>new search</p>}
                </div>
            </div>
        )
    }
}

export default SideBar;