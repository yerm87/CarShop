import React, { Component } from 'react';
import classes from './FilterComponent.css';

class FilterComponent extends Component {
    render(){
        const makesItemsForRender = this.props.makesItems.map(item => {
            return (
                <div className={classes.makeItem}>
                    <input type="checkbox" 
                           id={item} 
                           name="makes" 
                           value={item}
                           onChange={this.props.changeHandler} />
                    <label htmlFor={item}>{item}</label>
                </div>
            )
        });

        const modelsItemsForRender = this.props.modelsItems.map(item => {
            return (
                <div className={classes.modelItem}>
                    <input type="checkbox" 
                           id={item} 
                           name="models" 
                           value={item}
                           onChange={this.props.changeHandler} />
                    <label htmlFor={item}>{item}</label>
                </div>
            )
        })

        const inputClasses = [classes.selectLocation];
        if(!this.props.zipValid){
            inputClasses.push(classes.invalid);
        }

        const errorMessageClasses = [classes.errorMessage];
        if(!this.props.zipValid){
            errorMessageClasses.push(classes.errorMessageDisplay);
        }

        return (
            <div className={classes.mainContainer}>
                <p className={classes.resultsNumber}>{this.props.resultsNumber}</p>
                <div className={classes.location}>
                    <p>Location</p>
                    <div className={inputClasses.join(' ')}>
                        <div className={classes.radius}>
                            <div className={classes.searchRadius}>Search radius</div>      
                            <select name="radius"
                                    onChange={this.props.changeHandler}>
                                <option value="10">10 miles</option>
                                <option value="20">20 miles</option>
                                <option value="30">30 miles</option>
                                <option value="40">40 miles</option>
                                <option value="50">50 miles</option>
                                <option value="75">75 miles</option>
                                <option value="100">100 miles</option>
                            </select>
                        </div>
                        <div>
                            <div className={errorMessageClasses.join(' ')}>zip is not valid</div>
                            <input type="number" 
                               name="zip" 
                               placeholder="zip code"
                               onChange={this.props.onChangeInputNumber}
                               onBlur={this.props.changeHandler} />
                        </div>
                    </div>
                </div>
                <div className={classes.condition}>
                    <p>Condition</p>
                    <div className={classes.conditionButtons}>
                        <div className={classes.allElements}>
                            <label htmlFor="all">All</label>
                            <input type="radio" 
                                   name="condition" 
                                   value="select"
                                   onChange={this.props.changeHandler} />
                        </div>
                        <div className={classes.new}>
                            <label htmlFor="condition">New</label>
                            <input type="radio" 
                                   name="condition" 
                                   value="New Car"
                                   onChange={this.props.changeHandler} />
                        </div>
                        <div className={classes.used}>
                            <label htmlFor="condition">Used</label>
                            <input type="radio" 
                                   name="condition" 
                                   value="Used Car"
                                   onChange={this.props.changeHandler}  />
                        </div>
                    </div>
                </div>
                <div className={classes.year}>
                    <p>Year</p>
                    <div className={classes.yearSelect}>
                        <div className={classes.yearSelectElement}>
                            <label htmlFor="minYear">Min</label>
                            <select name="minYear"
                                    onChange={this.props.changeHandler}>
                                <option value="select">select</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <div style={{ fontWeight: 'bold',
                                      padding: '36px 20px 0 30px' }}>to</div>
                        <div className={classes.yearSelectElement}>
                            <label htmlFor="maxYear">Max</label>
                            <select name="maxYear"
                                    onChange={this.props.changeHandler}>
                                <option value="select">select</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={classes.make}>
                    <p>Make</p>
                    <div className={classes.makes}>
                        {makesItemsForRender}
                    </div>
                </div>
                {this.props.modelsItems.length > 0 ? ( 
                    <div className={classes.model}>
                        <p>Model</p>
                        <div className={classes.models}>
                            {modelsItemsForRender}
                        </div>
                    </div>
                    ) : null}
                <div className={classes.price}>
                    <p>Price</p>
                    <div className={classes.selectPrice}>
                        <div className={classes.selectPriceElement}>
                            <label htmlFor="minPrice">Min</label>
                            <select name="minPrice"
                                    onChange={this.props.changeHandler}>
                                <option value="select">Min Price</option>
                                <option value="2000">$2,000</option>
                                <option value="4000">$4,000</option>
                                <option value="6000">$6,000</option>
                                <option value="8000">$8,000</option>
                                <option value="10000">$10,000</option>
                                <option value="15000">$15,000</option>
                                <option value="20000">$20,000</option>
                                <option value="25000">$25,000</option>
                                <option value="30000">$30,000</option>
                                <option value="35000">$35,000</option>
                                <option value="40000">$40,000</option>
                                <option value="45000">$45,000</option>
                                <option value="50000">$50,000</option>
                                <option value="60000">$60,000</option>
                                <option value="70000">$70,000</option>
                                <option value="80000">$80,000</option>
                                <option value="90000">$90,000</option>
                                <option value="100000">$100,000</option>
                            </select>
                        </div>
                        <div style={{ fontWeight: 'bold',
                                      padding: '36px 0 0 10px' }}>to</div>
                        <div className={classes.selectPriceElement}>
                            <label htmlFor="maxPrice">Max</label>
                            <select name="maxPrice"
                                    onChange={this.props.changeHandler}>
                                <option value="select">Max Price</option>
                                <option value="2000">$2,000</option>
                                <option value="4000">$4,000</option>
                                <option value="6000">$6,000</option>
                                <option value="8000">$8,000</option>
                                <option value="10000">$10,000</option>
                                <option value="15000">$15,000</option>
                                <option value="20000">$20,000</option>
                                <option value="25000">$25,000</option>
                                <option value="30000">$30,000</option>
                                <option value="35000">$35,000</option>
                                <option value="40000">$40,000</option>
                                <option value="45000">$45,000</option>
                                <option value="50000">$50,000</option>
                                <option value="60000">$60,000</option>
                                <option value="70000">$70,000</option>
                                <option value="80000">$80,000</option>
                                <option value="90000">$90,000</option>
                                <option value="100000">$100,000</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={classes.mileage}>
                    <p>Mileage</p>
                    <div className={classes.mileageItems}>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="10000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">10,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="20000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">20,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="30000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">30,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="40000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">40,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="50000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">50,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="60000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">60,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="70000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">70,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="80000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">80,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="90000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">90,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="100000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">100,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="110000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">110,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="120000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">120,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="130000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">130,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="140000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">140,000 or less</label>
                        </div>
                        <div className={classes.mileageItem}>
                            <input type="radio" 
                                   name="mileage" 
                                   value="150000"
                                   onChange={this.props.changeHandler} />
                            <label htmlFor="mileageItem">150,000 or less</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterComponent;