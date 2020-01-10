import React, { Component } from 'react';
import classes from './SideBar.css';
import FilterComponent from './filterComponent/FilterComponent';
import NewSearch from './newSearch/NewSearch';
import { connect } from 'react-redux';
import * as actions from '../../reduxStore/searching/Actions';

class SideBar extends Component {

    filterResultsFieldActive = () => {
        this.props.filterComponentActive();
    }

    newSearchActive = () => {
        this.props.filterComponentNotActive();
    }

    render(){
        const arrayOfFilterResults = [classes.filterResults];
        const arrayOfNewSearch = [classes.newSearch];

        if(this.props.filterComponent){
            arrayOfFilterResults.push(classes.active);
        } else if(!this.props.filterComponent){
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
                    {this.props.filterComponent ? <FilterComponent resultsNumber={this.props.resultsNumber}
                                                               changeHandler={this.props.changeHandler}
                                                               makesItems={this.props.makesItems}
                                                               modelsItems={this.props.modelsItems}
                                                               onChangeInputNumber={this.props.onChangeInputNumber} 
                                                               zipValid={this.props.zipValid} /> : 
                                               <NewSearch searchItems={this.props.searchItems} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filterComponent: state.searchReducer.filterComponent
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterComponentActive: () => dispatch(actions.filterComponentActive()),
        filterComponentNotActive: () => dispatch(actions.filterComponentNotActive())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar) ;