import React, { Component } from 'react';
import classes from './CreateListing.css';
import axios from 'axios';
import Input from '../../components/UIElements/inputs/Inputs';
import Dropzone from 'react-dropzone';
import Spinner from '../../components/UIElements/spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { proxy, zipAPIKey } from '../../urlsAPI/urlsAPI';

class CreateListing extends Component {
    state={
        elements: {
            year: {
                type: 'year',
                value: [],
                active: true,
                valid: false,
                clicked: false,
                data: ''
            },
            make: {
                type: 'make',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            model: {
                type: 'model',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            bodyStyle: {
                type: 'bodyStyle',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            transmission: {
                type: 'transmission',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            exteriorColor: {
                type: 'exteriorColor',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            interiorColor: {
                type: 'interiorColor',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            numberOfDoors: {
                type: 'numberOfDoors',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            fuelType: {
                type: 'fuelType',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            },
            condition: {
                type: 'condition',
                value: [],
                active: false,
                valid: false,
                clicked: false,
                data: ''
            }
        },
        inputs: {
            price: {
                type: 'price',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            mileage: {
                type: 'mileage',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            description: {
                type: 'description',
                value: '',
                valid: true,
                touched: false,
                errorMessage: '',
                rules: {
                    required: false
                }
            },
            firstName: {
                type: 'firstName',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            lastName: {
                type: 'lastName',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            email: {
                type: 'email',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            phoneNumber: {
                type: 'phoneNumber',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            city: {
                type: 'city',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            },
            zip: {
                type: 'zip',
                value: '',
                valid: false,
                touched: false,
                errorMessage: '',
                rules: {
                    required: true
                }
            }
        },
        images: [],
        formIsValid: true,
        loading: false,
        formSubmitted: false,
        options: []
    }

    componentWillMount(){
        const copyElements = {
            ...this.state.elements
        };

        axios.post('/get_param', {
            type: this.state.elements.year.type
        }).then(response => {
            copyElements['year'].value = response.data;

            this.setState({
                elements: copyElements
            });
        });
    }

    onChangeHandler = (event, current) => {
        const value = event.target.value;

        const copyElements = {
            ...this.state.elements
        }

        copyElements[current.type].data = event.target.value;

        if(value === 'select'){
            copyElements[current.type].valid = false;
        } else {
            copyElements[current.type].valid = true;
        }

        const arrayOfValues = [];
        for(let prop in this.state.elements){
            arrayOfValues.push(prop);
        }

        const index = arrayOfValues.findIndex((element) => element === current.type);
        const nextElement = arrayOfValues[index+1];

        const element = arrayOfValues[index];
        if(element === arrayOfValues[arrayOfValues.length-1]){
            return;
        } else {
    
            axios.post(`/get_${nextElement}`, {
                type: nextElement,
                params: value
            }).then(response => {
                if(response.data !== ''){
                    copyElements[nextElement].value = response.data;
                    copyElements[nextElement].active = true;
                } else if(response.data === '') {
                    const shortArray = arrayOfValues.slice(index+1);
                    
                    shortArray.forEach(element => {
                        copyElements[element].active = false;
                        copyElements[element].valid = false;
                        copyElements[element].value = [];
                        copyElements[element].data = '';
                    });
                }
    
                this.setState({
                    elements: copyElements
                });
            });
        }
    }

    getOptionsForRender = (element) => {

        const options = element.value.map(current => {
            return <option value={current}>{current}</option>
        });

        return options;
    }

    onDrop = (acceptedFiles) => {
        let files = this.state.images;

        for(let i=0; i<acceptedFiles.length; i++){
            files.push(acceptedFiles[i]);
        }

        this.setState({
            images: files
        }, () => {
            console.log(this.state.images);
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        const valid = this.validateForm();

        const arrayOfElements = [];

        const copyElements = {
            ...this.state.elements
        }

        for(let prop in copyElements){
            arrayOfElements.push(copyElements[prop]);
        }

        arrayOfElements.forEach(element => {
            copyElements[element.type].clicked = true;
        })

        const copyInputs = {
            ...this.state.inputs
        }

        const arrayOfInputs = [];

        for(let input in copyInputs){
            arrayOfInputs.push(copyInputs[input]);
        }

        arrayOfInputs.forEach(element => {
            copyInputs[element.type].touched = true;
            this.validateData(element);
        })

        this.setState({
            elements: copyElements,
            inputs: copyInputs
        }, () => {
            const inputs = {
                ...this.state.inputs
            }
            const arrayInputs = [];

            for(let prop in inputs){
                arrayInputs.push(inputs[prop]);
            }

            arrayInputs.forEach(element => {
                if(element.type !== 'city'){
                    const index = element.value.indexOf(',');
                    inputs[element.type].value = element.value.replace(element.value.charAt(index), '');
                }
            });

            this.setState({
                inputs: inputs
            }, () => {
                if(valid){
                    const fd = new FormData();

                    const elementsArray = [];
                    for(let prop in this.state.elements){
                        elementsArray.push(this.state.elements[prop]);
                    }

                    elementsArray.forEach(element => {
                        fd.append(element.type, element.data);
                    });

                    const inputsArray = [];
                    for(let prop in this.state.inputs){
                        inputsArray.push(this.state.inputs[prop]);
                    }

                    inputsArray.forEach(element => {
                        fd.append(element.type, element.value);
                    });
        
                    for(let i=0; i<this.state.images.length; i++){
                        fd.append('images[]', this.state.images[i]);
                    }
        
                    this.setState({
                        loading: true
                    })
        
                    axios.post('/create_listing', fd).then(response => {
                        if(response.data === 'submitted'){
                            this.setState({
                                loading: false,
                                formSubmitted: true
                            })
                        }
                    });
                }
            })
        });
    }

    validateData = (element) => {
        const copyInputs = {
            ...this.state.inputs
        }

        copyInputs[element.type].touched = true;

        let valid = false;

        if(element.value.trim() !== '' && element.rules.required){
            valid = true;
        }

        if(valid){
            copyInputs[element.type].valid = true;
            copyInputs[element.type].errorMessage = '';
        } else if(!element.rules.required && !valid){
            copyInputs[element.type].valid = true; 
        } else {
            copyInputs[element.type].valid = false;
            copyInputs[element.type].errorMessage = 'Field cannot be empty';
        }

        if(element.type === 'phoneNumber' && !/\(\d{3}\)-\d{3}-\d{4}/.test(element.value) && valid){
            copyInputs[element.type].valid = false;
            copyInputs[element.type].errorMessage = 'does not match valid format: (000)-000-0000'
        }

        if(element.type === 'zip' && valid && element.value.length !== 5){
            copyInputs[element.type].valid = false;
            copyInputs[element.type].errorMessage = 'Field should have 5 digits';
        } else if(element.type === 'zip' && valid && element.value.length === 5){
            copyInputs[element.type].valid = true;
            copyInputs[element.type].errorMessage = '';
        }

        if(element.type === 'zip' && valid && copyInputs['city'].value !== '' && 
        element.value.length === 5){
            axios.get(`${proxy}https://www.zipcodeapi.com/rest/${zipAPIKey}/info.json/${element.value}/radians`)
            .then(response => {
                let city = copyInputs['city'].value;
                let index = city.indexOf(',');
                city = city.slice(0, index);

                if(response.data.city !== city){
                    copyInputs[element.type].valid = false;
                    copyInputs[element.type].errorMessage = 'invalid zip code for this location';

                    this.setState({
                        inputs: copyInputs
                    });
                }
            });
        }

        this.setState({
            inputs: copyInputs
        });
    }

    onBlurHandler = (element) => {
        this.validateData(element);
    }

    onChangeInput = (event, currentElement) => {
        
        const copyInputs = {
            ...this.state.inputs
        }
        copyInputs[currentElement.type].touched = true;
        
        if(currentElement.type === 'phoneNumber'){
            if(/^[\(]*[0-9]*[\)]*[-]*\d*[-]*\d*$/.test(event.target.value)){    
                copyInputs[currentElement.type].value = event.target.value;

                if(event.target.value.length === 3){
                    copyInputs[currentElement.type].value = `(${event.target.value})-`
                } else if(event.target.value.length === 9){
                    copyInputs[currentElement.type].value = `${event.target.value}-`
                } else if(event.target.value.length === 15){
                    copyInputs[currentElement.type].value=
                    copyInputs[currentElement.type].value
                    .slice(0, copyInputs[currentElement.type].value.length-1);
                    return;
                } else if(event.target.value.length === 10 || event.target.value.length === 5){
                    copyInputs[currentElement.type].value = '';
                }
            } else {
                copyInputs[currentElement.type].value = '';
            }
        } else if(currentElement.type === 'price' || currentElement.type === 'mileage'){
            if(/^\d*[,]*\d*$/.test(event.target.value)){
                copyInputs[currentElement.type].value = event.target.value;
                
                let firstVal;
                let secondVal;
                let fullNumber;

                if(event.target.value.length === 4){
                    firstVal = event.target.value.slice(0, 1);
                    secondVal = event.target.value.slice(1);
                    copyInputs[currentElement.type].value = `${firstVal},${secondVal}`;
                } else if(event.target.value.length === 6){
                    firstVal = event.target.value.slice(0, 1);
                    secondVal = event.target.value.slice(2, 6);
                    fullNumber = `${firstVal}${secondVal}`;
                    copyInputs[currentElement.type].value = `${fullNumber.slice(0, 2)},${fullNumber.slice(2)}`;
                } else if(event.target.value.length === 7){
                    firstVal = event.target.value.slice(0, 2);
                    secondVal = event.target.value.slice(3, 7);
                    fullNumber = `${firstVal}${secondVal}`;
                    copyInputs[currentElement.type].value = `${fullNumber.slice(0, 3)},${fullNumber.slice(3)}`;
                } else if(event.target.value.length === 8) {
                    copyInputs[currentElement.type].value = event.target.value.slice(0, event.target.length-2);
                }
            } else {
                copyInputs[currentElement.type].value = '';
            }
        } else if(currentElement.type === 'zip'){
            copyInputs[currentElement.type].value = event.target.value;
            if(event.target.value.length === 6){
                copyInputs[currentElement.type].value=
                copyInputs[currentElement.type].value.slice(0, copyInputs[currentElement.type].value.length-1);
                return;
            }
        } else if(currentElement.type === 'firstName' || currentElement.type === 'lastName'){
            if(/^[a-zA-Z]*$/.test(event.target.value)){
                copyInputs[currentElement.type].value = event.target.value;
            }
        } else if(currentElement.type === 'city'){
            copyInputs[currentElement.type].value = event.target.value;

            copyInputs['zip'].value = '';
            copyInputs['zip'].touched = false;
            copyInputs['zip'].valid = false;
            copyInputs['zip'].errorMessage = '';
        } else {
            copyInputs[currentElement.type].value = event.target.value;
        }

        this.setState({
            inputs: copyInputs
        });
    }

    onKeyDownHandler = (event, currentElement) => {
        const copyElements = {
            ...this.state.inputs
        }
        if(event.keyCode === 8){
            copyElements[currentElement.type].value = '';
        }

        this.setState({
            inputs: copyElements
        });
    }

    validateForm = () => {
        const elements = [];

        for(let prop in this.state.elements){
            elements.push(this.state.elements[prop]);
        }
        
        for(let input in this.state.inputs){
            elements.push(this.state.inputs[input]);
        }

        const valids = elements.map(current => current.valid);

        if(valids.includes(false)){
            this.setState({
                formIsValid: false
            });

            return false;
        } else {
            this.setState({
                formIsValid: true
            })

            return true;
        }
    }

    deleteImage = (items, item) => {
        const index = items.findIndex(current => current === item);
        const copyImages = this.state.images;

        copyImages.splice(index, 1);

        this.setState({
            images: copyImages
        })
    }

    onKeyUpHandler = (param) => {
        axios.post('/get_certain_cities', {
            value: param 
        }).then(response => {
            const options = response.data.slice(0, 5);

            this.setState({
                options: options
            });
        });
    }

    render() {
        const arrayOfElements = [];

        for(let element in this.state.elements){
            arrayOfElements.push(this.state.elements[element]);
        }

        const selects = arrayOfElements.map(element => (
            <Input element={element.type}
                   invalid={!element.active}
                   selectValid={element.valid}
                   clicked={element.clicked}
                   onChangeHandler={(event) => this.onChangeHandler(event, element)}>
                   {this.getOptionsForRender(element)}</Input>
            )
        );

        const urls = this.state.images.map(current => {
            return URL.createObjectURL(current);
        })

        const images = urls.map(current => (
            <div className={classes.image}>
                <div className={classes.imageWrapper}
                     onClick={() => this.deleteImage(urls, current)}>
                    <img src={current} />
                    <div className={classes.deleteButton}>X</div>
                </div>
            </div>
        ));

        const arrayOfInputs = [];

        for(let param in this.state.inputs){
            arrayOfInputs.push(this.state.inputs[param]);
        }

        const options = this.state.options.map(option => {
            return <option value={`${option.city}, ${option.state}`}></option>
        })

        const inputs = arrayOfInputs.map(current => (
            <Input element={current.type}
                   value={current.value}
                   valid={current.valid}
                   touched={current.touched}
                   error={current.errorMessage}
                   onChangeHandler={(event) => this.onChangeInput(event, current)}
                   onBlurHandler={() => this.onBlurHandler(current)}
                   onKeyDownHandler={(event) => this.onKeyDownHandler(event, current)}
                   onKeyUpHandler={() => this.onKeyUpHandler(current.value)}
                   options={options} />
        ))

        const contactData = inputs.slice(3);

        let component = (
            <form method="post" encType="multipart/form-data"
                  onSubmit={(event) => this.onSubmitHandler(event)}>
                <div className={classes.wrapperListing}>
                    <div className={classes.vehicleInfo}>
                        <h1>Vehicle Information</h1>
                        {selects}
                        <div className={classes.inputs}>
                            {inputs[0]}
                            {inputs[1]}
                        </div>
                        <Dropzone onDrop={this.onDrop}>
                            {({getRootProps, getInputProps}) => (
                            <div className={classes.drop} {...getRootProps()}>
                                <input {...getInputProps()} />
                                Drop photos here
                            </div>
                            )}
                        </Dropzone>
                        <div className={classes.images}>
                            {images}
                        </div>
                        {inputs[2]}
                    </div>
                    <div className={classes.contactData}>
                        <h2>Contact Information</h2>
                        <div className={classes.inputs}>
                            {contactData}
                        </div>
                    </div>
                    <Input element="createListing" />
                    {!this.state.formIsValid ? <p>Selected fields must be filled</p>: null}
                </div>
            </form>
        )

        if(this.state.formSubmitted){
            component = <Redirect to="/sell_car" />
        }

        if(this.state.loading){
            component = (
                <div style={{paddingTop: '80px'}}>
                    <Spinner />
                </div>
            )
        }

        return component;
    }
}

export default CreateListing;